import StudentsProfile from './StudentsProfile';

function Students() {
  const students = [
    { id: 1, name: 'Grace', course: 'Software Development' },
    { id: 2, name: 'Davinder', course: 'Software Development' },
    { id: 3, name: 'Claus', course: 'Software Development' },
    { id: 4, name: 'Kai', course: 'Software Development' },
    { id: 5, name: 'Alex', course: 'Software Development' },
    { id: 6, name: 'Ahmed', course: 'Software Development' },
    { id: 7, name: 'Onur', course: 'Software Development' },
  ];

  return (
    <div>
      <h2>Student List</h2>
      {/* {students.map((student) => (
        <div>
          <h2>
            {student.id}: {student.name}
          </h2>
          <p>{student.course}</p>
        </div>
      ))} */}

      {students.map((student) => (
        <StudentsProfile
          key={student.id}
          studentName={student.name}
          course={student.course}
        />
      ))}
    </div>
  );
}

export default Students;
