import { useRef, useState, useContext } from 'react';
// CONTEXT API 
import { AppContext } from "../App";
// MY COMPONENTS
import CloseBtn from './Buttons/CloseBtn';
import Poppup from "./poppup"
import Title from "./title";
// LIBRARY COMPONENTS
import emailjs from '@emailjs/browser';
import { TextField } from "@mui/material";
// ICONS

// CSS FILES
import "../Css/ContactUs.css"

export default function ContactUs() {

    const { setcontactnow } = useContext(AppContext)

    const form = useRef();
    const [errorPoppup, setErrorPoppup] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_837plud', 'template_adlozdz', form.current, 'Fp-bsNyp7ZHevdX6W')
            .then((result) => {
                console.log(result)
            }, (error) => {
                setErrorMessage(error.text)
                setErrorPoppup(true)
                console.log(error)
            });
    };

    return (
        <>
            {errorPoppup ? <Poppup messageProblem={errorMessage} /> : null}
            <div className="w-[900px] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 flex justify-center items-center">
                <div className="mainContent relative p-3 bg-[#333] text-white rounded-md flex flex-col justify-between items-center w-[50%] h-auto">
                    <div className="title p-3">
                        <Title colorLetter="Contact Us" />
                    </div>

                    <CloseBtn id="close" className="absolute left-[-0.25rem] top-[-0.25rem]" onClick={() => { setcontactnow(false) }} />

                    <form ref={form} onSubmit={sendEmail} className="w-full h-full flex flex-col gap-2 justify-between">
                        <div className="who flex justify-between items-center gap-3">
                            <div className="relative bg-transparent flex flex-col items-center w-[50%]">
                                <TextField
                                    id="outlined-basic"
                                    label="Name..."
                                    variant="outlined"
                                    fullWidth={true}
                                    type="text"
                                    name="to_name"
                                    autoFocus={true}
                                    color="info"
                                    required={true}
                                    size="small"
                                />
                            </div>
                            <div className="relative bg-transparent w-[50%] ">
                                <TextField
                                    id="outlined-basic"
                                    label="Email..."
                                    variant="outlined"
                                    fullWidth={true}
                                    type="email"
                                    name="from_email"
                                    color="info"
                                    required={true}
                                    size="small"
                                />
                            </div>
                        </div>
                        <div className="who bg-transparent flex flex-col items-center w-full h-full">
                            <TextField
                                id="outlined-basic"
                                label="anything..."
                                multiline
                                variant="outlined"
                                fullWidth={true}
                                type="text"
                                name="message"
                                color="info"
                                required={true}
                                minRows="8"
                                maxRows="8"
                            />
                        </div>

                        <button
                            type="submit"
                            value="Send"
                            className="contactS"
                        >
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                                    </svg>
                                </div>
                            </div>
                            <span>Send</span>
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}