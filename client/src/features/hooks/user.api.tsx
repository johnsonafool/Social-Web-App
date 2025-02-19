import Env from 'config/env'
import makeApi from 'lib/apiConfiguration'
import { IRegisterPayload } from 'features/types/user.types'

const api = makeApi(`${Env.API_BASE_URL}`)

export const userLoginApi = async (account: string, password: string): Promise<any> =>
  api.get(`/api/user/login?account=${account}&password=${password}`).catch(error => error)

export const registerApi = async (payload: IRegisterPayload): Promise<any> => {
  const temp = {
    email: payload.email,
    username: payload.username,
    account: payload.account,
    password: payload.password,
    created_time: payload.created_time.toJSON().slice(0, -1),
    gender: payload.gender,
  }
  return api.post(`/api/user/register`, temp).catch(error => {
    console.log(error)
  })
}

export const fetchFriendSug = async (account: string) => {
  const response = await api.get(`api/user/getFriendSug?id=${account}`)
  return response
}
