import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalENV } from '@/types';

interface IRedirectProps {
  path: string;
}

const Redirect: FC<IRedirectProps> = ({ path }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, []);

  return <div>redirect to {`${GlobalENV.FQDN_FRONTEND}${path}`}</div>;
};

export default Redirect;
