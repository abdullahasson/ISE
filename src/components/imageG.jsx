import { useEffect } from "react";
// import axios from "axios";
import ImageGallery from 'react-image-gallery';
import Drawe from "./Drawer"; 
// import { dataImageS } from "./dataImageS";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ImageG.css"


const ImageG = () => {
    useEffect(() => {
        console.log("not ok")
    }, []);

  return (
    <>
      <Drawe der="/ISE/" datar={true}/>
      <div className="container">
        <div className='imageG-cover'>
          <ImageGallery items={[]}  showPlayButton={true} showThumbnails={true} />
        </div>
      </div> 
    </>
  );
};

export default ImageG; 