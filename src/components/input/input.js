import {Component} from 'react'
import classes from './input.module.scss';


export default class Input extends Component {

  state = {value: '',}

  onInputHandler = e => {
    const {value} = e.target;
    this.setState({value});
  }
  
  onClrHandler = () => {
    this.setState({value: ''})
    this.props.clearData();
  };

  onKeyupHandler = e => {
    if (e.code === 'Escape') {
      this.onClrHandler()
    } else
    this.props.inputHandler(this.state.value);
  }  

  render(){
    const {id, type, readonly, placeholder, autofocus, arialabel, handlerClick} = this.props;

    return (
      <div className={classes.inputBox}>
        <input
          id = {id}
          type = {type}
          className={classes.input} 
          placeholder={placeholder}
          onInput={(e) => this.onInputHandler(e)}
          value={this.state.value}
          onKeyUp={e => this.onKeyupHandler(e)}
          autoFocus={autofocus}
          aria-label={arialabel}
          readOnly={readonly}
          onClick={handlerClick}
          autoComplete="off"
        />
        {this.state.value && !readonly
          ? <button 
              type="button" 
              className={classes.clrButton}
              onClick={this.onClrHandler}
              aria-label={`Clear ${arialabel}`}
            >&times;</button> 
          : null}
      </div>  
    )
  }
}


