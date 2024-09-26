import Style from './Meio.module.css'

import Foto from '../assets/fotogustavo.jfif'

function Meio() {
   return(
    <>
    <main className={Style.divmeio}>
        <p>Meio do site</p>
        <img src={Foto} width={200} height={200}/>
    </main>
    </>
   )
}

export default Meio