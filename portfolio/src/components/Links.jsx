import linkedinIcon from '../assets/linkedin_icon.png';
import githubIcon from '../assets/github_icon.png';
import creddleIcon from '../assets/creddle_icon.png';
import mailIcon from '../assets/mail_icon.png';
import './links.scss';

const Links = (props) => {

  return (
    <>
      <div className="iconContainer">
        <div>
          <img className="icon" src={linkedinIcon}></img>
          <img className="icon" src={githubIcon}></img>
        </div>
        <div>
          <img className="icon" src={mailIcon}></img>
          <img className="icon" src={creddleIcon}></img>
        </div>
      </div>
    </>
  )

}

export default Links;