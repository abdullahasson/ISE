import { useState } from 'react';
import { saveAs } from 'file-saver';
import { IconButton } from "@mui/material"
import Download from '@mui/icons-material/Download';
import { Downloading } from "@mui/icons-material";
// import Download from '@mui/icons-material/Download';

const DownloadBtn = (Props) => {


    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        setLoading(true);
        const url = Props.url; // replace with your image URL
        const fileName = 'image.jpg'; // replace with the desired file name

        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                saveAs(blob, fileName);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });

    };


    return (
        <>
            <IconButton onClick={() => handleDownload()}>
                {loading ? <Downloading /> : <Download />}
            </IconButton>
        </>
    )

}

export default DownloadBtn