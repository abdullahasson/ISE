/* eslint-disable react/jsx-key */
import { useRef, useState, useContext, useLayoutEffect, useReducer, forwardRef } from "react";
// API CALLS
import axios from 'axios';
// CONTEXT API 
import { AppContext } from "../App";
// MY COMPONENTS
import ImageCountainer from "./ImageTamplate/ImageContainer";
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
    ImageList,
    useMediaQuery,
    Dialog,
    Slide,
    Backdrop,
} from "@mui/material";

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// CSS FILES
import "react-lazy-load-image-component/src/effects/blur.css"





const reducerMessageFun = (state, action) => {
    switch (action.type) {
        case "True":
            return { errorPoppup: true, errorMessage: action.massege }
        case "False":
            return { errorPoppup: false, errorMessage: "" }
        default:
            state
    }
}

export const TransitionImageG = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function Container() {
    const {
        open,
        setOpen,
        showpanle,
        setshowpanle,
        setisdataready,
        contactnow,
        setcontactnow,
        showphotographer,
        setshowPhotographer,
        show,
        setShow,
        getqulite,
        setgetqulite
    } = useContext(AppContext)


    const [dataImg, setdataImg] = useState([])
    const [KeyWord, setKeyWord] = useState("")
    const [isDownloading, setIsDownloading] = useState(false);
    const [Total, setTotal] = useState("")
    const [newPage, setNewPage] = useState(2)

    const inputRef = useRef(null);
    useLayoutEffect(() => {
        inputRef.current.focus();
    }, []);

    const Acces = "kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g"

    const fetchData = async (parm) => {
        setIsDownloading(true)
        try {
            const response1 = axios.get(`https://api.unsplash.com/search/photos?page=1&query=${parm}&per_page=10content_filter=low&client_id=${Acces}`);
            const result = await Promise.all([response1]);
            const [data1] = result.map(res => res.data);
            setTotal(data1.total)
            setdataImg(data1.results.map(res => res));

            // console.log(dataImg)
            dispatch({ type: 'False' })
            setisdataready(true)
            setShow(true)
        } catch (error) {
            dispatch({ type: "True", massege: error.text })
            setisdataready(false)
            setShow(false)
        }
        setgetqulite(window.localStorage.getItem("ImageQuality"))
        setIsDownloading(false)
    }


    const moreData = async (parm, num) => {
        try {
            const response1 = axios.get(`https://api.unsplash.com/search/photos?page=${num}&query=${parm}&per_page=10content_filter=low&client_id=${Acces}`);
            const result = await Promise.all([response1]);
            const [data2] = result.map(res => res.data);

            dataImg.length == 0 ?
                console.log("wait")
                :
                // console.log(dataImg)
                setdataImg([...data2.results, ...dataImg])

        } catch (error) {
            console.log("error :" + error)
        }
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



    function GetNewImage() {
        moreData(KeyWord, newPage)
        setNewPage(newPage + 1)
        console.log(newPage, KeyWord)
    }


    const [state, dispatch] = useReducer(reducerMessageFun, { errorPoppup: false, errorMessage: "" })
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <>
            <Poppup er={state.errorPoppup} messageProblem={state.errorMessage} />

            <Drawe />

            <Dialog
                open={showpanle || showphotographer || open || contactnow}
                fullScreen={open}
                TransitionComponent={TransitionImageG}
                keepMounted
                onClose={() => { setshowpanle(false) || setshowPhotographer(false) || setOpen(false) || setcontactnow(false) }}
                aria-describedby="alert-dialog-slide-description"
            >
                {
                    showpanle && <Control /> ||
                    showphotographer && <Photographers /> ||
                    open && <ImageG getdatatoslid={slideOption()} /> ||
                    contactnow && <ContactUs />
                }
            </Dialog>


            <div className="progress z-20 hidden" />
            {show && <ResultNum total={Total} word={KeyWord} />}

            <div className="container flex flex-col items-center justify-between">

                <form action="" onSubmit={(e) => { e.preventDefault() }} className="flex justify-between items-center flex-col gap-10 p-12 w-full">
                    <Title colorLetter="Image Search Engine" />
                    <div className="searchBox">
                        <input className="searchInput" type="text" value={KeyWord} name placeholder="Search something" onChange={(e) => {
                            handleInputchange(e)
                        }} ref={inputRef} style={{ pointerEvents: isDownloading ? "none" : "all" }} />
                        <button id="fetch" className="searchButton" type="submit" style={{ pointerEvents: isDownloading ? "none" : "all" }} onClick={() => {
                            if (KeyWord.length > 0) {
                                fetchData(KeyWord)
                            } else {
                                dispatch({ type: "True", massege: "There Is nothing to Searsh" })
                            }
                        }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{ color: "#ffffff", }} />
                        </button>
                    </div>
                </form>

                <ImageList style={{ overflowY: "hidden" }} variant="masonry" cols={isMobile ? 1 : 3} gap={8}>
                    {show ? (dataImg.map((item) => (<ImageCountainer parm={item} />))) : null}
                </ImageList>


                <div className="p-10">
                    {
                        show ?
                            <button className="moreButton" onClick={GetNewImage} >
                                More
                            </button> : null
                    }
                </div>
            </div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isDownloading}
            >
                {isDownloading && <Searshload />}
            </Backdrop>
        </>
    )
}