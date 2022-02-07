import linkedinIcon from '../assets/linkedin_icon.png';
import githubIcon from '../assets/github_icon.png';
import creddleIcon from '../assets/creddle_icon.png';
import mailIcon from '../assets/mail_icon.png';
import './links.scss';
import { useState } from 'react'

const Links = (props) => {

  const [popUp, setPopUp] = useState(false);

  const managePopUp = () => {

    // navigator.clipboard.writeText("kennytse91@gmail.com")

    setPopUp(true)
    setTimeout(function () {
      setPopUp(false)
    }, 3500)
  }

  return (
    <>
      <div className="iconContainer">
        <div className="iconColumn">

          <a href="https://www.linkedin.com/in/kenny-shinghim-tse/">
            <img className="icon" alt="Linkedin Icon" src={linkedinIcon}></img>
          </a>

          <a href="https://resume.creddle.io/resume/4lmpr8jfa7">
            <img className="icon" alt="Creddle Icon" src={creddleIcon}></img>
          </a>

        </div>
        <div className="iconColumn">

          <img className="icon" alt="Mail Icon" src={mailIcon} onClick={() => { managePopUp(); }}></img>

          <a href="https://github.com/kenny-tse">
            <img className="icon" alt="Github Icon" src={githubIcon}></img>
          </a>
        </div>
      </div>

      {
        popUp &&
        <div className="popUpNotification">Email copied to clipboard!</div>
      }
    </>
  )

}

export default Links;