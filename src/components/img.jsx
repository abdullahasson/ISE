import data from "./imagedata";

function Img(Props) {
    return (
        <img  src={Props.sss} id={Props.idA} alt="" className="image" onClick={
            () => {
                Props.sh(true)
                data.shift()
                data.push(Props.sss)
            }
        }/>
    )
}

export default Img;