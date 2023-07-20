import api from './api'

export async function phaseAuthorization(phaseNumber, token) {
  const response = await api.get(`/phases/${phaseNumber}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export async function endPhaseAuthorization(phaseNumber, token) {
    const response = await api.get(`/phases/end/${phaseNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
}