import React, { CSSProperties, FC, SyntheticEvent, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './style.css';

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
  const nodeRef = useRef(null);

  const changeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    changeValueHandler(e.currentTarget.value);
  };

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={isEdit}
        nodeRef={nodeRef}
        classNames="fade"
        timeout={250}
        addEndListener={(done) => {
          nodeRef.current.addEventListener('transitionend', done, false);
        }}>
        <div ref={nodeRef}>
          {isEdit ? (
            <input value={value} onChange={changeHandler} style={inputStyle || divStyle} />
          ) : (
            <div style={divStyle}>{value}</div>
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default DivInput;
