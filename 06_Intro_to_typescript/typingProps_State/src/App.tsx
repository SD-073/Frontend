import Button from './components/Button';
import Container from './components/Container';
import Greeting from './components/Greeting';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Status from './components/Status';
import StudentCard from './components/StudentCard';

const App = () => {
  return (
    <>
      <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Greeting name='Alice' />
        <Greeting name='Grace' />
        {/* <Greeting name={40} /> */}

        {/* <Button /> */}
        <Button label='click me' />
        <Button label='Submit' color='green' />

        <Status status='success' />
        <Status status='error' />
        <Status status='loading' />
        {/* <Status status='something' />  */}

        <Profile />
        <StudentCard />

        <Posts />
      </Container>
    </>
  );
};

export default App;
