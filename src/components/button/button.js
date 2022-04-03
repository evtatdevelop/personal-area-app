import classes from './button.module.scss';

const Button = props => {
  const {label, type, handlerClick} = props;
  return (
    <button 
      type={type} 
      className={classes.button}
      onClick={handlerClick}
    >{label}</button>
  )
}

export default Button;