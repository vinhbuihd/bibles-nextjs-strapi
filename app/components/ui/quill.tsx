import React from 'react';

import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

type QuillEditorProps = {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
};

const QuillEditor: React.FC<QuillEditorProps> = ({ name, control, label, placeholder }) => {
  return (
    <div className="mb-4">
      {label && <label className="mb-1 block font-semibold">{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactQuill
            theme="snow"
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default QuillEditor;
