import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear , faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"


function Setting(Props) {
    return (
        <div className="setting fixed bottom-10 right-10">
            <Link to={Props.go}>
                <div className="icon text-white">
                    {
                        Props.iconp == "home" ? 
                        <FontAwesomeIcon icon={faGear} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff",}} /> 
                        : <FontAwesomeIcon icon={faBars} />
                    }
                </div>
            </Link>
        </div>
    )
}

export default Setting;