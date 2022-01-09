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
        <p className="IntroParagraph">Full stack developer with a passion for creating apps that not only enhance the user experience but the internal employee experience as well. I’m excited to utilize my interpersonal skills to understand the customer and employee pain points and use that as the driving factor in app development.</p>
      </div>


      <div className="ProjectsContainer">
        <div className="VideoHolder">
          <iframe className="VideoToShow" width="3000" height="315" src="https://www.youtube.com/embed/lKQDpHSCSDM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <a className="videoDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tincidunt scelerisque. Maecenas sit amet pellentesque neque. Donec eu porttitor diam. Morbi imperdiet velit ante, vitae dignissim justo pretium nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ut risus sit amet mi finibus porttitor. Aliquam tincidunt tempor sapien eu hendrerit. Donec euismod sagittis orci. Phasellus malesuada ipsum a erat consequat pretium. Nulla tristique diam eu faucibus efficitur. Integer ultricies aliquet nibh, ut ultricies ligula vestibulum et. Fusce non enim sit amet massa tincidunt gravida. Pellentesque mi elit, ultrices sed magna et, laoreet mollis magna. Donec congue a urna sed venenatis. Maecenas sed eros ex.</a>
        </div>

      </div>
    </div>
  );
}

export default App;
