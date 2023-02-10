import React, { FC, PropsWithChildren } from 'react';
import { OAuthLink } from './OAuth.style';

interface IOAuthProps {
  href: string;
}

const OAuth: FC<PropsWithChildren<IOAuthProps>> = ({ href, children }) => {
  return <OAuthLink href={href}>{children}</OAuthLink>;
};

export default OAuth;
