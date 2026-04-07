import { useParams } from "react-router-dom"
import { useState } from "react"

function OneStudent({students}) {
    const [ student, setStudent ] = useState({});
    const {id} = useParams();
    const foundStudent = students.find((student) => id == student.id);
    console.log(foundStudent)

  return (
    <div>{foundStudent.name}</div>
  )
}

export default OneStudent