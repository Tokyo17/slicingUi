import "./style/Quote.css"

const Quote =()=>{
    return(
        <div className="quote">
            <div className="containerQuote">
                <h3>Good productivity with a good mentality</h3>
                <div className="textQuote">
                    <p>“Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.” — <span>Fred Rogers</span> </p>
                </div>
                <div className="question">
                    <p className="weight">Ready for our release? <span className="red">Let’s talk later</span> </p>
                </div>
            </div>
        </div>
    )
}

export default Quote