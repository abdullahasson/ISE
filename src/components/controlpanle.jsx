import { useEffect , useState } from "react";
import "../panle.css"

export default function Control() {

    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const img = document.getElementById("Im")
        // img.crossOrigin = "Anonymous";
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.style.maxWidth = "400px"
        canvas.style.maxHeight = "500px"
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height)
        canvas.style.maxWidth = "400px"
        canvas.style.maxHeight = "500px"
        img.style.display = "none"
        ctx.filter = values
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height)
        canvas.style.maxWidth = "400px"
        canvas.style.maxHeight = "500px"

        const dow = document.getElementById("download");
        img.onload = () => {
            dow.onclick = () => {
                dow.href = canvas.toDataURL();
            }
        }
    })

    const [blur, setBlur] = useState(0);
    const [brightness, setBrightness] = useState(1);
    const [grayscale, setGrayscale] = useState(0);
    const [contrast, setContrast] = useState(1);
    const [hueRotate, setHuerotate] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [saturate, setSaturate] = useState(1);
    const [sepia, setSepia] = useState(0);
    const [invert, setInvert] = useState(0);

    const values =
        `
        blur(${blur}px) 
        grayscale(${grayscale}) 
        brightness(${brightness}) 
        contrast(${contrast}) 
        hue-rotate(${hueRotate}deg)
        opacity(${opacity})
        saturate(${saturate})
        sepia(${sepia})
        invert(${invert})
    `;

    return (
        <div className="panle flex p-2 justify-between items-center rounded-md mt-auto">
            
            <div className="bord">
                <img className='' id="Im" src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MDMzOTJ8MXwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNjk1NTg0MDk2fDA&ixlib=rb-4.0.3&q=85" alt="" style={{ filter: values}} />
                <canvas id="canvas"></canvas>
            </div>

            <form action="" className="flex flex-col gap-3 p-8 relative" onSubmit={(event) => {event. preventDefault()}}>

                {/* Brightness */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setBrightness(e.target.value)}} value={brightness} max={3} step={0.1} />
                    <label htmlFor="">Brightness</label>
                </div>

                {/* Contrast */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setContrast(e.target.value)}} value={contrast} max={3} step={0.1} />
                    <label htmlFor="">Contrast</label>
                </div>

                {/* saturate */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setSaturate(e.target.value)}} value={saturate} max={3} step={0.1} />
                    <label htmlFor="">saturate</label>
                </div>

                {/* blur */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setBlur(e.target.value)}} value={blur} max={10} step={0.1} />
                    <label htmlFor="">Blur</label>
                </div>

                {/* Grayscale */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setGrayscale(e.target.value)}} value={grayscale} max={1} step={0.1} />
                    <label htmlFor="">Grayscale</label>
                </div>

                {/* hue rotate */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setHuerotate(e.target.value)}} value={hueRotate} max={360} step={1} />
                    <label htmlFor="">hueRotate</label>
                </div>

                {/* sepia */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setSepia(e.target.value)}} value={sepia} max={1} step={0.1} />
                    <label htmlFor="">sepia</label>
                </div>

                {/* invert */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setInvert(e.target.value)}} value={invert} max={1} step={0.1} />
                    <label htmlFor="">invert</label>
                </div>


                {/* Opacite */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {
                        setOpacity(e.target.value)}} value={opacity} max={1} step={0.1} />
                    <label htmlFor="">Opacite</label>
                </div>


                <div className="buttons p-4 flex items-center justify-center gap-3">
                    <button className="download" ><a download="image" id="download" href="">Download</a></button>
                    <button className="reset" href=""  onClick={() => {
                        setBlur(0)
                        setBrightness(1)
                        setGrayscale(0)
                        setContrast(1)
                        setHuerotate(0)
                        setOpacity(1)
                        setSaturate(1)
                        setSepia(0)
                        setInvert(0)
                    }}>Reset</button>
                </div>
            </form>
        </div>
    )
}