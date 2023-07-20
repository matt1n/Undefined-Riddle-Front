import useAsync from "../useAsync";
import useToken from "../useToken";

import * as phasesApi from '../../services/phasesApi'

export default function usePhaseAuth(){
    const token = useToken();
    const {
        loading: endPhaseAuthLoading,
        error: endPhaseAuthError,
        act: endPhaseAuth,
    } = useAsync((data) => phasesApi.endPhaseAuthorization(data, token),false);

    return {
        endPhaseAuthLoading,
        endPhaseAuthError,
        endPhaseAuth
    }
}