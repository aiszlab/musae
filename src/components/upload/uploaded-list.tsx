import React, { forwardRef, type Key, useImperativeHandle, useMemo } from "react";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type {
  UploadedItem as UploadedItemType,
  UploadedListProps,
  UploadedListRef,
} from "musae/types/upload";
import { clsx, useControlledState, useEvent, useIdentity } from "@aiszlab/relax";
import { typography } from "../theme/theme";
import { isRemoteFile } from "./utils";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";
import { UploadClassToken } from "../../utils/class-name";
import UploadedItem from "./uploaded-item";

const styles = stylex.create({
  list: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.small,
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
  },

  filename: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const UploadedList = forwardRef<UploadedListRef, UploadedListProps>(
  ({ uploader, onError, value, onChange, limit = Infinity }, ref) => {
    const [values, setValues] = useControlledState(value, { defaultState: [] });
    const [, identity] = useIdentity();
    const classNames = useClassNames(ComponentToken.Upload);

    // convert to map, for performance
    const items = useMemo(() => {
      return values.reduce<Map<Key, UploadedItemType>>((prev, _item) => {
        const _isRemoteFile = isRemoteFile(_item);

        if (_isRemoteFile) {
          const _id = _item.key ?? _item.url;
          prev.set(_id, { key: _id, status: "success", url: _item.url });
          return prev;
        }

        prev.set(_item.key, _item);
        return prev;
      }, new Map());
    }, [values]);

    // when loading status changed
    // use this func to set new status & callback
    const onLoaded = useEvent(
      (
        id: string,
        status: "success" | "error",
        { url, error }: { url?: string; error?: Error },
      ) => {
        if (!items.has(id)) return;

        const _items = new Map(items);
        const _values = Array.from(
          _items.set(id, { ..._items.get(id)!, status, url, error }).values(),
        );
        setValues(_values);
        onChange?.(_values);
      },
    );

    useImperativeHandle(ref, () => {
      return {
        add: async (file: File) => {
          const _hasUploader = !!uploader;
          const _isOnlyOne = limit === 1;
          const _isOverLimit = items.size >= limit;

          // over `limit`
          if (_isOverLimit && !_isOnlyOne) {
            return;
          }

          // show loading in `add` trigger
          const _key = identity();
          const _values = Array.from(
            new Map(_isOnlyOne ? [] : items)
              .set(_key, { key: _key, file, status: _hasUploader ? "loading" : "success" })
              .values(),
          );
          setValues(_values);
          onChange?.(_values);

          // when no uploader, use original file
          if (!_hasUploader) return;

          // use custom uploader to upload file
          // get remote url path
          const _url = await uploader(file).catch((error) => {
            return new Error(error.message);
          });

          if (_url instanceof Error) {
            onLoaded(_key, "error", { error: _url });
            onError?.(_url);
            return;
          }

          onLoaded(_key, "success", { url: _url });
        },
      };
    });

    const remove = useEvent((key: Key) => {
      const _items = new Map(items);
      _items.delete(key);
      const _values = Array.from(_items.values());

      setValues(_values);
      onChange?.(_values);
    });

    const styled = {
      list: stylex.props(styles.list),
      item: stylex.props(styles.item, typography.body.small),
      filename: stylex.props(styles.filename),
    };

    return (
      <div
        className={clsx(classNames[UploadClassToken.UploadedList], styled.list.className)}
        style={styled.list.style}
      >
        {Array.from(items.values()).map((item) => {
          return <UploadedItem item={item} key={item.key} onRemove={remove} />;
        })}
      </div>
    );
  },
);

export default UploadedList;
