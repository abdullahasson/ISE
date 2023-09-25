import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Container from "./components/container"
import Control from "./components/controlpanle"


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ISE/" element={<Container /> } />
                <Route path="/ISE/zoom/" element={<Control />} />
            </Routes>
        </Router>
    )
}

export default App;