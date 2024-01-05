import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../Css/ImageG.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const ImageG = (Props) => {
  // get data from container
  const imagelist =[]
  Props.getdatatoslid.map(req => imagelist.push({"original" : req.props.src}))


  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.code === 'KeyC') {
          document.getElementById("close").click()
      }

      if (event.code === "ArrowRight") {
        document.querySelector(".image-gallery-right-nav").click()
      }

      
      if (event.code === 'ArrowLeft') {
        document.querySelector(".image-gallery-left-nav").click()
      }

      if (event.code === 'Space') {
        document.querySelector(".image-gallery-play-button").click()
      }
  });
  })

  document.body.style.overflow = "hidden"
  return (
    <>
      <div className="w-[97.50%] h-[96.50%] fixed left-[50%] top-[50%] bg-[#3a3939] rounded-[10px] translate-x-[-50%] translate-y-[-50%] z-50">
        <div className='imageG-cover relative'>
          <div id='close' className="cursor-pointer absolute left-[-0.28rem] top-[-0.28rem] bg-[#a15151] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0" onClick={() => {Props.finish(false)}}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ImageGallery 
            items={imagelist}  
            showPlayButton={true} 
            autoPlay={true} 
            showIndex={true}
            showBullets={true}
            // disableThumbnailScroll={true}
            disableKeyDown={false}
            showNav={true}
            showThumbnails={false} 
          />
        </div>
      </div> 
    </>
  );
};

export default ImageG; 