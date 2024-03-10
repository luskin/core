import { AuthContext } from '@/app/(auth)/auth.provider';
import { useContext } from 'react';

export const useSession = () => useContext(AuthContext);
