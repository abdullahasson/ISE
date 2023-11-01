import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Container from "./components/container"
import SettingsPage from "./components/settingsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ISE/" element={<Container /> } />
                <Route path="/ISE/Setting" element={<SettingsPage /> } />
            </Routes>
        </Router>
    )
}

export default App;