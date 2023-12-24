import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Container from "./components/container"
import ImageG from "./components/imageG";
import ContactUs from "./components/ContactUs";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/ISE/" element={<Container /> } />
                    <Route path="/ISE/ImageG" element={<ImageG /> } />
                    <Route path="/ISE/ContactUs" element={<ContactUs /> } />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}
export default App;