import { ProjectBody, ProjectFooter, ProjectHeader } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { projectsUpdate, useProjectsRead } from '@/store/api/orvalGeneration/projects/projects';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Project } from '@/store/api/orvalGeneration/models';
import * as SC from './ProjectPage.style';

const ProjectPage = () => {
  const { projectId } = useParams();
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const { data } = useProjectsRead(projectId!);
  const [isMyProject, setIsMyProject] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isLoadingSubmitBtn, setIsLoadingSubmitBtn] = useState<boolean>(false);

  useEffect(() => {
    setIsMyProject(data?.data.author === userId);
  }, [data?.data.author, userId]);

  const method = useForm<Project>({
    defaultValues: data?.data,
  });

  useEffect(() => {
    method.reset(data?.data);
  }, [data]);

  const handleClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleSubmitEdit = async (values: Project) => {
    setIsLoadingSubmitBtn(true);
    const data = await projectsUpdate(projectId!, values);
    setIsLoadingSubmitBtn(false);
    if (data.status === 200) {
      setIsEdit(false);
      return;
    }
    // eslint-disable-next-line no-alert
    alert(data.data);
  };

  return (
    <FormProvider {...method}>
      <SC.Container
        container
        spacing={2}
        component="form"
        onSubmit={method.handleSubmit(handleSubmitEdit)}>
        <ProjectHeader
          title={data?.data?.title ?? ''}
          employment={data?.data?.employment ?? ''}
          salary={data?.data?.salary ?? null}
          img={data?.data?.image ?? ''}
          expirience={data?.data?.experience ?? 0}
          description={data?.data?.description ?? ''}
          author={data?.data?.author ?? ''}
          projectRate={data?.data?.votes_average ?? 0}
          projectVotesCount={data?.data?.total_votes ?? 0}
          isEdit={isEdit}
        />
        <ProjectBody content={data?.data?.fully_description || ''} isEdit={isEdit} />
        <ProjectFooter reviews={data?.data?.reviews || []} />
        {isMyProject && (
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
                label="Edit Project"
                variant="contained"
                color="success"
                onClick={handleClickEdit}
              />
            )}
          </SC.Buttons>
        )}
      </SC.Container>
    </FormProvider>
  );
};

export default ProjectPage;
