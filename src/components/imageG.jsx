import { useContext, useEffect, useState} from 'react';
// CONTEXT API
import { AppContext } from '../App';
// LIBRARY COMPONENTS
import ImageGallery from 'react-image-gallery';
import { 
    FormGroup , 
    Switch , 
    FormControlLabel , 
    Divider , 
    Chip , 
    FormControl ,
    InputLabel ,
    Select ,
    Slider ,
    Box ,
    Typography ,
    MenuItem 
} from '@mui/material';
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear , faXmark } from "@fortawesome/free-solid-svg-icons";
// CSS FILES
import "react-image-gallery/styles/css/image-gallery.css";
import "../Css/ImageG.css"


const ImageG = (Props) => {

  const { setOpen } = useContext(AppContext)

  // show setting bar =>
  const [showSettingBar , setshowSettingBar] = useState(false)
  // mangae Setting
  const [infiniteSlid , setinfiniteSlid] = useState(false)
  const [showNav , setshowNav] = useState(true)  
  const [showBullets , setshowBullets] = useState(false)
  const [showIndex , setshowIndex] = useState(false)
  const [showPlayButton , setshowPlayButton] = useState(true)
  const [showThumbnails , setshowThumbnails] = useState(false)
  const [showFullscreenButton , setshowFullscreenButton] = useState(true)
  const [autoPlay , setautoPlay] = useState(false)
  // chip
  const [indexSeparator , setindexSeparator] = useState(" - ") 
  const [thumbnailPosition , setthumbnailPosition] = useState("bottom") 
  const [slideDuration , setslideDuration] = useState(1500)




  // get data from container
  const imagelist =[]
  Props.getdatatoslid.map(req => imagelist.push({"original" : req , "thumbnail" : req}))

  const ShowSettingBarStyle = {
    transform: "translateX(0%)",
    transition: "0.4s",
    display: "block"
  }

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
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

  return (
    <>
      <div className="overflow-hidden w-full h-full fixed left-[50%] top-[50%] bg-[#3a3939] translate-x-[-50%] translate-y-[-50%] z-50">
        <div className='imageG-cover relative'>
          <div 
            id='close' 
            className="cursor-pointer absolute left-1 top-1 bg-[#a15151] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0" 
            onClick={() => {setOpen(false)}}>
            <FontAwesomeIcon icon={faXmark} />
          </div>

          <div className="absolute right-0 top-0 bg-[#1b1a1a] rounded-md p-4 z-50 overflow-auto overflow-x-hidden max-h-[96.50%]">
              <button className='flex justify-end items-center' onClick={() => {setshowSettingBar(!showSettingBar)}}>
                <FontAwesomeIcon icon={showSettingBar ? faXmark : faGear} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff",}} />  
              </button>

              {/* {showSettingBar &&  */}
                <div className='translate-x-[100%] transition-[0.4s] hidden' style={showSettingBar ? ShowSettingBarStyle : null}>

                  <div className="switshes">
                    <FormGroup>
                      <FormControlLabel control={<Switch checked={infiniteSlid} />} label="Infinite Sliding" onChange={() => {
                        setinfiniteSlid(!infiniteSlid)
                      }} />
                      <FormControlLabel control={<Switch checked={showBullets} />} label="Show Bullets" onChange={() => {
                        setshowBullets(!showBullets)
                      }} />
                      <FormControlLabel control={<Switch checked={showIndex} />} label="Show Index" onChange={() => {
                        setshowIndex(!showIndex)
                      }} />
                      <FormControlLabel control={<Switch checked={showNav} />} label="Show Nav" onChange={() => {
                        setshowNav(!showNav)
                      }} />
                      <FormControlLabel control={<Switch checked={showPlayButton} />} label="Show Play Button" onChange={() => {
                        setshowPlayButton(!showPlayButton)
                      }} />
                      <FormControlLabel control={<Switch checked={showThumbnails} />} label="Show Thumbnails" onChange={() => {
                        setshowThumbnails(!showThumbnails)
                      }} />
                      <FormControlLabel control={<Switch checked={showFullscreenButton} />} label="Show Fullscreen Button" onChange={() => {
                        setshowFullscreenButton(!showFullscreenButton)
                      }} />
                      <FormControlLabel control={<Switch checked={autoPlay}  />} label="Auto Play" onChange={() => {
                        setautoPlay(!autoPlay)
                      }} />
                    </FormGroup>
                  </div>

                  <Box sx={{ m: 3 }} />
                    <Divider textAlign="left"><Chip label="Chip" size="small" /></Divider>
                  <Box sx={{ m: 3 }} />

                  <div className="choeses">
                    
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Index Separator</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={indexSeparator}
                        disabled={!showIndex}
                        label="Index Separator"
                        onChange={(event) => {
                          setindexSeparator(event.target.value)
                        }}
                      >
                        <MenuItem value=" - ">-</MenuItem>
                        <MenuItem value=" <> ">;</MenuItem>
                        <MenuItem value=" | ">|</MenuItem>
                      </Select>
                    </FormControl>
                    
                    <Box sx={{ m: 3 }} />

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Thumbnail Position</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={thumbnailPosition}
                        disabled={!showThumbnails}
                        label="Thumbnail Position"
                        onChange={(event) => {
                          setthumbnailPosition(event.target.value)
                        }}
                      >
                        <MenuItem value="bottom">bottom</MenuItem>
                        <MenuItem value="top">top</MenuItem>
                        <MenuItem value="right">right</MenuItem>
                        <MenuItem value="left">left</MenuItem>
                      </Select>
                    </FormControl>


                    
                  </div>

                  <Box sx={{ m: 3 }} />
                    <Divider textAlign="left"><Chip label="Chip" size="small" /></Divider>
                  <Box sx={{ m: 3 }} />

                  <div className="ranges">
                    <Typography gutterBottom>
                      Slide Duration (Milliseconds)
                    </Typography>
                    <Slider
                      label="slideDuration"
                      aria-label="slideDuration"
                      defaultValue={slideDuration}
                      valueLabelDisplay={slideDuration}
                      step={100}
                      marks
                      min={0}
                      max={3000}
                      value={slideDuration}
                      onChange={(event) => {
                        setslideDuration(event.target.value)
                      }}
                    />
                  </div>
                </div>
              {/* } */}
          </div>


          <ImageGallery 
            items={imagelist}  
            showPlayButton={showPlayButton} 
            showIndex={showIndex}
            showBullets={showBullets}
            infinite={infiniteSlid}
            showNav={showNav}
            showThumbnails={showThumbnails}
            showFullscreenButton={showFullscreenButton}
            autoPlay={autoPlay} 

            thumbnailPosition={thumbnailPosition}
            indexSeparator={indexSeparator}


            // Props under try
            disableKeyDown={false}
            // control on the thumbnail Position
            // make the image move form right to left
            isRTL={false}
            // isableThumbnailSwipe={true}
            slideDuration={slideDuration}
            swipingTransitionDuration={100}

            flickThreshold={0.6}
          />
        </div>
      </div> 
    </>
  );
};

export default ImageG; 