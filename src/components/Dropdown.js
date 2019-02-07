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

      <div className="box">
        <input type="text" value={this.state.dropdownValue} onMouseDown={this.dropdownCheck} readOnly/>  
        <div className={'optionSelect ' + (this.state.active? 'active' : ' ')} >
          <ul>
            {
              this.props.options.map((selectValue, selectKey)=>{
                return(
                  <p key={selectKey}>
                   <button value={selectValue.toString()} key={selectKey} onMouseDown={this.selectOption}>{selectValue} </button>
                  </p>
                  
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