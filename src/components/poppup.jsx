import { useEffect } from "react";

function Poppup(Props) {

    let limit = 0

    function handletimer() {
        // for (let i = 100; i >= limit;) {
        //     ++limit
        // }

        document.getElementsByClassName("card-inner").classlist.add("active")
    }

    useEffect(() => {
        handletimer()
    } )

    return(
        <div className="card">
            <div className="card-inner overflow-hidden">
                <div className="timer l absolute top-0 h-1 w-full bg-white rounded-[22px]" style={{left: `${limit}%`}}></div>
                {Props.messageProblem}  
                <div className="timer r absolute bottom-0 h-1 w-full bg-white rounded-[22px]"></div> 
            </div>
        </div>
    )
}

export default Poppup;