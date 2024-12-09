import axios from '@/lib/axios'
import type {
  LoginRequest,
  PasswordResetRequest,
  RegisterRequest,
} from '@/app/@types/account.interface'

const getAuthenticatedUser = function () {
  return axios.get('/api/v1/users/authenticated')
}

const login = async function (payload: LoginRequest) {
  await axios.get('/sanctum/csrf-cookie')
  return axios.post('/login', payload)
}

const logout = function () {
  return axios.post('/logout')
}

const register = async function (payload: RegisterRequest) {
  await axios.get('/sanctum/csrf-cookie')
  return axios.post('/register', payload)
}

const resetPassword = async function (payload: PasswordResetRequest) {
  await axios.get('/sanctum/csrf-cookie')
  return axios.post('/reset-password', payload)
}

const sendPasswordResetLink = async function (payload: string) {
  await axios.get('/sanctum/csrf-cookie')
  return axios.post(`/forgot-password?email=${payload}`)
}

export default {
  getAuthenticatedUser,
  login,
  logout,
  register,
  resetPassword,
  sendPasswordResetLink,
}
