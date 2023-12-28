/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Title from './title';
import "../Css/Drawer.css"
// import ytt from "../assets/YTYTYT.svg"
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear , faRotateRight , faMessage , faXmark , faChevronUp , faImage } from '@fortawesome/free-solid-svg-icons';

export default function Drawe(Props) {  
  const [state, setState] = React.useState({
      right: false,
  });

  function handleFromLocalStorage() {
    const mainValue = window.localStorage.getItem("bodyPattern") ? 
    window.localStorage.getItem("bodyPattern") : 
    window.localStorage.setItem("bodyPattern" , "defult")
    
    document.body.classList.forEach(className => {
      document.body.classList.remove(className)
    })

    mainValue == 'one' ? 
      document.body.classList.add("One") :
        mainValue == "two" ?
          document.body.classList.add("Two"):
            mainValue == "three" ? 
            document.body.classList.add("Three"):
              null
  }
  handleFromLocalStorage()

  const [goUp , setGoup] = React.useState(false)
  window.addEventListener("scroll" , function() {
    if (window.pageYOffset >= 600) {
      setGoup(true)
    } else {
      setGoup(false)
    }
})


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const [selectedOption, setSelectedOption] = React.useState(window.localStorage.getItem("bodyPattern"));
  const [selectedOptionTwo , setSelectedOptionTwo] = React.useState(window.localStorage.getItem("ImageQuality"));
  const [selectedOptionThree , setSelectedOptionThree] = React.useState(window.localStorage.getItem("ShowStyle"));


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    window.localStorage.setItem("bodyPattern" , event.target.value)
  };

  const handleOptionTwoChange = (event) => {
    setSelectedOptionTwo(event.target.value);
    window.localStorage.setItem("ImageQuality" , event.target.value)
    Props.changetheqr(false)
  };

  const handleOptionThreeChange = (event) => {
    setSelectedOptionThree(event.target.value);
    window.localStorage.setItem("ShowStyle" , event.target.value)
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} className="setting">
      <div className="dahh">
        <div className="title relative">
        {/* <button 
          class="translate-y-[-50%] absolute right-3 top-[50%] rounded-[100vmax] hover:bg-[#a15151] flex justify-center items-center p-3 w-0 h-0">
          <FontAwesomeIcon icon={faXmark} className='text-white'/>
        </button> */}
          <div className="cursor-pointer translate-y-[-50%] absolute right-3 top-[50%] bg-[#a15151] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0">
            <FontAwesomeIcon icon={faXmark} />
          </div>

          <Title colorLetter="Settings" />
        </div>
        <Divider />
        <div className="branches">
          <div className="pattern mb-3">
            <h3 className='mb-5 text-white font-medium'>patterns</h3>
            <div className="optis">
              <div className="radio-inputs">
                <label>
                  <input
                    className="radio-input" 
                    type="radio" 
                    name="Pattern" 
                    value="one"
                    checked={selectedOption === 'one'}
                    onChange={handleOptionChange}
                  />
                  <span className="radio-tile one">
                  </span>
                </label>
                <label>
                  <input 
                    className="radio-input" 
                    type="radio" 
                    name="Pattern"
                    value="two"
                    checked={selectedOption === 'two'}
                    onChange={handleOptionChange}
                  />
                  <span className="radio-tile two">
                  </span>
                </label>
                <label>
                  <input 
                    className="radio-input" 
                    type="radio" 
                    name="Pattern"
                    value="three"
                    checked={selectedOption === 'three'}
                    onChange={handleOptionChange}
                  />
                  <span className="radio-tile three">
                  </span>
                </label>
                <label>
                  <input 
                    className="radio-input" 
                    type="radio" 
                    name="Pattern"
                    value="defult"
                    checked={selectedOption === 'defult'}
                    onChange={handleOptionChange}
                  />
                  <span className="radio-tile text-white last">
                    <FontAwesomeIcon icon={faRotateRight} className="text-white" />
                    default
                  </span>
                </label>
            </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="branches">
          <div className="pattern mb-3">
            <h3 className='mb-5 text-white font-medium'>Image quality</h3>
            <div className="optis">
              <div className="radio-inputs">
                <label>
                  <input
                    className="radio-input" 
                    type="radio" 
                    name="ImageQuality" 
                    value="thumb"
                    checked={selectedOptionTwo === 'thumb'}
                    onChange={handleOptionTwoChange}
                  />
                  <span className="radio-tile">
                    <FontAwesomeIcon icon={faImage} className="text-[22px]" />
                    <div className="p-[1px] w-[25%] bg-white mt-1"></div>
                  </span>
                </label>
                <label>
                  <input 
                    className="radio-input" 
                    type="radio" 
                    name="ImageQuality"
                    value="regular"
                    checked={selectedOptionTwo === 'regular'}
                    onChange={handleOptionTwoChange}
                  />
                  <span className="radio-tile">
                    <FontAwesomeIcon icon={faImage} className="text-[22px]" />
                    <div className="p-[1px] w-[50%] bg-white mt-1"></div>
                  </span>
                </label>
                <label>
                  <input 
                    className="radio-input" 
                    type="radio" 
                    name="ImageQuality"
                    value="full"
                    checked={selectedOptionTwo === 'full'}
                    onChange={handleOptionTwoChange}
                  />
                  <span className="radio-tile">
                    <FontAwesomeIcon icon={faImage} className="text-[22px]" />
                    <div className="p-[1px] w-[75%] bg-white mt-1"></div>
                  </span>
                </label>
            </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="branches">
          <div className="pattern mb-3">
            <h3 className='mb-5 text-white font-medium'>Show style</h3>
            <div className="optis">
              <div className="radio-inputs">
                <label>
                  <input
                    className="radio-input" 
                    type="radio" 
                    name="ShowStyle" 
                    value="gallery"
                    checked={selectedOptionThree === 'gallery'}
                    onChange={handleOptionThreeChange}
                  />
                  <span className="radio-tile">
                  </span>
                </label>
                <label>
                  <input 
                    className="radio-input" 
                    type="radio" 
                    name="ShowStyle"
                    value="imageSlider"
                    checked={selectedOptionThree === 'imageSlider'}
                    onChange={handleOptionThreeChange}
                  />
                  <span className="radio-tile">
                  </span>
                </label>
            </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="branches">
          <div className="pattern mb-3">
            <h3 className='mb-5 text-white font-medium'>searsh pattern</h3>
            <div className="optis">
              <div className="radio-inputs">
                <label>
                  <input
                    className="radio-input" 
                    type="radio" 
                    name="engine" 
                  />
                  <span className="radio-tile">
                  </span>
                </label>
                <label>
                  <input 
                    className="radio-input" 
                    type="radio" 
                    name="engine"
                  />
                  <span className="radio-tile">
                  </span>
                </label>
                <label>
                  <input 
                    className="radio-input" 
                    type="radio" 
                    name="engine"
                  />
                  <span className="radio-tile">
                  </span>
                </label>
            </div>
            </div>
          </div>
        </div>
        <Divider />
        <div>
          <button className='reset-b' onClick={() => {
            window.localStorage.clear()
            setSelectedOption("defult")
            window.localStorage.setItem("bodyPattern" , "defult")
            setSelectedOptionTwo("regular")
            window.localStorage.setItem("ImageQuality" , "regular")
            setSelectedOptionThree("")
          }}><span>Reset <FontAwesomeIcon icon={faRotateRight} /></span></button> 
        </div>
        <Divider />
      </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

            <div className="mainMune">
              <div 
                tooltip="Setting" 
                className="setting-b chooes" 
                onClick={toggleDrawer(anchor, true)}
                >
                    <div className="icon text-white">
                        <FontAwesomeIcon icon={faGear} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff",}} /> 
                    </div>
              </div>

              <div className="chooes" tooltip="Contact" onClick={() => {
                Props.derContact(true)
              }}>
                <FontAwesomeIcon icon={faMessage} />
              </div>
              
              { Props.datar && 
                <div className='chooes' tooltip="Slider" onClick={() => {
                  Props.der(true)
                }}>
                  {/* <FontAwesomeIcon icon={faSliders}/> */}
                  <img src="/ISE/src/assets/YTYTYT.svg" alt="" srcset="" className='w-[20px]'/>
                </div>
              }
              { goUp &&
                <div className='chooes' tooltip="Up" onClick={() => {
                  window.scrollTo(0 , 0)
                }}>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
              }
            </div>

            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>

        </React.Fragment>
      ))}
    </div>
  );
}