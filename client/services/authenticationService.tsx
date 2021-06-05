import { login as loginApi } from '../api/authentication';
import { AuthenticationEnum } from '../enums/authentication';
import { removeCookie, setCookie } from './cookieService';
import { setToLocalStorage, removeFromLocalStorage  } from './globalService';

export const login = async (username: string, password: string) => {
  const { jwt } = await loginApi(username, password)
  if(!!jwt) {
    setToLocalStorage(AuthenticationEnum.TOKEN, jwt)
    setCookie(AuthenticationEnum.TOKEN, jwt);
  }

  return !!jwt
}

export const logout = async () => {
  removeCookie(AuthenticationEnum.TOKEN)
  removeFromLocalStorage(AuthenticationEnum.TOKEN)
}