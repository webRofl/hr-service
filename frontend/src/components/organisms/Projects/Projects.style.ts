import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
`;

export const ProjectCardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-right: 4.5%;
  padding-left: 4.5%;
  overflow-y: scroll;
  max-height: calc(100vh - 2rem);
`;
