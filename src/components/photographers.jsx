import { useContext, useState } from "react";
// CONTEXT API 
import { AppContext } from "../App";
// MY COMPONENTS 
import CloseBtn from "./Buttons/CloseBtn";
// MY COMPONENTS LIBRARY
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Tab } from '@mui/material';
import {
    TabContext,
    TabList,
    TabPanel
} from '@mui/lab'
// ICONS
import PersonIcon from '@mui/icons-material/Person';
import ThreePIcon from '@mui/icons-material/ThreeP';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
// CSS FILES
import "react-lazy-load-image-component/src/effects/blur.css"

export default function Photographers() {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { photographerInfo, setshowPhotographer, } = useContext(AppContext)

    return (
        <div className="photographers flex flex-col justify-between items-center p-2 min-w-[240px] g-4 " id={photographerInfo.id} >

            <CloseBtn className="absolute left-1 top-1" onClick={() => { setshowPhotographer(false) }} />

            <div className="flex justify-center items-center w-[130px] h-[130px] bg-[#444] rounded-full">
                <LazyLoadImage
                    effect="blur"
                    src={photographerInfo.profile_image.large}
                    className="w-full h-full rounded-full"
                    delayMethod="debounce"
                    delayTime="100"
                />
            </div>
            <div className="info">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label={<PersonIcon />} value="1" />
                                <Tab label={<LocalSeeIcon />} value="2" />
                                <Tab label={<ThreePIcon />} value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div>
                                <ul>
                                    <li className="text-[16px] flex items-center justify-between"><p>Name :</p> <span>{photographerInfo.name}</span></li>
                                    <li className="text-[16px] flex items-center justify-between"><p>First name :</p> <span>{photographerInfo.first_name}</span></li>
                                    <li className="text-[16px] flex items-center justify-between"><p>Last name :</p> <span>{photographerInfo.last_name}</span></li>
                                    <li className="text-[16px] flex items-center justify-between"><p>Location :</p> <span>{photographerInfo.location}</span></li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div>
                                {/* total_promoted_photos */}
                                <ul>
                                    <li className="text-[16px] flex items-center justify-between"><p>Total photos  :</p> <span>{photographerInfo.total_photos}</span></li>
                                    <li className="text-[16px] flex items-center justify-between"><p>Total promoted photos :</p> <span>{photographerInfo.total_promoted_photos}</span></li>
                                    <li className="text-[16px] flex items-center justify-between"><p>Total likes  :</p> <span>{photographerInfo.total_likes}</span></li>
                                    <li className="text-[16px] flex items-center justify-between"><p>total collections  :</p> <span>{photographerInfo.total_collections}</span></li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div>
                                <ul>
                                    <li>9</li>
                                    <li>10</li>
                                    <li>11</li>
                                    <li>13</li>
                                </ul>
                            </div>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}