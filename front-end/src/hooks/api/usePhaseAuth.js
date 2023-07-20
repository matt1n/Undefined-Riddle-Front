import useAsync from "../useAsync";
import useToken from "../useToken";

import * as phasesApi from '../../services/phasesApi'

export default function usePhaseAuth(){
    const token = useToken();
    const {
        loading: phaseAuthLoading,
        error: phaseAuthError,
        act: phaseAuth,
    } = useAsync((data) => phasesApi.phaseAuthorization(data, token),false);

    return {
        phaseAuthLoading,
        phaseAuthError,
        phaseAuth
    }
}