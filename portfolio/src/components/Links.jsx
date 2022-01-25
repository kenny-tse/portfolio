import linkedinIcon from '../assets/linkedin_icon.png';
import githubIcon from '../assets/github_icon.png';
import creddleIcon from '../assets/creddle_icon.png';
import mailIcon from '../assets/mail_icon.png';
import './links.scss';

const Links = (props) => {

  return (
    <>
      <div className="iconContainer">
        <div className="iconColumn">
          <a href="https://www.linkedin.com/in/kenny-shinghim-tse/">
            <img className="icon" src={linkedinIcon}></img>
          </a>
          <a href="https://resume.creddle.io/resume/4lmpr8jfa7">
            <img className="icon" src={creddleIcon}></img>
          </a>
        </div>

        <div className="iconColumn">

          <img className="icon" src={mailIcon}></img>

          <a href="https://github.com/kenny-tse">
            <img className="icon" src={githubIcon}></img>
          </a>
        </div>
      </div>
    </>
  )

}

export default Links;