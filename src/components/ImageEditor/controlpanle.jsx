import { useEffect, useState, useContext, createContext } from "react";
import "../../Css/panle.css"
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import TuneIcon from '@mui/icons-material/Tune';
import { Settings, ResetTv, Download } from "@mui/icons-material";
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
        setValues
    }

    const [isDragging, setIsDragging] = useState(false);
    const [useFilter, setUseFilter] = useState(false)



    return (
        <ImageEditor.Provider value={state}>

            <div className="w-full h-full bg-[#1f1d1d] fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-between items-center mt-auto" >

                <div className="bord flex justify-center items-center relative h-full w-full left-1/2 top-0 -translate-x-[50%]">
                    <div className="loader" style={{ display: waitImag ? "block" : "none" }}></div>
                    <img src={getU} id="Im" alt="" style={{ filter: values }} />
                    <TransformWrapper
                        // initialScale={1}
                        // initialPositionX={200}
                        // initialPositionY={100}
                        className="whel hidden relative w-auto">
                        {({ zoomIn, zoomOut }) => (
                            <>
                                <div className=" absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full z-50 p-2 flex gap-2 items-center ">
                                    <button className={`p-2 bg-[#292828] m-1 rounded-full transition-colors flex justify-center items-center hover:bg-[#0071e2]`} onClick={() => zoomOut()}><ZoomOutIcon /></button>
                                    <button className={`p-2 bg-[#292828] m-1 rounded-full transition-colors flex justify-center items-center hover:bg-[#0071e2]`} onClick={() => zoomIn()}><ZoomInIcon /></button>
                                </div>

                                <TransformComponent>
                                    <canvas
                                        draggable
                                        onDragStart={() => setIsDragging(true)}
                                        onMouseMove={() => setIsDragging(false)}
                                        className={` 
                                            h-full w-full
                                            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
                                        `}
                                        id="canvas"
                                    ></canvas>
                                </TransformComponent>
                            </>
                        )}
                    </TransformWrapper>
                </div>

                <Filters
                    className={`bg-[#2e2d2d] rounded-2xl w-[250px] `}
                    style={{
                        display: useFilter ? "flex" : "none",
                        position: "absolute",
                        left: "60px",
                        top: "20px"
                    }}
                />

                <div className="left-bar h-full p-2 w-auto bg-[#2e2d2d] absolute right-0 flex flex-col items-center justify-center gap-2">

                    <button
                        onClick={() => setUseFilter(!useFilter)}
                        className={`
                            ${useFilter ? "bg-[#6ccfd6]" : "bg-[#242323]"}
                            w-[30px] h-[30px] rounded-full 
                            hover:bg-[#6ccfd6]
                        `}
                    >
                        <TuneIcon />
                    </button>

                    <a
                        className={`
                            w-[30px] h-[30px] rounded-full bg-[#242323] flex justify-center items-center
                            hover:bg-[#6ccfd6]
                        `}
                        download="image"
                        id="download"
                        href=""
                    >
                        <Download />
                    </a>

                    <button
                        className={`
                            w-[30px] h-[30px] rounded-full bg-[#242323] flex justify-center items-center
                            hover:bg-[#6ccfd6]
                        `}
                        onClick={() => {
                            setValues(``)
                        }}
                    >
                        <ResetTv />
                    </button>

                </div>

                <div className="right-bar h-full p-2 w-auto bg-[#2e2d2d] absolute left-0 flex flex-col items-center justify-center gap-2">

                    <button id='close' className="cursor-pointer bg-[#a15151] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0" onClick={() => {
                        setshowpanle(false)
                        setValues(``)
                        document.body.style.overflow = "auto"
                        document.fullscreenElement == null ? null : handleToggleFullScreen()
                    }}>
                        <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", }} />
                    </button>

                    <button id='wead' className="cursor-pointer flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0"
                        onClick={() => {
                            setFullw(Fullw ? false : true),
                                handleToggleFullScreen()
                        }}
                    >
                        {isFullScreen ? <FontAwesomeIcon icon={faCompress} style={{ color: "#ffffff", }} /> : <FontAwesomeIcon icon={faExpand} style={{ color: "#ffffff", }} />}
                    </button>

                    <button>
                        <Settings />
                    </button>

                </div>


            </div>

        </ImageEditor.Provider>
    )
}