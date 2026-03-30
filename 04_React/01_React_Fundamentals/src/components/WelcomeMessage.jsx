import Footer from './Footer';
import Navbar from './Navbar';

function WelcomeMessage({ isLoggedIn, userName }) {
  //   if (!isLoggedIn) {
  //     return <p>Welcome, guest. Please login</p>;
  //   }
  //   return <p>Hello, {userName}! Welcome back</p>;

  return (
    <div>
      <Navbar />
      <p>
        {isLoggedIn
          ? `Hello, ${userName}! Welcome back`
          : `Welcome, guest. Please login`}
      </p>
      <Footer />
    </div>
  );
}

export default WelcomeMessage;
