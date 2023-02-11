import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GlobalENV } from '@/types';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: GlobalENV.FQDN_API }),
  endpoints: () => ({}),
});
