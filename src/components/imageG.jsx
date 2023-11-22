
import {useEffect , useState} from 'react';
import axios from "axios"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../ImageG.css"


const ImageG = () => {

    const [imageList , setimageList] = useState([])

    const images = [
        // Add more image objects here
    ];

    const fetchItems = async () => {
        try {
        const response1 = axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=20&query=panda&client_id=kwoGX8fZRJ3jT0fIXiGQApZDXret2VF3gRsaMZokv0g`);
        const result = await Promise.all([response1]);
        const [data1] = result.map(res => res.data.results);

        data1.map(mg => {
          images.push({
              original: mg.urls.regular
          })
      })

      setimageList(images)

        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);



  return (
    <div className='imageG-cover'>
      <ImageGallery items={imageList}  showPlayButton={true} showThumbnails={true} />
    </div>
  );
};

export default ImageG;