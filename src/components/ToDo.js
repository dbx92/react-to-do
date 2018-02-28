import React, {Component} from 'react';

class ToDo extends Component {
  render(){
    return(
    <div>
      <li>
          <input type="checkbox" checked={this.props.isCompleted} onChange={this.props.toggleComplete} />
          <button  onClick={this.props.deleteToDo}>{this.props.description} </button>
      </li>
      </div>
    );
  }
}
export default ToDo;
