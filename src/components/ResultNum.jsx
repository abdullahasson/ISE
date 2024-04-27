// LIBRARY COMPONENTS
import { Tooltip } from "@mui/material"

export default function ResultNum(Props) {
    return (
        <Tooltip title="Number of photos" placement="right">
            <div className={`total bg-[#2f3640] fixed transition-transform flex p-4 left-2 top-4 justify-between items-center gap-1 z-20 rounded-full ${Props.total == 0 ? "scale-150 rounded-xl left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[400px] h-[400px] text-center" : null}`}>
                <h1>
                    {Props.total}
                </h1>
            </div>
        </Tooltip>
    )
}