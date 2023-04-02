import { ProjectBody, ProjectHeader, ProjectPageControl } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { projectsRead, projectsUpdate } from '@/store/api/orvalGeneration/projects/projects';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Project } from '@/store/api/orvalGeneration/models';
import { Reviews } from '@/components/common';
import { reviewsProjectCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import * as SC from './ProjectPage.style';

const ProjectPage = () => {
  const { projectId } = useParams();
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const [data, setData] = useState<Project | null>(null);
  const [isMyProject, setIsMyProject] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isLoadingSubmitBtn, setIsLoadingSubmitBtn] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      const project = (await projectsRead(projectId!)).data;
      setData(project);
    };

    fetch();
  }, [projectId]);

  useEffect(() => {
    setIsMyProject(data?.author === userId);
  }, [data?.author, userId]);

  const method = useForm<Project>({
    defaultValues: data,
  });

  useEffect(() => {
    method.reset(data);
  }, [data]);

  const handleClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const successCallback = async () => {
    const newData = (await projectsRead(projectId!)).data;
    setData(newData);
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
          title={data?.title ?? ''}
          employment={data?.employment ?? ''}
          salary={data?.salary ?? null}
          img={data?.image ?? ''}
          expirience={data?.experience ?? 0}
          description={data?.description ?? ''}
          author={data?.author ?? ''}
          projectRate={data?.votes_average ?? 0}
          projectVotesCount={data?.total_votes ?? 0}
          isEdit={isEdit}
        />
        <ProjectBody content={data?.fully_description || ''} isEdit={isEdit} />
        <Reviews
          reviews={data?.reviews || []}
          placeId={projectId!}
          placeName="project"
          dataLoadCallback={reviewsProjectCreate}
          successCallback={successCallback}
        />
        {isMyProject && (
          <ProjectPageControl
            isLoadingSubmitBtn={isLoadingSubmitBtn}
            isEdit={isEdit}
            handleClickEdit={handleClickEdit}
          />
        )}
      </SC.Container>
    </FormProvider>
  );
};

export default ProjectPage;
