import { useEffect , useState } from "react";
import "../panle.css"
import data from "./imagedata";
import Btnload from "./btnload";
import axios from 'axios';

export default function Control() {

    // get image from main section
    const [getU , setGetu] = useState()
    const [waitImag , setwaitImag] = useState(false)
    useEffect(() => {

        const getimage = async () => {
            setwaitImag(true)
            try {
                const response = await axios.get(data[0] , {
                    responseType: 'blob', 
                });

                const blob = await response.data;
                const imageURL = URL.createObjectURL(blob);
            
                setGetu(imageURL)

            } catch (error) {
                console.log(error);
            }
            setwaitImag(false)
        } 

        getimage()
    } , [])


    // Download Section 
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const img = document.getElementById("Im")
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
        dow.onclick = () => {
            setNow(true)
            dow.href = canvas.toDataURL(); 
            dow.classList.add("active")
            
        }
    })

    // Loading effect
    const [now , setNow] = useState(false)

    // store the values of ranges
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
        <div className="panle flex p-2 justify-center items-center rounded-md mt-auto">
            
            <div className="bord">
                <div className="loader" style={{display: waitImag ? "block" : "none"}}></div>
                <img src={getU} id="Im" alt="" style={{filter : values}}/>
                <canvas id="canvas"></canvas>
            </div>

            <form action="" className="flex flex-col gap-3 p-8 relative max-[566px]:w-full" onSubmit={(event) => {event. preventDefault()}}>

                {/* Brightness */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setBrightness(e.target.value)}} value={brightness} max={3} step={0.1} />
                    <label htmlFor="">Brightness</label>
                </div>

                {/* Contrast */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setContrast(e.target.value)}} value={contrast} max={3} step={0.1} />
                    <label htmlFor="">Contrast</label>
                </div>

                {/* saturate */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setSaturate(e.target.value)}} value={saturate} max={3} step={0.1} />
                    <label htmlFor="">saturate</label>
                </div>

                {/* blur */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setBlur(e.target.value)}} value={blur} max={10} step={0.1} />
                    <label htmlFor="">Blur</label>
                </div>

                {/* Grayscale */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setGrayscale(e.target.value)}} value={grayscale} max={1} step={0.1} />
                    <label htmlFor="">Grayscale</label>
                </div>

                {/* hue rotate */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setHuerotate(e.target.value)}} value={hueRotate} max={360} step={1} />
                    <label htmlFor="">hueRotate</label>
                </div>

                {/* sepia */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setSepia(e.target.value)}} value={sepia} max={1} step={0.1} />
                    <label htmlFor="">sepia</label>
                </div>

                {/* invert */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setInvert(e.target.value)}} value={invert} max={1} step={0.1} />
                    <label htmlFor="">invert</label>
                </div>


                {/* Opacite */}
                <div className="part"  >
                    <input type="range" onChange={(e) => {setOpacity(e.target.value)}} value={opacity} max={1} step={0.1} />
                    <label htmlFor="">Opacite</label>
                </div>


                <div className="buttons p-4 flex items-center justify-center gap-3">
                    <a download="image" id="download" href="" className="download">{now ? <Btnload /> : <span>Download</span>}</a>
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