import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Container from "./components/container"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ISE/" element={<Container /> } />
            </Routes>
        </Router>
    )
}

export default App;