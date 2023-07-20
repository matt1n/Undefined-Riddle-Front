import useAsync from "../useAsync";
import useToken from "../useToken";
import * as answersApi from '../../services/answersApi'
export default function usePostAnswer(){
    const token = useToken();
    const {
        loading: postAnswerLoading,
        error: postAnswerError,
        act: postAnswer
    } = useAsync((answer, phaseNumber) => answersApi.sendAnswer(answer, phaseNumber, token),false);

    return {
        postAnswerLoading,
        postAnswerError,
        postAnswer
    }
}
