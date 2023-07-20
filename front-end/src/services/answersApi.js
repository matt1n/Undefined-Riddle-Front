import api from './api'

export async function sendAnswer(answer,phaseNumber,token){
    const response = await api.post(`/answers/${phaseNumber}`, {answer}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}