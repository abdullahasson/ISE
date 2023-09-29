/* eslint-disable react/jsx-key */
import { useState } from "react";
import Title from "./title";
import Img from "./img";
import axios from 'axios';
import { Link } from "react-router-dom";

function Container() {

    const Acces = "kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g"
   
    const [dataImg , setdataImg] = useState([])
    const [dataImgt , setdataImgt] = useState([])
    const [dataImgth , setdataImgth] = useState([])
    const [KeyWord , setKeyWord] = useState("")
    const [show , setShow] = useState("false")
    const [isDownloading, setIsDownloading] = useState(false);


    const fetchData = async () => {
        setIsDownloading(true)
        try {
            const response1 = axios.get(`https://api.unsplash.com/search/photos?page=1&query=${KeyWord}&client_id=${Acces}`);
            const response2 = axios.get(`https://api.unsplash.com/search/photos?page=2&query=${KeyWord}&client_id=${Acces}`);
            const response3 = axios.get(`https://api.unsplash.com/search/photos?page=3&query=${KeyWord}&client_id=${Acces}`);
    
            const result = await Promise.all([response1, response2, response3]);
            const [data1, data2, data3] = result.map(res => res.data.results);
    
        setdataImg(data1);
        setdataImgt(data2);
        setdataImgth(data3);

        } catch (error) {
            console.log(error.message)
        }
        setIsDownloading(false)
    } 
        
    const showdata = dataImg.map(mg => 
        <Link to="/ISE/zoom/">
            <Img 
                sss={mg.urls.full} 
                idA={mg.id} />
        </Link>)
    const showdatat = dataImgt.map(mg => 
        <Link to="/ISE/zoom/">
            <Img 
                sss={mg.urls.full} 
                idA={mg.id} />
        </Link>)
    const showdatath = dataImgth.map(mg => 
        <Link to="/ISE/zoom/">
            <Img 
                sss={mg.urls.full} 
                idA={mg.id} />
        </Link>) 


    return (
        <>
            <div className="container flex flex-col items-center justify-between">
            
                <form action="" onSubmit={(e) => {e.preventDefault()}}  className="flex justify-between items-center flex-col gap-10 p-12">

                    <Title />

                    <div className="searchBox">
                        <input className="searchInput" type="text" value={KeyWord} name placeholder="Search something" onChange={(e) => {
                            setKeyWord(e.target.value)
                            }}/>
                        <button className="searchButton" type="submit" onClick={() => {
                                if (KeyWord.length > 0) {
                                    fetchData();
                                    setShow("true") 
                                } else {
                                    console.log("there is nothing to searsh")
                                }
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={29} height={29} viewBox="0 0 29 29" fill="none" className="inline">
                            <g clipPath="url(#clip0_2_17)">
                                <g filter="url(#filter0_d_2_17)">
                                <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy={4} />
                                <feGaussianBlur stdDeviation={2} />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape" />
                                </filter>
                                <clipPath id="clip0_2_17">
                                <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)" />
                                </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                </form>

                <div className="content flex justify-center items-center flex-wrap ">
                    <div className="qure flex flex-col gap-6">{show == "true" ? showdata : null}</div>
                    <div className="qure flex flex-col gap-6">{show == "true" ? showdatat : null}</div>
                    <div className="qure flex flex-col gap-6">{show == "true" ? showdatath : null}</div>
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