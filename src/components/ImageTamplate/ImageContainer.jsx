import { useState, useContext } from "react";
// App Context
import { AppContext } from "../../App";
// Commponents 
import { Box, ImageListItem, ImageListItemBar, IconButton, Avatar } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { BlurhashCanvas } from "react-blurhash"
import DownloadBtn from "../downloadBtn"
// Icon 
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// CSS
import "../../Css/ImageContainer.css"


export default function ImageCountainer(Props) {
    const {
        setshowpanle,
        setimageurlforpanle,
        setshowPhotographer,
        setphotographerInfo,
        getqulite,
    } = useContext(AppContext)

    const [DeleteBlur, setDeleteBlur] = useState(false)

    return (
        <div className="relative">
            <BlurhashCanvas
                hash={`${Props.parm.blur_hash}`}
                style={{
                    position: "absolute",
                    zIndex: "10",
                    width: "100%",
                    minHeight: "278px",
                    height: "100%"
                }}
                className="rounded-md"
            />
            <ImageListItem className="absolute z-10 min-h-[300px] rounded-md overflow-hidden">
                <section>
                    <LazyLoadImage
                        id={Props.parm.id}
                        effect="blur"
                        alt={`${Props.parm.alt_description}`}
                        src={Props.parm.urls[getqulite]}
                        className="w-full h-full"
                        onClick={
                            () => {
                                setimageurlforpanle(Props.parm.urls[getqulite])
                                setshowpanle(true)
                            }
                        }
                        onLoad={() => {
                            setDeleteBlur(!DeleteBlur)
                        }}
                        delayMethod="debounce"
                        delayTime="100"
                    />
                </section>
                <ImageListItemBar
                    position="bottom"
                    style={{
                        height: "45px",
                        padding: "2px"
                    }}
                    actionIcon={
                        <div className="flex justify-between items-center w-full p-2 ">
                            <Box className="flex items-center justify-between gap-1">
                                <IconButton disabled >
                                    {Props.parm.liked_by_user ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                                </IconButton>
                                <p>{Props.parm.likes}</p>
                            </Box>
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ///// `}
                                onClick={() => {
                                    setshowPhotographer(true)
                                    setphotographerInfo(Props.parm.user)
                                }}
                            >
                                <Avatar alt="Remy Sharp" src={Props.parm.user.profile_image.medium} />
                            </IconButton>
                            <DownloadBtn url={Props.parm.urls[getqulite]} />
                        </div>
                    }
                />
            </ImageListItem>
        </div>
    )

} 