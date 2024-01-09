import '../styles/collapse.css';
import arrow from '../assets/arrow.svg';
import { useState } from "react";

function Collapse({ description, title }) {
    const [open, setOpen] = useState(false);
    const [rotate, setRotate] = useState(false); 

    const toggle = () => {
        setOpen(!open);
        setRotate(!rotate);
    };

    const imageClass = rotate ? 'imgarrow rotated' : 'imgarrow';

    const elementHtml = (
        <div className={open ? "collapseunder" : "collapseunderHiden"}>
            {Array.isArray(description) ? description.map((element) => <p>{element}</p>) : <p>{description}</p>}
        </div>
    );

    return (
        <div>
            <div className="collapse">
                <p>{title}</p>
                <img className={imageClass} src={arrow} alt="arrow" onClick={toggle} />
            </div>
            {open && elementHtml}
        </div>
    );
}

export default Collapse;