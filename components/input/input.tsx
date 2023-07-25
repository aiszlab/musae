import React, { ChangeEventHandler, FC, useCallback, useState } from "react";

interface Props {
  value?: string;
  onChange?: (value: string) => void | Promise<void>;
  type: "outlined";
}

const Input: FC<Props> = (props) => {
  const [value, setValue] = useState(props.value);

  /**
   * @description input change event
   */
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const target = event.target.value;
    },
    [props.onChange]
  );

  return <input type="text" value={value} onChange={onChange} />;
};

export default Input;
