import "./style/Header.css"

import ilustHeader from "./img/illustration1.png"

const Header=()=>{
    return(
      <div className="header">
        <div className="containerHeader">
            <div className="textHeader">
                <h1>Luangkan waktu sejenak</h1>
                <p>Kesehatan mentalmu juga perlu perhatian sama seperti kesehatan tubuhmu.</p>
                  <div className="headerButton">
                    <a href="#test">Mulai Berselancar</a>
                  </div>
            </div>

            <div className="imgHeader">
                <img src={ilustHeader}/>
            </div>
        </div>
      </div>

    )
}

export default Header