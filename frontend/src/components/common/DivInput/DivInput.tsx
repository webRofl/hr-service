import React, { CSSProperties, FC, SyntheticEvent } from 'react';

interface DivInputProps {
  value: string;
  changeValueHandler: (value: string) => void;
  isEdit: boolean;
  isBlock?: boolean;
  divStyle?: CSSProperties;
  inputStyle?: CSSProperties;
}

const DivInput: FC<DivInputProps> = ({
  value,
  changeValueHandler,
  isEdit,
  divStyle,
  inputStyle,
  isBlock,
}) => {
  const change = (e: SyntheticEvent<HTMLInputElement>) => {
    changeValueHandler(e.currentTarget.value);
  };

  if (isEdit && !isBlock) {
    return <input value={value} onChange={change} style={inputStyle || divStyle} />;
  }

  return <div style={divStyle}>{value}</div>;
};

export default DivInput;
