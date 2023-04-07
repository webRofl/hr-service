import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from '@/store';

const useProfileRedirectOrSetAffiliation = (profileId: string): boolean => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = useAuthState(({ userId }) => ({ userId }));
  const [isMyProfile, setIsMyProfile] = useState(false);

  useEffect(() => {
    if (location.pathname === '/profile') {
      navigate('/');
    }

    if (userId === profileId) {
      setIsMyProfile(true);
    }
  }, [userId, profileId]);

  return isMyProfile;
};

export default useProfileRedirectOrSetAffiliation;
