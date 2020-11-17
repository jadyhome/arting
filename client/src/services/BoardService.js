import ApiClient from './ApiClient'

export const __CreateBoard = async (formData, userId) => {
  try {
    const response = await ApiClient.post(`/artboards/${userId}/?active=true`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __GetArtBoards = async () => {
  try {
    const response = await ApiClient.get(`/artboards`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __GetArtBoard = async (boardId) => {
  try {
    const response = await ApiClient.get(`/artboards/${boardId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __UpdateBoard = async (formData, boardId) => {
  try {
    const response = await ApiClient.put(`/artboards/${boardId}?active=true`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const __DeleteBoard = async (boardId) => {
  try {
    const response = await ApiClient.delete(`/artboards/${boardId}?active=true`)
    return response
  } catch (error) {
    throw error
  }
}