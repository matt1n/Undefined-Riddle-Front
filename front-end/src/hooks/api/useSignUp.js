import useAsync from '../useAsync'

import * as usersApi from '../../services/usersApi'

export default function useSignUp() {
    const {
      loading: signUpLoading,
      error: signUpError,
      act: signUp
    } = useAsync(usersApi.signUp, false);
  
    return {
      signUpLoading,
      signUpError,
      signUp
    };
  }