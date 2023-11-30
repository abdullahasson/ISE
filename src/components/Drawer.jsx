import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import "../Drawer.css"
import Divider from '@mui/material/Divider';


// font Awsome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function Drawe() {  
  const [state, setState] = React.useState({
      right: false,
  });

  function handleFromLocalStorage() {
    const mainValue = window.localStorage.getItem("bodyPattern")

    document.body.classList.forEach(className => {
      document.body.classList.remove(className)
    })

    mainValue == 'one' ? 
      document.body.classList.add("One") :
        mainValue == "two" ?
          document.body.classList.add("Two"):
            mainValue == "three" ? 
            document.body.classList.add("Three"):
                console.log("finish")
  }

  handleFromLocalStorage()

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
  };

  const handleOptionThreeChange = (event) => {
    setSelectedOptionThree(event.target.value);
    window.localStorage.setItem("ShowStyle" , event.target.value)
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} className="setting">
      <div className="dahh">
        <div className="title">
          <h1>Settings</h1>
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
      </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

            <div className="setting fixed top-1" onClick={toggleDrawer(anchor, true)}>
                <div className="icon text-white">
                    <FontAwesomeIcon icon={faGear} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff",}} /> 
                </div>
            </div>

            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>

        </React.Fragment>
      ))}
    </div>
  );
}