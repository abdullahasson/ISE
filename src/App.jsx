import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Container from "./components/container"
import ImageG from "./components/imageG";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ISE/" element={<Container /> } />
                <Route path="/ISE/ImageG" element={<ImageG /> } />
            </Routes>
        </Router>
    )
}

export default App;