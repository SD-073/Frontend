import { useState } from 'react';
import type { StudentType } from '../types';

const StudentCard = () => {
  //   const [student, setStudent] = useState({ name: 'Alice', age: 25 });

  const [student, setStudent] = useState<StudentType>({
    name: 'Alice',
    age: 30,
  });

  const handleUpdate = () => {
    setStudent({
      name: 'Alice',
      age: 26,
      city: 'Berlin',
    });
  };

  return (
    <div>
      <h2>Student Card</h2>
      <p>
        {student.name} is {student.age} years old
      </p>
      {student.city && <p>City: {student.city}</p>}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default StudentCard;
