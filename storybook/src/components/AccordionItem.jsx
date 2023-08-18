import "./accordion.css"
import {useState} from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
const AccordionItem = ({label, size, ...props})=>{
    const [isOpen,setIsOpen]=useState(false)

    const onClickHandler = () =>{
        setIsOpen((prevState)=> !prevState)
    }

    return (
        <div onClick={onClickHandler} className={`accordion-item accordion-item--${size} ${isOpen ? "open" : ""}`}>  
            <div className={`accordion-item-header`} >
                <span>{label}</span>
                {!isOpen && <ExpandMore style={{ float:"right"}}/>}
                {isOpen && <ExpandLess style={{ float:"right"}} />}
            </div>
            {isOpen && <div> {props.children}</div>}

        </div>
    )
}

export default AccordionItem