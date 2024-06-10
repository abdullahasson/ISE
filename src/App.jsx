import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "./components/container"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Try from "./components/Try";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const AppContext = createContext()

function App() {

    const [show, setShow] = useState(false)
    const [showpanle, setshowpanle] = useState(false)
    const [isdataready, setisdataready] = useState(false)
    const [contactnow, setcontactnow] = useState(false)
    const [redytoshowslider, setredytoshowslider] = useState(false)
    const [imageurlforpanle, setimageurlforpanle] = useState("")
    const [showphotographer, setshowPhotographer] = useState(false)
    const [photographerInfo, setphotographerInfo] = useState("")
    const [getqulite, setgetqulite] = useState(window.localStorage.getItem("ImageQuality") ? window.localStorage.getItem("ImageQuality") : window.localStorage.setItem("ImageQuality", "regular"))
    const [open, setOpen] = useState(false);

    const state = {
        showpanle,
        setshowpanle,
        isdataready,
        setisdataready,
        contactnow,
        setcontactnow,
        redytoshowslider,
        setredytoshowslider,
        imageurlforpanle,
        setimageurlforpanle,
        open,
        setOpen,
        showphotographer,
        setshowPhotographer,
        photographerInfo,
        setphotographerInfo,
        show,
        setShow,
        getqulite,
        setgetqulite
    }

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }, [])

    return (
        <AppContext.Provider value={state}>

            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route path="/ISE/" element={<Container />} />
                        <Route path="/ISE/Try/" element={<Try />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </AppContext.Provider>
    )
}
export default App;