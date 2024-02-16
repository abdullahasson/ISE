/* eslint-disable react/jsx-key */
import { useRef , useState , useContext, useLayoutEffect , useReducer , forwardRef } from "react";
// API CALLS
import axios from 'axios';
// CONTEXT API 
import { AppContext } from "../App";
// MY COMPONENTS
import Title from "./title";
import Control from "./ImageEditor/controlpanle"
import Poppup from "./poppup"
import Drawe from "./Drawer";
import Searshload from "./SearshLoad";
import ImageG from "./imageG";
import ContactUs from "./ContactUs";
import Photographers from "./photographers";
import ResultNum from "./ResultNum";
// LIBRARY COMPONENTS
import { 
    ImageList , 
    useMediaQuery , 
    Dialog , 
    Slide, 
    ImageListItem , 
    ImageListItemBar ,
    Backdrop , 
    IconButton , 
    Avatar ,
    Box
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BlurhashCanvas } from "react-blurhash";
// ICONS
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// CSS FILES
import "react-lazy-load-image-component/src/effects/blur.css"

const reducerMessageFun = (state , action) => {
    switch(action.type) {
        case "True" :
            return {errorPoppup: true , errorMessage: action.massege}
        case "False" :
            return {errorPoppup: false , errorMessage: ""}
        default :
            state
    }
}

export const TransitionImageG = forwardRef(function Transition(props, ref ) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function Container() {
    const { 
        open ,
        setOpen ,
        showpanle , 
        setshowpanle , 
        setisdataready , 
        contactnow , 
        setcontactnow ,
        setimageurlforpanle ,
        showphotographer , 
        setshowPhotographer,
        setphotographerInfo ,
        show , 
        setShow
    } = useContext(AppContext)

    
    const [dataImg , setdataImg] = useState([])
    const [KeyWord , setKeyWord] = useState("")
    const [isDownloading, setIsDownloading] = useState(false);
    const [DeleteBlur , setDeleteBlur] = useState(false)
    const [getqulite , setgetqulite] = useState(window.localStorage.getItem("ImageQuality") ? window.localStorage.getItem("ImageQuality") : window.localStorage.setItem("ImageQuality" , "regular"))
    const [Total , setTotal] = useState("")

    const inputRef = useRef(null);
    useLayoutEffect(() => {
        inputRef.current.focus();
    }, []);
    



    const Acces = "kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g"
    const fetchData = async (parm) => {
        setIsDownloading(true)
        try {
            const response1 = axios.get(`https://api.unsplash.com/search/photos?page=1&query=${parm}&per_page=20content_filter=low&client_id=${Acces}`);
            const result = await Promise.all([response1]);
            const [data1] = result.map(res => res.data);
    
            console.log(data1)
            setTotal(data1.total)
            setdataImg(data1.results.map(res => res));
            dispatch({ type: 'False' })
            setisdataready(true)
            setShow(true)

        } catch (error) {
            dispatch({ type: "True" ,  massege: error.text })
            setisdataready(false)
            setShow(false)
        }
        setgetqulite(window.localStorage.getItem("ImageQuality"))
        setIsDownloading(false)
    } 

    const BlurhashStyle = {
        position: "absolute",
        zIndex: "10",
        width: "100%",
        height: "100%",
        minHeight: "278px"
    }

    function imageCountainer(parm) {
        return (
            <div className="relative">
                <BlurhashCanvas
                    hash={`${parm.blur_hash}`}
                    style={BlurhashStyle}
                />
                <ImageListItem className="absolute z-10 min-h-[300px]">
                    <section>  
                        <LazyLoadImage 
                            id={parm.id}
                            effect="blur"
                            alt={`${parm.alt_description}`}
                            src={parm.urls[getqulite]}
                            className="w-full h-full"
                            onClick={
                                () => {
                                    setimageurlforpanle(parm.urls[getqulite])
                                    setshowpanle(true)
                                }
                            }
                            onLoad={() => {
                                setDeleteBlur(!DeleteBlur)
                            }}
                            onError={(e) => {
                                e.target.src = "https://sirv.com/help/articles/customized-error-images/"; // Replace 'path_to_default_image' with the URL or path to your default image
                            }}
                            delayMethod="debounce"
                            delayTime="100"
                        />   
                    </section>
                    <ImageListItemBar
                        position="bottom"
                        actionIcon={
                            <div className="flex justify-between items-center w-full p-2 ">
                                <Box className="flex items-center justify-between gap-1">
                                    <IconButton>
                                        {parm.liked_by_user ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                                    </IconButton>
                                    <p>{parm.likes}</p>
                                </Box>
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ///// `}
                                    onClick={() => {
                                        setshowPhotographer(true)
                                        setphotographerInfo(parm.user)
                                    }}
                                >
                                    <Avatar alt="Remy Sharp" src={parm.user.profile_image.medium} />
                                </IconButton>
                            </div>
                        }
                    />
                </ImageListItem>
            </div>
        )
    }


    function slideOption() {    
        return (
            dataImg.map(ele => ele.urls[getqulite])
        )
    }

    function handleInputchange(e) {
        setKeyWord(e.target.value)
        setisdataready(false)
        dispatch({ type: "False" })
        setIsDownloading(false)
        setShow(false)
        setdataImg([])
    }


    const [state , dispatch] = useReducer(reducerMessageFun , {errorPoppup : false , errorMessage: ""})

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    
    return (
        <>
            <Poppup er={state.errorPoppup} messageProblem={state.errorMessage} />
            <Drawe />
    
            <Dialog
                open={contactnow}
                TransitionComponent={TransitionImageG}
                keepMounted
                onClose={() => {setcontactnow(false)}}
                aria-describedby="alert-dialog-slide-description"
            >
                {contactnow && <ContactUs />}
            </Dialog>
            
            <Dialog
                open={showpanle}
                TransitionComponent={TransitionImageG}
                keepMounted
                onClose={() => {setshowpanle(false)}}
                aria-describedby="alert-dialog-slide-description"
            >
                { showpanle && <Control /> }
            </Dialog>

            <Dialog fullScreen open={open} onClose={() => {setOpen(false)}} TransitionComponent={TransitionImageG}>
                <ImageG getdatatoslid={slideOption()} />
            </Dialog>

            <Dialog
                open={showphotographer}
                TransitionComponent={TransitionImageG}
                keepMounted
                onClose={() => {setshowPhotographer(false)}}
                aria-describedby="alert-dialog-slide-description"
            >
                { showphotographer && <Photographers /> }
            </Dialog>

            <div className="progress z-20"></div>

            {show && <ResultNum total={Total} />}
            
            <div className="container flex flex-col items-center justify-between">
        
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
                                    dispatch({ type: "True" , massege: "There Is nothing to Searsh" })
                                }
                        }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#ffffff",}} />
                        </button>
                    </div>
                </form>

                {show ? ( 
                    <ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={8}>
                        {dataImg.map((item) => (
                            imageCountainer(item)
                        ))}
                    </ImageList>
                ) : null}
            </div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isDownloading}
            >
                {isDownloading && <Searshload /> }
            </Backdrop>
        </>
    )                
}