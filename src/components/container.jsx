/* eslint-disable react/jsx-key */
import { useEffect , useRef , useState } from "react";
import Title from "./title";
import axios from 'axios';
import Control from "./controlpanle"
import Poppup from "./poppup"
import Drawe from "./Drawer";
import Searshload from "./SearshLoad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import "react-image-gallery/styles/css/image-gallery.css";
import "../ImageG.css"
import { ImageList } from "@mui/material";

function Container() {
    const Acces = "kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g"

    const [dataImg , setdataImg] = useState([])
    const [dataImgtwo , setdataImgtwo] = useState([])
    const [dataImgthree , setdataImgthree] = useState([])
    const [KeyWord , setKeyWord] = useState("")
    const [show , setShow] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false);
    const [showpanle , setshowpanle] = useState(false)
    const [errorPoppup , setErrorPoppup] = useState(false)
    const [errorMessage , setErrorMessage] = useState("")
    const [imageurlforpanle , setimageurlforpanle] = useState("")
    const [isdataready , setisdataready] = useState(false)
    const [getqulite , setgetqulite] = useState(window.localStorage.getItem("ImageQuality") ? window.localStorage.getItem("ImageQuality") : window.localStorage.setItem("ImageQuality" , "regular"))
    
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
 
    const fetchData = async (parm) => {
        setIsDownloading(true)
        try {
            const response1 = axios.get(`https://api.unsplash.com/search/photos?page=1&query=${parm}&per_page=20content_filter=low&client_id=${Acces}`);
            const result = await Promise.all([response1]);
            const [data1] = result.map(res => res.data.results);
    
            setdataImg(data1.map(res => res.urls.thumb));
            setdataImgtwo(data1.map(res => res.urls.regular))
            setdataImgthree(data1.map(res => res.urls.full))
            setErrorPoppup(false)
            setisdataready(true)

        } catch (error) {
            setErrorMessage(error.message)
            setErrorPoppup(true)
            setisdataready(false)
        }
        setgetqulite(window.localStorage.getItem("ImageQuality"))
        setIsDownloading(false)
        setShow(true)
    } 

    
    function handleTheQulite() {
        if (getqulite == "thumb") {
            return(
                dataImg.map((item) => (
                    <LazyLoadImage 
                        effect="blur"
                        src={item}
                        className="w-full"
                        onClick={
                            () => {
                                setimageurlforpanle(item)
                                setshowpanle(true)
                            }
                        }
                    />    
                    
                ))
            )
        } else if (getqulite == "regular") {
            return(
                dataImgtwo.map((item) => (
                    <LazyLoadImage 
                        effect="blur"
                        src={item}
                        className="w-full"
                        onClick={
                            () => {
                                setimageurlforpanle(item)
                                setshowpanle(true)
                            }
                        }
                    />    
                    
                ))
            )
        } else if (getqulite == "full") {
            return(
                dataImgthree.map((item) => (
                    <LazyLoadImage 
                        effect="blur"
                        src={item}
                        className="w-full"
                        onClick={
                            () => {
                                setimageurlforpanle(item)
                                setshowpanle(true)
                            }
                        }
                    />    
                    
                ))
            )
        } else if (getqulite) {
            setErrorMessage("...")
            setErrorPoppup(true)
        }
    }

    return (
        <>
            {showpanle ? <Control close={showpanle => setshowpanle(showpanle)} photoup={imageurlforpanle} /> : null}
            {errorPoppup ? <Poppup messageProblem={errorMessage} /> : null}
            <Drawe der="/ISE/ImageG" derContact="/ISE/ContactUs" datar={isdataready}/>

            <div className="container flex flex-col items-center justify-between" 
                style={{pointerEvents: showpanle ? "none" : "all" , filter: showpanle ? "blur(6px)" : "blur(0px)" }}>
        
                <form action="" onSubmit={(e) => {e.preventDefault()}}  className="flex justify-between items-center flex-col gap-10 p-12 w-full">
                    <Title colorLetter="Image Search Engine"/>

                    <div className="searchBox">
                        <input className="searchInput" type="text" value={KeyWord} name placeholder="Search something" onChange={(e) => {
                                setShow(false)
                                setdataImg([])
                                setKeyWord(e.target.value)
                                setisdataready(false)
                                setErrorPoppup(false)
                            }}  ref={inputRef} style={{pointerEvents : isDownloading ? "none" : "all"}}/>
                        <button className="searchButton" type="submit" style={{pointerEvents : isDownloading ? "none" : "all"}} onClick={() => {
                                if (KeyWord.length > 0) {
                                    fetchData(KeyWord)
                                } else {
                                    setErrorMessage("there is nothing to searsh")
                                    setErrorPoppup(true)
                                }
                            }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#ffffff",}} />
                        </button>
                    </div>
                </form>

                {show ? ( 
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {handleTheQulite()}
                    </ImageList>
                ) : null}
            </div>
        
            {isDownloading && <Searshload />}
        </>
    )
}

export default Container;