import { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext'
import {logout} from '../services/authenticationService'

interface Props {
  style: any;
}

const LogoutButton = ({style}: Props) => { 
   const { updateAuthenticated } = useContext(GlobalContext)

  const onClick = () => {
    logout()
    updateAuthenticated(false)
  }

  return (
    <>
      <span className={style} onClick={onClick}><span>Logout</span></span>
    </>
  );
}

export default LogoutButton;