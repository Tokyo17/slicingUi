import rehat from"./img/image.png"
import "./style/Footer.css"
const Footer=()=>{
    return(
        <div className="footer">
            <div className="containerFooter">
                <div className="kiri">
                    <h3>Brought to you by REHAT</h3>
                    <div className="mission">
                        <p>We are on mission to spread awareness of mental health and loves. The services that we will provide coming from people fretfulness.</p> 
                        <p>We are provide Rehat Center to keep our mission to be complete.</p>
                    </div>
                    <div className="bingkaiImgFooter">
                        <img src={rehat}/>
                    </div>
                    <p>&copy; 2022 Rehat</p>
                </div>
                <div className="kanan">
                        <p>ABOUT</p>
                        <p>BUSINESS MODEL</p>
                        <p>PRIVACY</p>
                        <p>About</p>
                        <p>About</p>  
                </div>
            </div>
        </div>
    )
}

export default Footer