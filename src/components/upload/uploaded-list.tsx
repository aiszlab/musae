import React, { forwardRef, type Key, useContext, useImperativeHandle, useMemo } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type {
  UploadedItem as UploadedItemType,
  UploadedListProps,
  UploadedListRef,
} from "../../types/upload";
import { useControlledState, useEvent, useIdentity } from "@aiszlab/relax";
import { isRemoteFile } from "./utils";
import UploadedItem from "./uploaded-item";
import { Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";

const styles = $create({
  list: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,
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
    const { renderItem, classNames } = useContext(Context);

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
        uploadeds: Map<React.Key, UploadedItemType>,
        id: string,
        status: "success" | "error",
        { url, error }: { url?: string; error?: Error },
      ) => {
        if (!uploadeds.has(id)) return;

        const _items = new Map(uploadeds);
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
          const _items = new Map(_isOnlyOne ? [] : items).set(_key, {
            key: _key,
            file,
            status: _hasUploader ? "loading" : "success",
          });
          const _values = Array.from(_items.values());
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
            onLoaded(_items, _key, "error", { error: _url });
            onError?.(_url);
            return;
          }

          onLoaded(_items, _key, "success", { url: _url });
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

    // no uploaded file, no render!
    // no item render, no render!
    if (items.size === 0 || !renderItem) {
      return null;
    }

    const styled = {
      list: $props(styles.list),
      item: $props(styles.item, $body.small),
      filename: $props(styles.filename),
    };

    return (
      <div
        className={stringify(classNames.uploadedList, styled.list.className)}
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
