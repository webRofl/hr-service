import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { ProjectBody, ProjectHeader, ProjectPageControl } from '@/components/molecules';
import { useLocalStorageState } from '@/store';
import { projectsGetRead, projectsUpdate } from '@/store/api/orvalGeneration/projects/projects';
import { Project, ProjectRetrieve } from '@/store/api/orvalGeneration/models';
import { Reviews } from '@/components/common';
import { reviewsProjectCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import { objectUtils } from '@/utils';
import * as SC from './ProjectPage.style';

const ProjectPage = () => {
  const { projectId } = useParams();
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const [data, setData] = useState<ProjectRetrieve | null>(null);
  const [isMyProject, setIsMyProject] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isLoadingSubmitBtn, setIsLoadingSubmitBtn] = useState<boolean>(false);
  const [imgLink, setImgLink] = useState('');

  const method = useForm<Project>({
    defaultValues: data!,
  });

  useEffect(() => {
    if (typeof data?.image === 'string') {
      setImgLink(data?.image);

      objectUtils.blobUrlToFile(data?.image).then((file) => {
        // @ts-expect-error wrong state image field
        method.setValue('image', file);
      });
    }
  }, [data?.image]);

  useEffect(() => {
    const fetch = async () => {
      const project = (await projectsGetRead(projectId!)).data;
      setData(project);
    };

    fetch();
  }, [projectId]);

  useEffect(() => {
    setIsMyProject(data?.author === userId);
  }, [data?.author, userId]);

  useEffect(() => {
    method.reset(data!);
  }, [data]);

  const handleClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const successCallback = async () => {
    const newData = (await projectsGetRead(projectId!)).data;
    setData(newData);
  };

  const handleSubmitEdit: SubmitHandler<Project> = async (values) => {
    setIsLoadingSubmitBtn(true);

    // @ts-expect-error invalid orval type definition
    const data = await projectsUpdate(projectId!, values);
    setIsLoadingSubmitBtn(false);
    if (data.status === 200) {
      setIsEdit(false);
      const newData = (await projectsGetRead(data.data.id!)).data;
      setData(newData);
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
        // @ts-expect-error MUI error
        component="form"
        onSubmit={method.handleSubmit(handleSubmitEdit)}>
        <ProjectHeader
          title={data?.title ?? ''}
          employment={data?.employment ?? ''}
          salary={data?.salary ?? null}
          imgLink={imgLink}
          setImgLink={setImgLink}
          expirience={data?.experience ?? 0}
          description={data?.description ?? ''}
          author={data?.author ?? ''}
          projectRate={data?.votes_average ?? 0}
          projectVotesCount={data?.total_votes ?? 0}
          isEdit={isEdit}
        />
        <ProjectBody name="fully_description" isEdit={isEdit} />
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
