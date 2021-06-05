import Toolbar from "./toolbar";
import DarkmodeSlider from './darkmodeSlider'
import style from './styles/layout.module.scss'

const Layout = (props:any) => {

  return (
      <div className={style.container}>
        <div className={style['toolbar-container']}>
          <Toolbar />
          <div className={style['slider-container']}>
            <DarkmodeSlider/>
          </div>
        </div>
        <div className={style[style['children-container']]}>
          {props.children}
        </div>
      </div>
    )
 };

export default Layout;