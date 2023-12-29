/* eslint-disable react/no-unknown-property */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Title from './title';
import "../Css/Drawer.css"
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


  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
        if (event.code === 'KeyC') {
            document.getElementById("close").click()
        }
    });
})

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
          <div id='close' className="cursor-pointer translate-y-[-50%] absolute right-3 top-[50%] bg-[#a15151] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0">
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
                  <svg viewBox="0 0 595 352" xmlns="http://www.w3.org/2000/svg">
                  <image
                    height="238"
                    width="248"
                    x="172"
                    y="45"
                    xlinkHref="data:img/png;base64,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"
                  />
                  </svg>
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