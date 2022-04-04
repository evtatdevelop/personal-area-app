import {Component} from 'react'
import classes from './input.module.scss';
import is from 'is_js';

export default class Input extends Component {

  state = {
    value: '',
    valid: false,
    changed: false,
    error: '',
  }
  
  componentDidMount() {
    const {value} = this.props;
    if (value) this.setState({value, valid: true})
  }

  validation = (value) => {
    let valid = true;
    if ( this.props.validation ) { 
      let res = null;
      valid = this.props.validation.map(item => {       
        if (is.boolean(res) && !res) return false;
        switch (item) {
          case 'required': 
            res = !!value;
            if (!res) this.setState({error: `${this.props.placeholder} required`});
            return res;          
          case 'email':
            res = is.email(value);
            if (!res) this.setState({error: `Invalid Email`});
            return res;         
          default: return true; 
        }    
      }).reduce((res, curr) => res && curr, true)
    }
    this.setState({valid});
    return valid;
  }

  onInputHandler = e => {
    const {value} = e.target;    
    this.setState({value: value});
    if ( this.validation(value) ) this.props.inputHandler(value);
    else this.props.inputHandler('');
  }
  
  onClrHandler = () => {
    this.setState({value: '', changed: false})
    this.props.clearData();
  };

  onKeyupHandler = e => {
    if (e.code === 'Escape') {
      this.onClrHandler()
    }
  }
  
  onBlur = () => {
    this.setState({changed: true})
    this.validation(this.state.value);
  }

  render(){
    const {id, type, readonly, placeholder, autofocus, arialabel, handlerClick,} = this.props;
    const {value, valid, changed, error} = this.state;

    return (
      <div className={classes.input}>
        <div className={classes.inputBox}>
          <input
            id = {id}
            type = {type}
            placeholder={placeholder}
            onInput={(e) => this.onInputHandler(e)}
            value={value}
            onKeyUp={e => this.onKeyupHandler(e)}
            autoFocus={autofocus}
            aria-label={arialabel}
            readOnly={readonly}
            onClick={handlerClick}
            autoComplete="off"
            onBlur={this.onBlur}
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

        <div className={classes.error}>
          {!valid && changed ? error  : null}
        </div>

      </div>  
    )
  }
}


