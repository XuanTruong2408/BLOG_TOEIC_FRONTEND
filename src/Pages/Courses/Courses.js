import React from 'react'
import { useParams } from 'react-router'

const Courses = ()=> {
    let {id} = useParams();
    return(
        <h1>khóa học {id}</h1>
    )
}
export default Courses