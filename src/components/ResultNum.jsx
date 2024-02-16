// LIBRARY COMPONENTS
import { Tooltip } from "@mui/material"

export default function ResultNum(Props) {
    return (
        <Tooltip title="Number of photos" placement="right">
            <div className="total bg-[#2f3640] fixed flex p-4 left-2 top-4 justify-between items-center gap-1 z-20 rounded-full">
                {Props.total}
            </div>
        </Tooltip>
    )
}