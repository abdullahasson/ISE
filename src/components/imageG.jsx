import ImageGallery from 'react-image-gallery';
import Drawe from "./Drawer"; 
import "react-image-gallery/styles/css/image-gallery.css";
import "../Css/ImageG.css"


const ImageG = () => {
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