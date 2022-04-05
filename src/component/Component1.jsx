import "./style/Component1.css"
import "./style/Component2.css"
import ilus2 from  "./img/ilus2.png"
import ilus3 from  "./img/ilus3.png"

const Component1=()=>{
    return(
        <div className="component1"id="test">
            <div className="containerComponent1">
                <div className="imgComponent1">
                        <img src={ilus2}/>
                </div>
                <div className="textComponent1">
                    <h1>Lelah, <span className="miring">Burn Out</span>, Cemas</h1>
                    <p>Jerih payah yang membuahkan hasil tidak luput dari dampak bagi kesehatan fisik 
                        dan mental. Tidak sedikit yang gagal mencapai tujuan hanya karena <span className="miring">kena mentalnya</span>.</p>
                </div>
            </div>
        </div>
    )
}
export default Component1