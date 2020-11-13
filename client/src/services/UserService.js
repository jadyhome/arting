import ApiClient from './ApiClient'

export const __GetProfile = async (userId) => {
  try {
    const response = await ApiClient.get(`/users/${userId}`)
    return response.data
  } catch (error) {
      throw error
  }
}

export const __UserSignUp = async (formData) => {
  try {
    const response = await ApiClient.post('/users/signup', formData)
    return response.data
  } catch (error) {
      throw error
  }
}

export const __UserSignIn = async (userData) => {
  try {
    const response = await ApiClient.post('/users/signin', userData)
    return response.data
  } catch (error) {
      throw error
  }
}