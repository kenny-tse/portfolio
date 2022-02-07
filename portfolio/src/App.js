import './App.scss';
import Background from './components/Background';
import NavBar from './components/NavBar';
import Links from './components/Links';

const App = () => {
  return (

    <div className="App">
      <Background />
      <NavBar />
      <div className="IntroContainer">
        <div>
          <header className="Name">KENNY TSE</header>
          <p className="IntroParagraph">Full stack developer with a passion for creating apps that not only enhance the user experience but the internal employee experience as well. I’m excited to utilize my interpersonal skills to understand the customer and employee pain points and use that as the driving factor in app development.</p>
        </div>
        <Links />
      </div>

      <div className="ProjectsContainer">
        <div className="VideoHolder">
          <iframe className="videoToShow" className="VideoToShow" src="https://www.youtube.com/embed/6mUm3OVhgjA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="videoDescription">
            <div className="projectTitle">Fork it Over</div>
            <a>
              Fork it over is a meal planning application that helps users plan out their weekly meal schedule and grocery shopping. The app is built with a React front end and Express Node.js back end. The application features a weekly calendar to keep track of meals you plan to eat on a given week, search function that allows users to look for recipes via the Spoonacular API, pantry list to keep track of ingredients you have on hand, auto generated grocery list based on your weekly meal plan and your pantry items, and favourites page to view your favourited recipes.</a>
          </div>
        </div>

        <div className="VideoHolder">
          <iframe className="videoToShow" src="https://www.youtube.com/embed/lKQDpHSCSDM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="videoDescription">
            <div className="projectTitle">LiveBlock Simulator</div>
            <a>
              Standalone application with mock data provided for performing company duties. Its use is to introduce the application to trainees and provide an opportunity to explore functionalities without interfering with the company workflow. This application is made with .NET Framework WinForms and pulls data from an Excel CSV.</a>
          </div>
        </div>

        <div className="VideoHolder">
          <iframe className="VideoToShow" src="https://www.youtube.com/embed/gMkWgvs-eqg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="videoDescription">
            <div className="projectTitle">Interview Scheduler</div>
            <a>
              A single page application where students can sign up for, delete, and edit interviews. The application makes use of React's custom hooks and state to keep track of user activity and saves scheduled interviews on a PostgreSql database. The project is made using Reactjs, Axios, Classnames, Normalize, Storybook, and PostgreSQL</a>
          </div>
        </div>
      </div>

      <div className="SkillSetContainer">
        <div className="SkillSetList">
          <div>LANGUAGES: JavaScript, Ruby, HTML5, SQL, CSS3, Java, C#, C++</div><br />
          <div>FRAMEWORKS/ LIBRARIES: NodeJS, ReactJS, Express, JQuery, Ajax, Swing,.NET Framework, WinForm, Ruby on Rails, SASS, Material-UI, Mocha/Chai, Git, Jest, Storybook, Poltergeist, Cypress, JUnit</div><br />
          <div>DATABASES: PostgreSQL, msSQL</div><br />
          <div>SPOKEN LANGUAGES: English, Cantonese</div>
        </div>
      </div>

    </div >
  );
}

export default App;
