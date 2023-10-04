import React, { Component ,Fragment} from 'react'
import './Listcourse.css'

export class Listcourse extends Component {
  state={
    isEdit:false
  }
  // show normal list course
  ShowCourse=() => {
    return (
    <li className='Courserow'>
      <span>{this.props.CourseName}</span>
      <span>
      <span><button className='btnEdit' onClick={() => {
        this.ToggleIsEdit()
       }}>Edit</button> </span>
      <span> <button className='btnDelete' onClick={() => {this.props.DeleteCours(this.props.index)}}>Delete</button></span>
      
      </span>
   </li>
    )
  }
  // show Edit course form
  ShowEditCourse=() => {
    return (
      <form onSubmit={this.UpdateCourseItem} className='formUpdate'>
        <input type='text' defaultValue={this.props.CourseName} ref={(v) => {this.input=v}} />
        <button>Update</button>
      </form>
    )
  }
  // toggle isEdit varible
  ToggleIsEdit(){
    this.setState({
      isEdit:!this.state.isEdit
    })
  }
  // Update Course Item 
  UpdateCourseItem=(e)=>{
     e.preventDefault();
     this.props.EditCourse(this.props.index,this.input.value);
     this.ToggleIsEdit();
  }

  
  
  render() {
    return (
      <Fragment>
        {( ! this.state.isEdit) ? this.ShowCourse(): this.ShowEditCourse()}
         
      </Fragment>
    )
  }
}

export default Listcourse
