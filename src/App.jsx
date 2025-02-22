import './App.scss';
import MyPhoto from './assets/portrait-pro.jpg'
import picture_p1 from './assets/logo_dm.png'
import icon_react from './assets/React-icon.svg.png'
import icon_spring from './assets/spring_boot_icon.png'
import icon_cicd from './assets/cicd_icon.png'
import picture_p2 from './assets/crossword.jpg'
import icon_jee from './assets/jee_icon.png'
import icon_js from './assets/javascript_icon.png'
import icon_mysql from './assets/mysql-logo.png'
import picture_p3 from './assets/miniforum.jpg'
import icon_express from './assets/expressjs.png'
import github_logo from './assets/github.png'
import linkedin_logo from './assets/LinkedIn_icon_circle.svg.png'

function App() {
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
          <div className='about-me'>
          <img src={MyPhoto} alt='Une photo de profil'></img>
          <p>Hi, I'm Juba, a Full Stack Web Developer 💻<br></br> I love web and I'm passionate about this field since 2 years😁
          </p>
        </div>
    </div>
    <h1 id='myprojects'>My projects</h1>
      <div className='projects'>
        <div className='project' id="p1">
          <h1>Dungeon Master</h1>
          <div>
            <img src={picture_p1} alt="A RPG logo"></img>
            <div className='content'>
              <p>It’s an online roleplay platform where you can create and play with other users to a roleplay game (such as Dungeon & Dragons)</p>  
              <div className='logos'>
                <div className='logo-item'>
                  <img src={icon_react} alt="A react logo" width={65} height={60}></img>
                  <p>React</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_spring} alt="A spring boot logo" width={65} height={60}></img>
                  <p>Spring Boot</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_cicd} alt="A cicd image" width={110} height={60}></img>
                  <p>CI/CD Pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='project' id="p2">
          <h1>CruciWeb</h1>
          <div>
            <img src={picture_p2} alt="My croswword website"></img>
            <div className='content' id='p1'>
              <p>It's a simple crossword website where you can create and solve crossword,
                 this projet was made without any framework
              </p>  
              <div className='logos'>
                <div className='logo-item'>
                  <img src={icon_jee} alt="A JEE logo" width={65} height={60}></img>
                  <p>JEE</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_js} alt="A javascript logo" width={65} height={60}></img>
                  <p>Javascript</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_mysql} alt="A mysql logo" width={65} height={60}></img>
                  <p>MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className='project' id="p3">
          <h1>MiniForum</h1>
            <div>
              <img src={picture_p3} alt="A forum image"></img>
              <div className='content' id='p1'>
                <p>A small forum that I developed during my holidays,
                   you can create posts and interact with them, it made me learn ExpressJS
                </p>  
                <div className='logos'>
                  <div className='logo-item'>
                    <img src={icon_react} alt="A React logo" width={65} height={60}></img>
                    <p>React</p>
                  </div>
                  <div className='logo-item'>
                    <img src={icon_express} alt="A expressjs logo" width={65} height={60}></img>
                    <p>Expressjs</p>
                  </div>
                  <div className='logo-item'>
                    <img src={icon_mysql} alt="A mysql logo" width={65} height={60}></img>
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <h1 id='skills-title'>Skills</h1>
        <div className='skills'>
          <div className='section-skill'>
            <h2>Frontend</h2>
              <div className='logos-skills'>
                <div className='logo-item'>
                  <img src={icon_react} alt="A React logo" width={65} height={60}></img>
                  <p>React</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_express} alt="A expressjs logo" width={65} height={60}></img>
                  <p>Expressjs</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_mysql} alt="A mysql logo" width={65} height={60}></img>
                  <p>MySQL</p>
                </div>
            </div>
          </div>

          <div className='section-skill'>
            <h2>Backend</h2>
              <div className='logos-skills'>
                <div className='logo-item'>
                  <img src={icon_react} alt="A React logo" width={65} height={60}></img>
                  <p>React</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_express} alt="A expressjs logo" width={65} height={60}></img>
                  <p>Expressjs</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_mysql} alt="A mysql logo" width={65} height={60}></img>
                  <p>MySQL</p>
                </div>
            </div>
          </div>

          <div className='section-skill'>
            <h2>DevOps</h2>
              <div className='logos-skills'>
                <div className='logo-item'>
                  <img src={icon_react} alt="A React logo" width={65} height={60}></img>
                  <p>React</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_express} alt="A expressjs logo" width={65} height={60}></img>
                  <p>Expressjs</p>
                </div>
                <div className='logo-item'>
                  <img src={icon_mysql} alt="A mysql logo" width={65} height={60}></img>
                  <p>MySQL</p>
                </div>
            </div>
          </div>

        </div>
        <h1 id='profiles-title'>Profiles</h1>
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
