import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const CloseBtn = ({ className, onClick, id }) => {
    return (
        <button
            id={id || "close"}

            className={`
                        cursor-pointer bg-[#a15151] flex justify-center items-center p-[0.7rem] rounded-[100vmax] w-0 h-0 
                        ${className || null}
            `}

            onClick={onClick}
        >
            <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", }} />
        </button>
    )
}

export default CloseBtn