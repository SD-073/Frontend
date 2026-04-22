import { useState, type ChangeEventHandler } from 'react';

const courses = ['Web Development', 'Data Science', 'UX Design'] as const;

type Course = (typeof courses)[number];

const CourseSelector = () => {
  const [course, setCourse] = useState<Course>('Web Development');

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCourse(e.target.value as Course);
  };

  return (
    <div>
      <h2>Course Selector</h2>
      <label htmlFor='course'>Select a course: </label>
      <select id='course' value={course} onChange={handleChange}>
        {courses.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <p>You selected: {course}</p>
    </div>
  );
};

export default CourseSelector;
