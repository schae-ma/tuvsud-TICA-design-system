import AccordionItem from "./AccordionItem"
import PropTypes from 'prop-types';
import "./accordion.scss"
const Accordion = ({size, backgroundColor})=>{
    
    return (
        <>  
            <AccordionItem label={"Accordion 1"} size={size} backgroundColor={backgroundColor}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </p>
            </AccordionItem>
            <AccordionItem label={"Accordion 2"} size={size} backgroundColor={backgroundColor}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
            </AccordionItem>

        </>
    )
}

export default Accordion

Accordion.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    
  };
  
  Accordion.defaultProps = {
    size: 'medium',
  };