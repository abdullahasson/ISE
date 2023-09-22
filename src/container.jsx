import { useEffect , useState } from "react";
import Title from "./components/title";
import Img from "./components/img";


function Container() {

    const Acces = "kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g"
   

    const [dataImg , setdataImg] = useState([])
    const [dataImgt , setdataImgt] = useState([])
    const [dataImgth , setdataImgth] = useState([])
    const [KeyWord , setKeyWord] = useState("")
    const [show , setShow] = useState("false")
    const [MorePage , setMorePage] = useState(1)
    const [block , setblock] = useState("none")


    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?page=${MorePage}&query=${KeyWord}&client_id=${Acces}`)
        .then(req => req.json())
        .then(data => setdataImg(data.results))
    } , [KeyWord , MorePage])


    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?page=${MorePage + 1}&query=${KeyWord}&client_id=${Acces}`)
        .then(req => req.json())
        .then(data => setdataImgt(data.results))
    } , [KeyWord , MorePage])


    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?page=${MorePage + 2}&query=${KeyWord}&client_id=${Acces}`)
        .then(req => req.json())
        .then(data => setdataImgth(data.results))
    } , [KeyWord , MorePage])

    window.addEventListener("scroll" , () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        if (scrollTop + clientHeight >= scrollHeight) {
            setMorePage(MorePage + 1)
            console.log(MorePage)
        }
    })

    // eslint-disable-next-line react/jsx-key
    const showdata = dataImg.map(mg => <div className="bord"><Img sss={mg.urls.full} idA={mg.id} /></div> )
  // eslint-disable-next-line react/jsx-key
    const showdatat = dataImgt.map(mg => <div className="bord"><Img sss={mg.urls.full} idA={mg.id} /></div>)
    // eslint-disable-next-line react/jsx-key
    const showdatath = dataImgth.map(mg => <div className="bord"><Img sss={mg.urls.full} idA={mg.id} /></div>)

    return (
        <div className="container flex flex-col items-center justify-between">

            <form action="" onSubmit={(e) => {e.preventDefault()}}  className="flex justify-between items-center flex-col gap-10 p-12">

                <Title />

                <div className="searchBox">
                    <input className="searchInput" type="text" value={KeyWord} name placeholder="Search something" onChange={(e) => {
                        setKeyWord(e.target.value)
                        setShow("false")
                        setblock("none")
                        setMorePage(1)
                        }}/>
                    <button className="searchButton" type="submit" onClick={() => {
                            if (KeyWord.length > 0) {
                                setShow("true") 
                                setblock("block")
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

            <div className="honeycomb" style={{display : block}}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}

export default Container;