/* eslint-disable react/jsx-key */
import { useEffect , useRef , useState } from "react";
import Title from "./title";
import Img from "./img";
import axios from 'axios';
import Control from "./controlpanle"
import Poppup from "./poppup"
import Setting from "./setting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Container() {
    const Acces = "kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g"
   
    const [dataImg , setdataImg] = useState([])
    const [dataImgt , setdataImgt] = useState([])
    const [dataImgth , setdataImgth] = useState([])
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
            const response1 = axios.get(`https://api.unsplash.com/search/photos?page=1&query=${parm}&per_page=10content_filter=low&client_id=${Acces}`);
            const response2 = axios.get(`https://api.unsplash.com/search/photos?page=2&query=${parm}&per_page=10content_filter=low&client_id=${Acces}`);
            const response3 = axios.get(`https://api.unsplash.com/search/photos?page=3&query=${parm}&per_page=10content_filter=low&client_id=${Acces}`);
    
            const result = await Promise.all([response1 , response2 , response3]);
            const [data1, data2, data3] = result.map(res => res.data.results);
    
            setdataImg(data1);
            setdataImgt(data2);
            setdataImgth(data3);
            setErrorPoppup(false)

        } catch (error) {
            setErrorMessage(error.message)
            setErrorPoppup(true)
        }
        setIsDownloading(false)
        console.log(showdata , showdatat , showdatath)
    } 
    
    

    const showdata = dataImg.map(mg => 
        <Img
            full={mg.urls.full}
            thumb={mg.urls.thumb}
            small={mg.urls.small} 
            idA={mg.id} 
            sh={showpanle => setshowpanle(showpanle)} 
            imageUrl={imageurlforpanle => setimageurlforpanle(imageurlforpanle)} 
        />)

    const showdatat = dataImgt.map(mg => 
        <Img
            full={mg.urls.full} 
            thumb={mg.urls.thumb}
            small={mg.urls.small} 
            idA={mg.id} 
            sh={showpanle => setshowpanle(showpanle)} 
            imageUrl={imageurlforpanle => setimageurlforpanle(imageurlforpanle)} 
        />)

    const showdatath = dataImgth.map(mg => 
        <Img
            full={mg.urls.full} 
            thumb={mg.urls.thumb}
            small={mg.urls.small} 
            idA={mg.id} 
            sh={showpanle => setshowpanle(showpanle)}
            imageUrl={imageurlforpanle => setimageurlforpanle(imageurlforpanle)} 
        />) 

    return (
        <>
            {showpanle ? <Control close={showpanle => setshowpanle(showpanle)} photoup={imageurlforpanle} /> : null}
            {errorPoppup ? <Poppup messageProblem={errorMessage} /> : null}
            <Setting go="/ISE/Setting" iconp="home"/>

            <div className="container flex flex-col items-center justify-between" 
                style={{pointerEvents: showpanle ? "none" : "all" , filter: showpanle ? "blur(6px)" : "blur(0px)" }}>
        
                <form action="" onSubmit={(e) => {e.preventDefault()}}  className="flex justify-between items-center flex-col gap-10 p-12 w-full">

                    <Title />

                    <div className="searchBox">
                        <input className="searchInput" type="text" value={KeyWord} name placeholder="Search something" onChange={(e) => {
                                setKeyWord(e.target.value)
                                setShow(false)
                            }}  ref={inputRef} style={{pointerEvents : isDownloading ? "none" : "all"}}/>
                        <button className="searchButton" type="submit" style={{pointerEvents : isDownloading ? "none" : "all"}} onClick={() => {
                                if (KeyWord.length > 0) {
                                    fetchData(KeyWord)
                                    setShow(true)
                                } else {
                                    setErrorMessage("there is nothing to searsh")
                                    setErrorPoppup(true)
                                }
                            }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#ffffff",}} />
                        </button>
                    </div>
                </form>

                <div className="content flex justify-center items-center flex-wrap">
                    {show ? (
                        <>
                            <div className="qure flex flex-col gap-6 ">{showdata}</div>
                            <div className="qure flex flex-col gap-6">{showdatat}</div>
                            <div className="qure flex flex-col gap-6">{showdatath}</div>
                        </>
                    ) : null}
                </div>
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