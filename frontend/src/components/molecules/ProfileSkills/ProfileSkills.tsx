import React, { FC } from 'react';

interface ProfileSkillsProps {
  skills: Record<string, string>[] | null;
}

const ProfileSkills: FC<ProfileSkillsProps> = ({ skills }) => {
  if (!skills) {
    return <div>Skills is not defined</div>;
  }

  return (
    <div>
      {skills.map((s) => (
        <div key={s.id}>{s.name}</div>
      ))}
    </div>
  );
};

export default ProfileSkills;
