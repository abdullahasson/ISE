function Title(Props) {

    const LetterWithColor = Props.colorLetter 

    function handleColor() {
        const result = []
        for (let i = 0; i < LetterWithColor.length; i++) {
            if (LetterWithColor[i] == LetterWithColor[i].toUpperCase()) {
                result.push(<span>{LetterWithColor[i]}</span>)
            } else {
                result.push(LetterWithColor[i])
            }
        }

        const last = [...result]

        return last
    }

    return (
        <div className="title text-center">
            <h1 className="font-semibold text-3xl text-white">
                {handleColor()}
            </h1>
        </div>
    )
}


export default Title;