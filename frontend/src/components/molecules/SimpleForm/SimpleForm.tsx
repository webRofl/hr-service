import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput, TextArea } from '@/components/atoms';
import { Props as ButtonProps } from '@/components/atoms/Button/Button.types';
import { DefaultFormSubmitHandler } from '@/types';
import * as SC from './SimpleForm.style';

interface CommonInputsProps {
  name: string;
}

interface SimpleFormProps {
  buttonProps: Omit<ButtonProps, 'type'>;
  defaultValues?: Record<string, string | number>;
  extraComponents?: [string, React.FC<CommonInputsProps>][];

  handleSubmitForm: DefaultFormSubmitHandler;
}

const SimpleForm: FC<SimpleFormProps> = ({
  defaultValues,
  buttonProps,
  extraComponents,
  handleSubmitForm,
}) => {
  const method = useForm({
    defaultValues,
  });

  return (
    <FormProvider {...method}>
      <SC.Form onSubmit={method.handleSubmit(handleSubmitForm)}>
        {Object.keys(method.getValues()).map((fieldName) => {
          const extraComponent = extraComponents?.find(([key]) => key === fieldName);
          if (extraComponent) {
            const [_, Component] = extraComponent;
            return <Component key={fieldName} name={fieldName} />;
          }

          return <FormInput key={fieldName} name={fieldName} required />;
        })}

        <SC.Button type="submit" {...buttonProps} />
      </SC.Form>
    </FormProvider>
  );
};

export default SimpleForm;
