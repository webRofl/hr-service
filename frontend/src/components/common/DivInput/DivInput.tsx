import React, { FC, useRef } from 'react';
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
  readOnly,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { register } = useFormContext();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        // @ts-expect-error something mistake
        key={isEdit}
        nodeRef={nodeRef}
        classNames="fade"
        timeout={250}
        addEndListener={(done) => {
          // @ts-expect-error something mistake
          nodeRef?.current.addEventListener('transitionend', done, false);
        }}>
        <div ref={nodeRef} style={containerStyle}>
          {isEdit && !readOnly ? (
            <SC.Input {...register(name, { value })} style={inputStyle ?? commonStyle} />
          ) : (
            <div style={divStyle ?? commonStyle}>{value}</div>
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default DivInput;
