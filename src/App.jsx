import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Container from "./components/container"
import ImageG from "./components/imageG";
import ContactUs from "./components/ContactUs";
// import ContactUs from "./components/tryemailjs"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ISE/" element={<Container /> } />
                <Route path="/ISE/ImageG" element={<ImageG /> } />
                <Route path="/ISE/ContactUs" element={<ContactUs /> } />
            </Routes>
        </Router>
    )
}

export default App;