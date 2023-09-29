function Poppup(Props) {
    return(
        <div className="poppup">
            <i>!</i>
            <h1>{Props.write}</h1>
            <button>Ok</button>
        </div>
    )
}

export default Poppup;