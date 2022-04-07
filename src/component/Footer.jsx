import rehat from"./img/image.png"
import "./style/Footer.css"
const Footer=()=>{


    let date =new Date()
    // console.log(date.getFullYear)
    let newDate = new Date()
// let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
    return(
        <div className="footers">
            <div className="containerFooter">
                <div className="kiri">
                    <h3>Brought to you by REHAT</h3>
                    <div className="mission">
                        <p>We are on mission to spread awareness of mental health and loves. The services that we will provide coming from people fretfulness.</p> 
                        <p>We are provide Rehat Center to keep our mission to be complete.</p>
                    </div>      
                </div>

                <div className="kanan">
                        <p>ABOUT</p>
                        <p>BUSINESS MODEL</p>
                        <p>PRIVACY</p>
                        <p>TERM OF SERVICE</p>
                        <p>CONTACT</p>  
                </div>
            </div>
            <div className="bawah">
                <div className="bingkaiImgFooter">
                            <img src={rehat}/>
                </div>  
                <p>&copy;{year}  Rehat</p>
            </div>
        </div>
    )
}

export default Footer