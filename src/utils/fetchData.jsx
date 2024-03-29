// // API Calls
// import axios from 'axios';


// export const fetchData = async (parm) => {
//     setIsDownloading(true)
//     try {
//         const response1 = axios.get(`https://api.unsplash.com/search/photos?page=1&query=${parm}&per_page=20content_filter=low&client_id=kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g`);
//         const result = await Promise.all([response1]);
//         const [data1] = result.map(res => res.data);

//         console.log(data1)
//         setTotal(data1.total)
//         setdataImg(data1.results.map(res => res));
//         dispatch({ type: 'False' })
//         setisdataready(true)
//         setShow(true)
//     } catch (error) {
//         dispatch({ type: "True", massege: error.text })
//         setisdataready(false)
//         setShow(false)
//     }
//     setgetqulite(window.localStorage.getItem("ImageQuality"))
//     setIsDownloading(false)
// }