'use client';
import type { RecoilRootProps } from 'recoil';
import { RecoilRoot } from 'recoil';

export type RecoilProviderProps = RecoilRootProps;

export const RecoilProvider = (props: RecoilProviderProps) => {
  return <RecoilRoot {...props} />;
};
