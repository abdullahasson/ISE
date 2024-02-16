import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Container from "./components/container"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useState } from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const AppContext = createContext()

function App() {

    const [show , setShow] = useState(false)
    const [showpanle , setshowpanle] = useState(false)
    const [isdataready , setisdataready] = useState(false)
    const [contactnow , setcontactnow] = useState(false)
    const [redytoshowslider , setredytoshowslider] = useState(false)
    const [imageurlforpanle , setimageurlforpanle] = useState("")
    const [showphotographer , setshowPhotographer] = useState(false)
    const [photographerInfo , setphotographerInfo] = useState("")

    const [open, setOpen] = useState(false); 

    const state = {
        showpanle ,
        setshowpanle ,
        isdataready ,
        setisdataready , 
        contactnow , 
        setcontactnow , 
        redytoshowslider , 
        setredytoshowslider , 
        imageurlforpanle , 
        setimageurlforpanle,
        open ,
        setOpen ,
        showphotographer , 
        setshowPhotographer ,
        photographerInfo , 
        setphotographerInfo ,
        show , 
        setShow
    }

    return (
        <AppContext.Provider value={state}>

            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route path="/ISE/" element={<Container /> } />
                    </Routes>
                </Router>
            </ThemeProvider>
        </AppContext.Provider>
    )
}
export default App;