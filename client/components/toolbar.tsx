import style from './styles/toolbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext'
import LogoutButton from './logoutButton'

const Toolbar = () => { 

  const { authenticated } = useContext(GlobalContext)

  const getToolbarBasedOnState = () => {   
    if (authenticated) {
    return (
      <>
        <a href="/profile" className={style['nav-link']} >
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </a>
        <a href="/" className={style['nav-link']} ><span>Home</span></a>
        <a href="/coins" className={style['nav-link']} ><span>Coins</span></a>
        <LogoutButton style={style['nav-link']} />
      </>
    )
    } else {
      return (
        <>
          <a href="/login" className={`${style['nav-link']} ${style['active-link']}`}><span>Login</span></a>
          <a href="/" className={style['nav-link']} ><span>Home</span></a>
          <a href="/coins" className={style['nav-link']} ><span>Coins</span></a>
        </>
      )
    }
  }

  return (
    <div className={style.container} >
      <nav className={style["nav-container"]} suppressHydrationWarning={true}>
        {getToolbarBasedOnState()}
      </nav>
      <div className={style['nav-indicator']}></div>
    </div>
  );
}

export default Toolbar;