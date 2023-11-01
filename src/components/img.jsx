function Img(Props) {
    return (
        <div className="blur-load">
            <img  src={Props.thumb} id={Props.idA} alt="" className="image" onClick={
                () => {
                    Props.sh(true)
                    Props.imageUrl("")
                    Props.imageUrl(Props.thumb)
                }
            }/>
        </div>
    )
}

export default Img;