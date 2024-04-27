import { useContext, useState } from 'react';
// import Btnload from "./btnload";
import { Slider } from '@mui/material';
import { ImageEditor } from './controlpanle';



// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
export default function Filters({ className, style }) {

    const { setValues } = useContext(ImageEditor)
    // store the values of ranges
    const [blur, setBlur] = useState(0);
    const [brightness, setBrightness] = useState(1);
    const [grayscale, setGrayscale] = useState(0);
    const [contrast, setContrast] = useState(1);
    const [hueRotate, setHuerotate] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [saturate, setSaturate] = useState(1);
    const [sepia, setSepia] = useState(0);
    const [invert, setInvert] = useState(0);

    const values =
        `
        blur(${blur}px) 
        grayscale(${grayscale}) 
        brightness(${brightness}) 
        contrast(${contrast}) 
        hue-rotate(${hueRotate}deg)
        opacity(${opacity})
        saturate(${saturate})
        sepia(${sepia})
        invert(${invert})
    `;

    setValues(values)

    return (
        <form style={style} action="" className={`flex-col gap-0 p-8 relative max-[566px]:w-full ${className || ''}`} onSubmit={(event) => { event.preventDefault() }}>

            <div
                id='newPosition'
                className={`
                    bg-[#474747] p-3 rounded-full absolute left-0 top-0 m-2 border-transparent border-1 cursor-grab
                    hover:bg-[#333] hover:border-[#ddd]
                `}
            />

            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setBrightness(e.target.value) }}
                    value={brightness}
                    max={3}
                    step={0.1}
                />
                <label htmlFor="">Brightness</label>
            </div>

            {/* Contrast */}
            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setContrast(e.target.value) }}
                    value={contrast}
                    max={3}
                    step={0.1}
                />
                <label htmlFor="">Contrast</label>
            </div>

            {/* saturate */}
            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setSaturate(e.target.value) }}
                    value={saturate}
                    max={3}
                    step={0.1}
                />
                <label htmlFor="">saturate</label>
            </div>

            {/* blur */}
            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setBlur(e.target.value) }}
                    value={blur}
                    max={3}
                    step={0.1}
                />
                <label htmlFor="">Blur</label>
            </div>

            {/* Grayscale */}
            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setGrayscale(e.target.value) }}
                    value={grayscale}
                    max={3}
                    step={0.1}
                />
                <label htmlFor="">Grayscale</label>
            </div>

            {/* hue rotate */}
            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setHuerotate(e.target.value) }}
                    value={hueRotate}
                    max={360}
                    step={1}
                />
                <label htmlFor="">hueRotate</label>
            </div>

            {/* sepia */}
            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setSepia(e.target.value) }}
                    value={sepia}
                    max={3}
                    step={0.1}
                />
                <label htmlFor="">sepia</label>
            </div>

            {/* invert */}
            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setInvert(e.target.value) }}
                    value={invert}
                    max={3}
                    step={0.1}
                />
                <label htmlFor="">invert</label>
            </div>


            {/* Opacite */}
            <div className="part"  >
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { setOpacity(e.target.value) }}
                    value={opacity}
                    max={1}
                    step={0.1}
                />
                <label htmlFor="">Opacite</label>
            </div>

        </form>
    )
}