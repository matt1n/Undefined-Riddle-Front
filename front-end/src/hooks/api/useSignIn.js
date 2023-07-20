import useAsync from '../useAsync'

import * as usersApi from '../../services/usersApi'

export default function useSignIn() {
    const {
      loading: signInLoading,
      error: signInError,
      act: signIn
    } = useAsync(usersApi.signIn, false);
  
    return {
      signInLoading,
      signInError,
      signIn
    };
  }