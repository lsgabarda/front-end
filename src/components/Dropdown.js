import React,{Component} from 'react';

import './Dropdown.css'

class Dropdown extends Component{

  constructor(props){
    super(props);

    this.state={
      dropdownValue: "Hello There",
      active: false,
      options: '',
    }
  }

  dropdownCheck = () =>{
    this.setState({
      active: !this.state.active, 
    }, () =>{
      console.log(this.state.active)
    })
  }

  selectOption = (event) =>{
    this.setState({dropdownValue: event.target.value});
  }

  dropdownDown = () =>{
    this.setState({
      active: false,
    })
  }

  render(){
    return(

      <div className="box" onBlur={this.dropdownDown} onMouseDown={this.dropdownCheck}>
        <input type="button" value={this.state.dropdownValue}  onBlur={this.dropdownDown}  readOnly/>  
        <div className={'optionSelect ' + (this.state.active? 'active' : ' ')} >
          <ul className="selectOption">
            {
              this.props.options.map((selectValue, selectKey)=>{
                return(
                  <li key={selectKey}>
                   <button value={selectValue.toString()} key={selectKey} onMouseDown={this.selectOption}>{selectValue} </button>
                  </li>
                  
                );
              })
            }
          </ul>
          

        </div>
        
      </div>

    );
  }

}

export default Dropdown;