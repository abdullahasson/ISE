import data from "./imagedata";

function Img(Props) {
    return (
        <img src={Props.sss} id={Props.idA} alt="" className="image" onClick={
            () => {
                data.push(Props.sss)
            }
        }/>
    )
}

export default Img;