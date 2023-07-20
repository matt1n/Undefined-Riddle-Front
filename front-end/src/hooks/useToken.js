import { useContext } from 'react';

import {UserContext} from '../contexts/UserContext';

export default function useToken() {
  const {user} = useContext(UserContext);

  return user;
}
