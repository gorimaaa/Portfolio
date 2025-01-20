import './App.scss'
import photo from './assets/portrait-professionnel-corporate-4.jpg'
import picture_p1 from './assets/crossword.png'
import picture_p2 from './assets/dungeonmaster.jpg'
import picture_p3 from './assets/miniforum.jpg'
import github_logo from './assets/github.png'
import linkedin_logo from './assets/LinkedIn_icon_circle.svg.png'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = "Portfolio"; // Définit le titre de la page
  }, []);

  function handleProject1(){
    window.location.href='https://github.com/gorimaaa/Crossword_WebApp';
  }

  function handleProject3(){
    window.location.href='https://github.com/gorimaaa/MiniForum';
  }

  function handleGithub(){
    window.location.href='https://github.com/gorimaaa';
  }

  function handleLinkedin(){
    window.location.href='https://www.linkedin.com/in/jubabelhocine';
  }

  return (
    <>
      <nav className="navbar">
        <div className="left-navbar">
          <a href="#">Home</a>
        </div>
        <div className="right-navbar">
          <a href="#aboutme">About me</a>
          <a href="#myprojects">Projects</a>
          <a href="#myskills">Skills</a>
          <a href="#profiles">Profiles</a>
        </div>
      </nav>
      <div className='main-container'>
        <div className="main">
          <h1 id="aboutme">About me</h1>
          <div className='about-me'>
            <img src={photo} alt='Une photo de profil'></img>
            <p>Hi, I'm currently a student in computer science.<br></br> I love web technologies and I'm passionate about developing and pentesting web applications
            <br></br>I posted some projects that I made don't hesitate to check them out</p>
          </div>

          <h1 id='myprojects'>Projects</h1>
          <div className='projects'>
            <div className='project1' onClick={handleProject1}>
              <img src={picture_p1} alt="Image projet1"></img>
              <p>It's a simple crossword website where you can create and solve crossword, this projet was made without any framework</p>
            </div>
            <div className='project2'>
              <img src={picture_p2} alt="Image projet2"></img>
              <p>This project is my biggest project until now, its an online roleplay platform where you can create and play with other users to a roleplay game, its very similar to the famous website Roll20, the technologies used are React and Spring Boot</p>
            </div>
            <div className='project3' onClick={handleProject3}>
              <img src={picture_p3} alt="Image projet3"></img>
              <p>Its a small forum that I developed during my holidays, you can create posts and interact with them, its made with React and Nextjs</p>
            </div>
          </div>

          <h1 id='myskills'>Skills</h1>
          <div className='skills'>
            <ul>
              <li>Java</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </div>

          <h1 id='profiles'>Profiles</h1>
          <div className='profiles'>
            <img src={github_logo} alt="Logo github" onClick={handleGithub}></img>
            <img src={linkedin_logo} alt="Logo linkedin" onClick={handleLinkedin}></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
