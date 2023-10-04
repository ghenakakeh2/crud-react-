import React from 'react'
import'./Formadd.css'

const Formadd = (props) => {
  return (
    <form onSubmit={props.AddCourse} className='form-input'>
      <input type='text' onChange={props.updateCourses} value={props.value}  />
      <button>Add </button>
    </form>
  )
}

export default Formadd
