import { EmployeeProfile, EmployerProfileRetrieveBody } from '@/store/api/orvalGeneration/models';

type CommonProfileKeys = Extract<keyof EmployeeProfile, keyof EmployerProfileRetrieveBody>;
type OtherKeys<T extends EmployeeProfile | EmployerProfileRetrieveBody> = Exclude<
  keyof T,
  CommonProfileKeys
>;

type CommonProfile = Pick<EmployeeProfile, CommonProfileKeys>;
type EmployeeRemainder = Pick<EmployeeProfile, OtherKeys<EmployeeProfile>>;
type EmployerRemainder = Pick<EmployerProfileRetrieveBody, OtherKeys<EmployerProfileRetrieveBody>>;

export type ProfileState = CommonProfile | Partial<EmployeeRemainder | EmployerRemainder>;

export type ProfileStateMethods = {
  getState: () => ProfileState;
  setProfile: (profile: ProfileState) => void;
};
