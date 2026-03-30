function StudentsProfile({ studentName, course }) {
  return (
    <div>
      <h2>{studentName}</h2>
      <p>This student is part of {course}</p>
    </div>
  );
}

export default StudentsProfile;
