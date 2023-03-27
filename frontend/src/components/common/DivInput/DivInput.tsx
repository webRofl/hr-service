import React, { ChangeEvent, FC, useMemo, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { DivInputProps } from './DivInput.types';
import * as SC from './DivInput.style';
import './style.css';

const DivInput: FC<DivInputProps> = ({
  name,
  value,
  isEdit,
  divStyle,
  inputStyle,
  containerStyle,
  commonStyle,
  changeValueHandler,
  isForm = false,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { register } = useFormContext();

  const inputEl = useMemo(() => {
    if (isForm) {
      return <SC.Input {...register(name)} style={commonStyle} />;
    }

    const changeHandler = (event: ChangeEvent) => {
      changeValueHandler(event.currentTarget.value);
    };

    return <SC.Input value={value} onChange={changeHandler} style={commonStyle} />;
  }, [isForm]);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={isEdit}
        nodeRef={nodeRef}
        classNames="fade"
        timeout={250}
        addEndListener={(done) => {
          nodeRef?.current.addEventListener('transitionend', done, false);
        }}>
        <div ref={nodeRef} style={containerStyle}>
          {isEdit ? inputEl : <div style={divStyle ?? commonStyle}>{value}</div>}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default DivInput;
