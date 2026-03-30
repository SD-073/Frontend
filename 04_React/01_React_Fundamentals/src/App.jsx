import Events from './components/Events';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Product from './components/Product';
import Students from './components/Students';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className='app'>
      <h1>App.JSX</h1>
      <Greetings name='Grace' age={25} />
      <Navbar />
      <Main />

      <Product
        title='Amazon Echo'
        price={29.99}
        description='Your home assistant'
      />

      <Product
        title='Amazon Kindl'
        price={59.99}
        description='something else'
      />
      <Footer />

      <Students />

      <WelcomeMessage isLoggedIn={false} userName='Alice' />
      <WelcomeMessage isLoggedIn={true} userName='Alice' />

      <Notification hasMessages={false} />
      <Events />
    </div>
  );
}

export default App;
