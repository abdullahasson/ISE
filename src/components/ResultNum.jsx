// LIBRARY COMPONENTS
import { Tooltip } from "@mui/material"
// Images
import sadface from "../assets/sadface.gif"

export default function ResultNum(Props) {
    return (
        <Tooltip title="Number of photos" placement="right">
            <div className={`total bg-[#2f3640] fixed transition-transform flex flex-col p-4 left-2 top-4 justify-center items-center gap-1 z-20 rounded-full ${Props.total == 0 ? "scale-150 rounded-xl left-[50%] top-[50%] gap-0 -translate-x-[50%] -translate-y-[50%] w-[100%] h-[100%] text-[55px]" : null}`}>
                <h1>
                    {Props.total}
                </h1>
                {Props.total == 0 ?
                    <div className="flex flex-col justify-between gap-1 items-center">
                        <img src={sadface} />
                        <p className="text-[33px]">No Results for <span className="text-[#eea8a8]">{Props.word}</span></p>
                    </div>
                    : null
                }
            </div>
        </Tooltip>
    )
}