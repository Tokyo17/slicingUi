import "./style/Card.css"
import ilustCard1 from "./img/ilustCard1.png"
import ilustCard2 from "./img/ilustCard2.png"
import ilustCard3 from "./img/ilustCard3.png"
const Card=()=>{
    return(
        <div className="Card">
            <div className="containerCard">
                <div className="coreCard">
                    <div className="imgCoreCard">
                        <img src={ilustCard1}/>
                    </div>
                    <div className="textCoreCard">
                        <h3>Meditation</h3>
                        <p>Meditasi membantu tubuh dan pikiran lebih bugar. </p>
                    </div>
                </div>
                <div className="coreCard">
                    <div className="imgCoreCard">
                        <img src={ilustCard2}/>
                    </div>
                    <div className="textCoreCard">
                        <h3>Relaxation</h3>
                        <p>Relaksasi merupakan cara paling ringan untuk melepas penat. </p>
                    </div>
                </div>
                <div className="coreCard">
                    <div className="imgCoreCard">
                        <img src={ilustCard3}/>
                    </div>
                    <div className="textCoreCard">
                        <h3>Consultation</h3>
                        <p>Ketika metode ringan kurang membantu, para psikolog bisa membantu melalui konsultasi. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card