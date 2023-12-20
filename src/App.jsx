import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Container from "./components/container"
import ImageG from "./components/imageG";
import ContactUs from "./components/ContactUs";
import DraggableButton from "./components/removebg"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ISE/" element={<Container /> } />
                <Route path="/ISE/ImageG" element={<ImageG /> } />
                <Route path="/ISE/ContactUs" element={<ContactUs /> } />
                {/* for try the remove bg befor add on pandle */}
                <Route path="/ISE/r" element={<DraggableButton />}/>
            </Routes>
        </Router>
    )
}

export default App;