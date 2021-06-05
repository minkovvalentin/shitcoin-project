import { useContext, useState } from 'react'
import styles from '../styles/login.module.css'
import { login } from '../services/authenticationService'
import { AuthenticationEnum } from '../enums/authentication'
import { GlobalContext } from '../contexts/globalContext'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { getCookie } from '../services/cookieService'

enum RegisterFormFieldEnum {
  USERNAME,
  EMAIL,
  PASSWORD, 
  REPEATPASSWORD
}

export default function Login() {
  const router = useRouter()
  const { authenticated ,updateAuthenticated } = useContext(GlobalContext)
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(authenticated)

  const validFill = (): boolean => Boolean(username && password)

  const onLoginClick = async (e:any) => {
    e.preventDefault()
    if(username && password) {
      const userLoggedIn = await login(username, password)
      if(userLoggedIn) {
        updateAuthenticated(true)
        setIsAuthenticated(true)
        router.push('/')
      } 
    }
  }

  const onInputChange = (e:any, field: RegisterFormFieldEnum) => {
    const value: string = e.target.value;
    switch (field) {
      case RegisterFormFieldEnum.PASSWORD:
        setPassword(value)
      break;
      break;
      case RegisterFormFieldEnum.USERNAME:
        setUsername(value)
      break;
    }
  }

  return (
    <div className={styles['main-container']}>
        <div className={styles['center-container']}>   
          <div className={styles['form-container']}>
            <div>
              <p>Proident ad duis do amet fugiat labore aliquip ea laborum dolor tempor ut consectetur.</p>
            </div>
            <div className={styles['form-input-container']}>
              <label className={styles['form-input-label']}> Username </label>
              <input value={username} onChange={(e) => onInputChange(e, RegisterFormFieldEnum.USERNAME )} type="text" className={styles['form-input']} placeholder="username" />
            </div>
            <div className={styles['form-input-container']}>
              <label className={styles['form-input-label']}> Password </label>
              <input value={password} onChange={(e) => onInputChange(e, RegisterFormFieldEnum.PASSWORD )} type="password" className={styles['form-input']} placeholder="password" />
            </div>
            {
              !isAuthenticated &&
              <button disabled={!validFill()} onClick={onLoginClick} className={styles['form-button']}>Login</button>
              ||
              <button disabled={true} className={styles['form-button']}>Login</button>
            }
          </div>
        </div>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {req} = context
  const cookie = getCookie(AuthenticationEnum.TOKEN, req)
  if(!!cookie) {
    return {
      redirect: {
      permanent: false,
      destination: "/"
      }
    }
  }
  else {
    return {
      props: {
      },
    };
  }

}
