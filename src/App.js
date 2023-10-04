import React, { Component } from 'react';
import Formadd from './commponet/FormAdd/Formadd'
import Listcourse from './commponet/ListCourse/Listcourse'



import './App.css';

class App extends Component {
  state={
    courses:[
      {name:'html'},
      {name:'css'},
      {name:'js'},

    ],
    current:{
      name:""
    }
    
  }
  // change input add handel
  updateCourses=(e) => {
    
    const newCourse=e.target.value;
    this.setState({
      current:{
        name:newCourse
      }
    })
   

   
  }
  // Add a new course
  AddCourse=(e) => {
    e.preventDefault()
    const courses=this.state.courses;
    const current=this.state.current;
    courses.push(current);
    this.setState({
      courses:courses,
      current:{
        name:" "
      }
      
    });
   

   
    
  }
  // Delete course handller
  DeleteCourse=(index) => {
    const courses=this.state.courses;
    const course=courses[index]
    courses.splice(course,1);
    this.setState({
      courses
    })
  }
  // Edit course handller
  EditCourse=(index,NewValue) => {

    const courses=this.state.courses;
    const courseUpdate=courses[index];
     courseUpdate.name=NewValue;
     this.setState({courses})
  }
  
  
  
  
 



  render() {
    const courses=this.state.courses;
    const getLists=courses.map((course , index) => {
       
      return  <Listcourse CourseName={course.name}  key={index} index={index} EditCourse={this.EditCourse} DeleteCours={this.DeleteCourse}/>
}
)
    return (
      <div className="App">
        <h1>Add Courses</h1>
        <Formadd updateCourses={this.updateCourses} AddCourse={this.AddCourse} Value={this.state.current.name}/>
      <ul className='ulListCourse'>
        {getLists}
      </ul>
      </div>
    );
  }
}

export default App;
