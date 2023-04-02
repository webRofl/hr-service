import styled, { CSSProperties } from 'styled-components';

export const signInStyles: CSSProperties = {
  backgroundColor: 'transparent',
  position: 'absolute',
  bottom: '4%',
};
export const ProfileContainer = styled('div')`
  position: absolute;
  bottom: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Profile = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const Img = styled('img')`
  width: 2rem;
  border-radius: 50%;
`;
