import "./accordion.scss"
import {useState} from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMore from "@mui/icons-material/ExpandMore";

const AccordionItem = ({label, size, ...props})=>{
    const [isOpen,setIsOpen]=useState(false)

    const onClickHandler = () =>{
        setIsOpen((prevState)=> !prevState)
    }

    return (
        <div className={`accordion-item accordion-item--${size} ${isOpen ? "open" : ""}`} aria-expanded={isOpen}>  
            <div onClick={onClickHandler} className={`accordion-item-header`} >
                <span>{label}</span>
                <ExpandMore className={`${isOpen ? "rotate" : ""}`}/>
            </div>
            {<div className={`accordion-item-body ${isOpen ? "active" : ""}`} aria-hidden = {!isOpen}> {props.children}</div>}

        </div>
    )
}

export default AccordionItem