import { useEffect, useState } from "react";
import "../Css/panle.css"
import Btnload from "./btnload";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark , faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import { Slider } from '@mui/material';


export default function Control(Props) {
    // get image from main section
    const [getU, setGetu] = useState()
    const [waitImag, setwaitImag] = useState(false)


    useEffect(() => {
        const getimage = async () => {
            // show loader while the image complete 
            setwaitImag(true)
            try {
                const response = await axios.get(Props.photoup , {
                    responseType: 'blob',
                });

                const blob = await response.data;
                const imageURL = URL.createObjectURL(blob);

                setGetu(imageURL)

            } catch (error) {
                console.log(error);
            }
            // disapperar the loader when the image complete
            setwaitImag(false)

            setTimeout(() => {
                setSaturate(1.1)
            }, 100);
        }

        getimage()
    }, [])

    // Download Section 
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const img = document.getElementById("Im")
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.style.maxWidth = "400px"
        canvas.style.maxHeight = "500px"
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        canvas.style.maxWidth = "400px"
        canvas.style.maxHeight = "500px"
        img.style.display = "none"
        ctx.filter = values
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        canvas.style.maxWidth = "400px"
        canvas.style.maxHeight = "500px"

        const dow = document.getElementById("download");
        dow.onclick = () => {
            setNow(true)
            dow.classList.add("active")
            dow.href = canvas.toDataURL("image/jpg");
            setTimeout(() => {
                setNow(false)
                dow.classList.remove("active")
            }, 2000);
        }
    })


    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if (event.code === 'KeyC') {
                document.getElementById("close").click()
            }

            if (event.code == 'KeyW') {
                document.getElementById("wead").click()
            }
        });
    })

    // Loading effect
    const [now, setNow] = useState(false)
    const [Fullw, setFullw] = useState(false)

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

    const [isFullScreen, setIsFullScreen] = useState(false);
    
    useEffect(() => {
        const handleFullScreenChange = () => {
        setIsFullScreen(document.fullscreenElement !== null);
        };
    
        document.addEventListener("fullscreenchange", handleFullScreenChange);
    
        return () => {
        document.removeEventListener("fullscreenchange", handleFullScreenChange);
        };
    }, []);
    
    const handleToggleFullScreen = () => {
        if (!isFullScreen) {
        document.documentElement.requestFullscreen();
        } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        }
    };

    document.body.style.overflow = "hidden"

    return (
        <div className="panle rounded-[10px] flex p-2 justify-center items-center mt-auto" style={{ width: Fullw ? "100%" : "auto", height: Fullw ? "100%" : "auto" }}>
            <div className="absolute left-0 top-0 flex justify-start items-center">
                <button id='close' className="cursor-pointer absolute left-[-0.25rem] top-[-0.25rem] bg-[#a15151] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0" onClick={() => {
                    Props.close(false)
                    document.body.style.overflow = "auto"
                    document.fullscreenElement == null ? null : handleToggleFullScreen()
                }}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /></button>

                <button id='wead' className="cursor-pointer absolute left-[-0.25rem] top-[1.2rem] bg-[#a19c51] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0" 
                    onClick={() => {
                        setFullw(Fullw ? false : true),
                        handleToggleFullScreen()
                    }}
                >{isFullScreen ? <FontAwesomeIcon icon={faCompress} style={{ color: "#ffffff", }} /> : <FontAwesomeIcon icon={faExpand} style={{ color: "#ffffff", }} />}</button>
            </div>

            <div className="bord">
                <div className="loader" style={{ display: waitImag ? "block" : "none" }}></div>
                <img src={getU} id="Im" alt="" style={{ filter: values }} />
                <canvas id="canvas"></canvas>
            </div>

            <form action="" className="flex flex-col gap-0 p-8 relative max-[566px]:w-full" onSubmit={(event) => { event.preventDefault() }}
                style={{ pointerEvents: waitImag ? "none" : "all"}}
            >

                
                <div className="part"  >
                    <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setBrightness(e.target.value) }}
                        value={brightness} 
                        max={3} 
                        step={0.1}
                    />
                    <label htmlFor="">Brightness</label>
                </div> 

                {/* Contrast */}
                <div className="part"  >
                    <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setContrast(e.target.value) }}
                        value={contrast} 
                        max={3} 
                        step={0.1}
                    />
                    <label htmlFor="">Contrast</label>
                </div>

                {/* saturate */}
                <div className="part"  >
                    <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setSaturate(e.target.value) }}
                        value={saturate} 
                        max={3} 
                        step={0.1}
                    />
                    <label htmlFor="">saturate</label>
                </div>

                {/* blur */}
                <div className="part"  >
                    <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setBlur(e.target.value) }}
                        value={blur} 
                        max={3} 
                        step={0.1}
                    />
                    <label htmlFor="">Blur</label>
                </div>

                {/* Grayscale */}
                <div className="part"  >
                    <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setGrayscale(e.target.value) }}
                        value={grayscale} 
                        max={3} 
                        step={0.1}
                    />
                    <label htmlFor="">Grayscale</label>
                </div>

                {/* hue rotate */}
                <div className="part"  >
                  <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setHuerotate(e.target.value) }}
                        value={hueRotate} 
                        max={360} 
                        step={1}
                    />
                    <label htmlFor="">hueRotate</label>
                </div>

                {/* sepia */}
                <div className="part"  >
                  <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setSepia(e.target.value) }}
                        value={sepia} 
                        max={3} 
                        step={0.1}
                    />
                    <label htmlFor="">sepia</label>
                </div>

                {/* invert */}
                <div className="part"  >
                  <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setInvert(e.target.value) }}
                        value={invert} 
                        max={3} 
                        step={0.1}
                    />
                    <label htmlFor="">invert</label>
                </div>


                {/* Opacite */}
                <div className="part"  >
                  <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => { setOpacity(e.target.value) }}
                        value={opacity} 
                        max={1} 
                        step={0.1}
                    />
                    <label htmlFor="">Opacite</label>
                </div>


                <div className="buttons p-4 flex items-center justify-center gap-3">
                    <a download="image" id="download" href="" className="download">{now ? <Btnload /> : <span>Download</span>}</a>
                    <button className="reset" href="" onClick={() => {
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