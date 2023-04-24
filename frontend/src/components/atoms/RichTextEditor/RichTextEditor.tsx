import React, { FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import * as SC from './RichTextEditor.style';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, false] }],
    [{ align: [] }],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'align',
];

interface RichTextEditorProps {
  name: string;
  isEdit: boolean;
}

const RichTextEditor: FC<RichTextEditorProps> = ({ name, isEdit }) => {
  const { getValues, setValue } = useFormContext();

  const handleChange = (value: string) => {
    setValue(name, value);
  };

  return (
    <Grid xs={12}>
      {!isEdit ? (
        <SC.Preview
          data-testid="preview"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: getValues()[name] }}
        />
      ) : (
        <ReactQuill
          theme="snow"
          value={getValues()[name]}
          onChange={handleChange}
          modules={modules}
          formats={formats}
        />
      )}
    </Grid>
  );
};

export default RichTextEditor;
