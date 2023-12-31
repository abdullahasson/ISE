/* eslint-disable react/jsx-key */
import { useEffect , useRef , useState } from "react";
import Title from "./title";
import axios from 'axios';
import Control from "./controlpanle"
import Poppup from "./poppup"
import Drawe from "./Drawer";
import Searshload from "./SearshLoad";
import ImageG from "./imageG";
import ContactUs from "./ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import { ImageList } from "@mui/material";
import { useMediaQuery } from '@mui/material';



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
    const [redytoshowslider , setredytoshowslider] = useState(false)
    const [contactnow , setcontactnow] = useState(false)
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
            setShow(true)

        } catch (error) {
            setErrorMessage(error.message)
            setErrorPoppup(true)
            setisdataready(false)
            setShow(false)
        }
        setgetqulite(window.localStorage.getItem("ImageQuality"))
        setIsDownloading(false)
        console.log(ImageData)
    } 



    function imageCountainer(parm) {
        return (
                <LazyLoadImage 
                    effect="blur"
                    wrapperProps={{
                        // If you need to, you can tweak the effect transition using the wrapper style.
                        style: {transitionDelay: "1s"},
                    }}
                    src={parm}
                    className="w-full mb-[8px]"
                    onClick={
                        () => {
                            setimageurlforpanle(parm)
                            setshowpanle(true)
                        }
                    }
                />   
        )
    }

    function handleTheQulite() {
        if (getqulite == "thumb") {
            return(
                dataImg.map((item) => (
                    imageCountainer(item)
                ))
            )
        } else if (getqulite == "regular") {
            return(
                dataImgtwo.map((item) => (
                    imageCountainer(item)
                ))
            )
        } else if (getqulite == "full") {
            return(
                dataImgthree.map((item) => (
                    imageCountainer(item)
                ))
            )
        } else if (getqulite) {
            setErrorMessage("...")
            setErrorPoppup(true)
        }
    }

    function handleInputchange(e) {
        setKeyWord(e.target.value)
        setisdataready(false)
        setErrorPoppup(false)
        setIsDownloading(false)
        setShow(false)
        setdataImg([])
    }

    const handlStyle = {
        pointerEvents: showpanle || redytoshowslider || contactnow ? "none" : "all" , 
        filter: showpanle || redytoshowslider || contactnow  ? "blur(9px)" : "blur(0px)",
    }


    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    
    document.body.style.overflow = "auto"
    return (
        <>
            {showpanle && <Control close={showpanle => setshowpanle(showpanle)} photoup={imageurlforpanle} />}
            {errorPoppup && <Poppup messageProblem={errorMessage} />}
            <Drawe der={redytoshowslider => setredytoshowslider(redytoshowslider)} derContact={contactnow => setcontactnow(contactnow)} datar={isdataready} changetheqr={show => setShow(show)}/>
            {redytoshowslider && <ImageG getdatatoslid={handleTheQulite()} finish={redytoshowslider => setredytoshowslider(redytoshowslider)}/>}
            {contactnow && <ContactUs finish={contactnow => setcontactnow(contactnow)}/>}

            <div className="progress"></div>
            <div className="container flex flex-col items-center justify-between" style={handlStyle}>
        
                <form action="" onSubmit={(e) => {e.preventDefault()}}  className="flex justify-between items-center flex-col gap-10 p-12 w-full">
                    <Title colorLetter="Image Search Engine"/>
                    <div className="searchBox">
                        <input className="searchInput" type="text" value={KeyWord} name placeholder="Search something" onChange={(e) => {
                                handleInputchange(e)
                            }}  ref={inputRef} style={{pointerEvents : isDownloading ? "none" : "all"}}/>
                        <button id="fetch" className="searchButton" type="submit" style={{pointerEvents : isDownloading ? "none" : "all"}} onClick={() => {
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
                    <ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={8}>
                        {handleTheQulite()}
                    </ImageList>
                ) : null}
            </div>
            {isDownloading && <Searshload />}
        </>
    )                
}

export default Container;