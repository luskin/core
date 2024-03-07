import { AuthContext } from '@/app/_providers/auth.provider';
import { useContext } from 'react';

export const useSession = () => useContext(AuthContext);
