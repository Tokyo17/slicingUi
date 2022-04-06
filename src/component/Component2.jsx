
import "./style/Component2.css"

import ilus3 from  "./img/ilus3.png"

const Component2=()=>{
    return(
        <div className="component2">
            <div className="containerComponent2">
                <div className="textComponent2">
                        <h1>Together we can recover your pain</h1>
                        <p>Saat <span className="miring">workload</span> atau beban belajar mudah untuk ditangani, siapapun 
                            akan lebih produktif. Yuk, cobain bagaimana caranya meringankan beban!</p>
                </div>
                <div className="imgComponent2">
                        <img src={ilus3}/>
                </div>
            </div>
        </div>
    )
}
export default Component2