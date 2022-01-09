import './App.scss';
import Background from './components/Background';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <Background />
      <NavBar />


      <div className="IntroContainer">
        <header className="Name">KENNY TSE</header>
        <p1 className="IntroParagraph">Full stack developer with a passion for creating apps that not only enhance the user experience but the internal employee experience as well. I’m excited to utilize my interpersonal skills to understand the customer and employee pain points and use that as the driving factor in app development.</p1>
      </div>
    </div>
  );
}

export default App;
