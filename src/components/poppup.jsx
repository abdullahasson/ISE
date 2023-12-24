import "../Css/poppup.css"

function Poppup(Props) {
    return(
        <div className="card">
            <div className="card-inner overflow-hidden">
                <div className="timer l absolute top-0 h-1 w-full bg-white rounded-[22px]"></div>
                {Props.messageProblem}  
                <div className="timer r absolute bottom-0 h-1 w-full bg-white rounded-[22px]"></div> 
            </div>
        </div>
    )
}

export default Poppup;