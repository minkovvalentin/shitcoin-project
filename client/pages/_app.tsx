import '../styles/globals.css'
import Layout from '../components/layout'
import {getCookie} from '../services/cookieService'
import { AuthenticationEnum } from '../enums/authentication'
import { AuthPayload } from '../interfaces/auth'
import type { AppContext, AppProps } from 'next/app'
import { GlobalContext } from '../contexts/globalContext'
import App from 'next/app'
import { ThemeEnum } from '../enums/theme'
import { useState } from 'react'

interface CustomAppProps extends AppProps {
  auth: AuthPayload
}

function MyApp({ Component, pageProps, auth:{token:authToken, isAuthenticated} }: CustomAppProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(isAuthenticated)
  const [currentTheme, setCurrentTheme] = useState<ThemeEnum>(ThemeEnum.DARK)

  return (
    <GlobalContext.Provider value={{
        authenticated: authenticated,
        updateAuthenticated: setAuthenticated,
        theme: currentTheme,
        updateTheme: setCurrentTheme
      }} >
      <div className="main-body">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </GlobalContext.Provider>
    )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const {ctx} = appContext
  const cookie = getCookie(AuthenticationEnum.TOKEN, ctx.req)
  const auth: AuthPayload = { isAuthenticated: !!cookie, token: cookie }
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, auth }
}

export default MyApp
