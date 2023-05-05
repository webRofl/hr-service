import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styleMixins } from '@/style';

interface ContainerProps {
  issmup: boolean;
}

export const Container = styled(Link)<ContainerProps>`
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border-radius: 8px;
  width: 100%;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  color: ${({ theme }) => theme.gray.dark};
  ${({ issmup }) => !issmup && 'flex-direction: column'};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.dark};
  }

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const InfoContainer = styled('div')`
  padding: 0 1rem;
  position: relative;
  width: 100%;
`;

export const Title = styled('h2')<ContainerProps>`
  line-height: ${({ issmup }) => (issmup ? '10px' : '2rem')};
  ${styleMixins.firstLetterUp}
`;

export const Image = styled('img')`
  width: 300px;
  height: 14rem;
  border-radius: 6px;
  align-self: center;
`;

export const Description = styled('div')`
  ${styleMixins.firstLetterUp}
  word-wrap: anywhere;
`;

export const TagsContainer = styled('div')`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 25px;
`;

export const Tag = styled('div')`
  border-radius: 6px;
  border: 1px solid black;
  padding: 2px;
  overflow-x: hidden;
  margin-right: 6px;
  width: max-content;
`;

export const FirstLetterUp = styled('div')`
  ${styleMixins.firstLetterUp}
`;
