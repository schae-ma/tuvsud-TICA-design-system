import PropTypes from 'prop-types';
import "./button.scss"
const Button = ({size, backgroundColor})=>{
    
    return (
        <>  
            <button className='button'>Button</button>

        </>
    )
}

export default Button

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    
  };
  
  Button.defaultProps = {
    size: 'medium',
  };