import React, { FC } from 'react';
import * as SC from './ProjectPageControl.style';

interface ProjectPageControlProps {
  isEdit: boolean;
  isLoadingSubmitBtn: boolean;
  label?: string;

  handleClickEdit: () => void;
}

const ProjectPageControl: FC<ProjectPageControlProps> = ({
  isEdit,
  handleClickEdit,
  isLoadingSubmitBtn,
  label,
}) => {
  return (
    <SC.Buttons>
      {isEdit ? (
        <>
          <SC.Button
            label="Cancel Edit"
            variant="outlined"
            color="error"
            onClick={handleClickEdit}
          />
          <SC.Button
            label="Submit"
            type="submit"
            isLoading={isLoadingSubmitBtn}
            variant="contained"
            color="success"
          />
        </>
      ) : (
        <SC.Button
          label={label ?? 'Edit Project'}
          variant="contained"
          color="success"
          onClick={handleClickEdit}
        />
      )}
    </SC.Buttons>
  );
};

export default ProjectPageControl;
