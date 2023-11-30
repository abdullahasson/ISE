/* eslint-disable react/jsx-key */
import { useEffect , useRef , useState } from "react";
import Title from "./title";
import axios from 'axios';
import Control from "./controlpanle"
import Poppup from "./poppup"
import Drawe from "./Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import Masonry from "react-responsive-masonry"
import "react-image-gallery/styles/css/image-gallery.css";
import "../ImageG.css"

function Container() {
    const Acces = "kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g"

    const [dataImg , setdataImg] = useState([])
    const [KeyWord , setKeyWord] = useState("")
    const [show , setShow] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false);
    const [showpanle , setshowpanle] = useState(false)
    const [errorPoppup , setErrorPoppup] = useState(false)
    const [errorMessage , setErrorMessage] = useState("")
    const [imageurlforpanle , setimageurlforpanle] = useState("")

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
    
            setdataImg(data1);
            setErrorPoppup(false)

        } catch (error) {
            setErrorMessage(error.message)
            setErrorPoppup(true)
        }
        setIsDownloading(false)
        setShow(true)
    } 

    return (
        <>
            {showpanle ? <Control close={showpanle => setshowpanle(showpanle)} photoup={imageurlforpanle} /> : null}
            {errorPoppup ? <Poppup messageProblem={errorMessage} /> : null}

            <div className="container flex flex-col items-center justify-between" 
                style={{pointerEvents: showpanle ? "none" : "all" , filter: showpanle ? "blur(6px)" : "blur(0px)" }}>
        
                <Drawe />

                <form action="" onSubmit={(e) => {e.preventDefault()}}  className="flex justify-between items-center flex-col gap-10 p-12 w-full">
                    <Title />

                    <div className="searchBox">
                        <input className="searchInput" type="text" value={KeyWord} name placeholder="Search something" onChange={(e) => {
                                setShow(false)
                                setKeyWord(e.target.value)
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
                    <Masonry columnsCount={3} gutter={20} className="mb-6">
                        {dataImg.map(mg => 
                            <LazyLoadImage 
                                effect="blur"
                                src={mg.urls.thumb}
                                className="w-full"
                                onClick={
                                    () => {
                                        setimageurlforpanle(mg.urls.thumb)
                                        setshowpanle(true)
                                    }
                                }
                            />    
                        )}
                    </Masonry>
                    ) : null}
            </div>
        

            <div id="wifi-loader" style={{display : isDownloading ? "flex" : "none"}}>
                <svg className="circle-outer" viewBox="0 0 86 86">
                    <circle className="back" cx={43} cy={43} r={40} />
                    <circle className="front" cx={43} cy={43} r={40} />
                    <circle className="new" cx={43} cy={43} r={40} />
                </svg>
                <svg className="circle-middle" viewBox="0 0 60 60">
                    <circle className="back" cx={30} cy={30} r={27} />
                    <circle className="front" cx={30} cy={30} r={27} />
                </svg>
                <svg className="circle-inner" viewBox="0 0 34 34">
                    <circle className="back" cx={17} cy={17} r={14} />
                    <circle className="front" cx={17} cy={17} r={14} />
                </svg>
                <div className="text" data-text="Searching" />
            </div>
        </>
    )
}

export default Container;