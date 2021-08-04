import React,{Component} from "react";


export default class App extends Component{
  state = {
    inputValue:"",
    todo:[],
  }

  inputChange = (e)=>{
    this.setState({inputValue:e.target.value})
  }

  buttonSubmit = (e)=>{
    e.preventDefault(); 
    if(this.state.inputValue !== ""){
    this.setState({
      todo:[...this.state.todo,this.state.inputValue],
      inputValue:"",
    })
  }
  }

  render(){
    return(
      <React.Fragment>
        <div className="card">
        <form onSubmit={this.buttonSubmit}>
        <h1>ToDo App</h1>
        <input type="text" 
               placeholder="Enter task..."
               value={this.state.inputValue}
               onChange={this.inputChange} autoFocus/>
        <button onClick={this.buttonSubmit}>Add Task</button>
        <ol>
          {this.state.todo.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ol>
        </form>
        </div>
      </React.Fragment>
    )
  }
}