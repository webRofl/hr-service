import React, { FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css';
import { useFormContext } from 'react-hook-form';

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

  if (!isEdit) {
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: getValues()[name] }} />;
  }

  const handleChange = (value: string) => {
    setValue(name, value);
  };

  return (
    <ReactQuill
      theme="snow"
      value={getValues()[name]}
      onChange={handleChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default RichTextEditor;
