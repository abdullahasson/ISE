import { useEffect, useState, useContext, createContext } from "react";
import "../../Css/panle.css"
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../App";
import Filters from "./filters";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const ImageEditor = createContext()


export default function Control() {

    const { setshowpanle, imageurlforpanle } = useContext(AppContext)


    const [now, setNow] = useState(false)
    // get image from main section
    const [getU, setGetu] = useState()
    const [waitImag, setwaitImag] = useState(false)


    useEffect(() => {
        const getimage = async () => {
            // show loader while the image complete 
            setwaitImag(true)
            try {
                const response = await axios.get(imageurlforpanle, {
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
                console.log("redy")
            }, 1000)
        }

        getimage()
    }, [imageurlforpanle])

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

    const [Fullw, setFullw] = useState(false)
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


    const [values, setValues] = useState(``)
    const state = {
        now,
        setNow,
        values,
        setValues,
    }


    return (
        <ImageEditor.Provider value={state}>
            <div className="panle rounded-[10px] flex justify-between items-center mt-auto" style={{ width: Fullw ? "100%" : "auto", height: Fullw ? "100%" : "auto" }}>
                <div className="absolute left-0 top-0 flex justify-start items-center bg-[#fff]">
                    <button id='close' className="cursor-pointer absolute left-[-0.25rem] top-[-0.25rem] bg-[#a15151] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0" onClick={() => {
                        setshowpanle(false)
                        setValues(``)
                        document.body.style.overflow = "auto"
                        document.fullscreenElement == null ? null : handleToggleFullScreen()
                    }}>
                        <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", }} />
                    </button>


                    <button id='wead' className="cursor-pointer absolute left-[-0.25rem] top-[1.2rem] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0"
                        onClick={() => {
                            setFullw(Fullw ? false : true),
                                handleToggleFullScreen()
                        }}
                    >
                        {isFullScreen ? <FontAwesomeIcon icon={faCompress} style={{ color: "#ffffff", }} /> : <FontAwesomeIcon icon={faExpand} style={{ color: "#ffffff", }} />}
                    </button>
                </div>


                <div className="bord">
                    <div className="loader" style={{ display: waitImag ? "block" : "none" }}></div>
                    <img src={getU} id="Im" alt="" style={{ filter: values }} />
                    <TransformWrapper className="whel relative w-auto">
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <>
                                <div className="absolute rounded-full right-1 bottom-1 bg-[#615f5f] z-30 p-2 flex flex-col items-center ">
                                    <button onClick={() => zoomIn()}>+</button>
                                    <button onClick={() => zoomOut()}>-</button>
                                    <button onClick={() => resetTransform()}>x</button>
                                </div>
                                <TransformComponent>
                                    <canvas id="canvas" onDrag={() => {
                                        document.getElementById("canvas").style.cursor = "grabbing"
                                    }}>

                                    </canvas>
                                </TransformComponent>
                            </>
                        )}
                    </TransformWrapper>
                </div>

                <Filters />

            </div>
        </ImageEditor.Provider>
    )
}