import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
  const {id} = useParams();
  return (
    <div>
      Parama: {id}
    </div>
  )
}

export default ParamComp

// Note:- 

// you’re using with :id or :courseId is a route parameter, not a query parameter.

// Whenever a route has dynamic parameters (like :id or :courseId), 
// React Router makes them available via useParams().
// useParams() returns an object with all the dynamic parameters as properties.
// You can destructure the params:

// const { id, courseId } = useParams();

// Or access them directly:

// const params = useParams();
// console.log(params.id, params.courseId);

// This works the same way no matter how many dynamic params you define in the route.