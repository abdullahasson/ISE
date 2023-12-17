import Drawe from "./Drawer"
import Poppup from "./poppup"
import Title from "./title";
import { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField } from "@mui/material";
import "../ContactUs.css"

export default function ContactUs() {
    const form = useRef();
    const [errorPoppup , setErrorPoppup] = useState(false)
    const [errorMessage , setErrorMessage] = useState("")

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_837plud', 'template_adlozdz', form.current, 'Fp-bsNyp7ZHevdX6W')
        .then((result) => {
            setErrorMessage(result.text)
            setErrorPoppup(true)
        }, (error) => {
            setErrorMessage(error.text)
            setErrorPoppup(true)
        });
    };

    return (
        <>
            {errorPoppup ? <Poppup messageProblem={errorMessage} /> : null}
            <Drawe der={false} derContact="/ISE/" />
            <div className="container flex justify-center items-center h-screen">
                <div className="mainContent p-3 bg-[#333] text-white rounded-md flex flex-col justify-between items-center w-[50%] h-auto">
                    <div className="title p-3">
                        <Title colorLetter="Contact Us" />
                    </div>
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
                        <input 
                            type="submit" 
                            value="Send" 
                            className="p-2 rounded-md bg-[#444] cursor-pointer hover:bg-[#333] transition-colors"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}