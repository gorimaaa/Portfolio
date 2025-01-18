import './App.scss'
import photo from './assets/portrait-professionnel-corporate-4.jpg'
import picture_p1 from './assets/crossword.png'
import picture_p2 from './assets/lineoccurence.jpg'
import github_logo from './assets/github.png'
import linkedin_logo from './assets/LinkedIn_icon_circle.svg.png'
function App() {

  return (
    <>
      <nav className="navbar">
        <div className="left-navbar">
          <a href="#">Home</a>
        </div>
        <div className="right-navbar">
          <a href="#">About me</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Profiles</a>
        </div>
      </nav>
      <div className='main-container'>
        <div className="main">
          <h1>About me</h1>
          <div className='about-me'>
            <img src={photo} alt='Une photo de profil'></img>
            <p>Hi, i'm currently a student in computer science.<br></br> I love web technologies,<br></br> I'm passionate about developing and pentesting web app</p>
          </div>

          <h1>My projects</h1>
          <div className='projects'>
            <div className='project1'>
              <img src={picture_p1} alt="Image projet1"></img>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus, et numquam quaerat delectus natus aperiam? Consequuntur corrupti, ea quasi ipsa harum officia placeat, est nobis quae molestiae dolorem quis? lore</p>
            </div>
            <div className='project2'>
              <img src={picture_p2} alt="Image projet2"></img>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error ducimus dolorem quo voluptatibus, eius repellat et unde non! Quod voluptates ducimus iusto aspernatur ab minus, atque illo adipisci dignissimos!</p>
            </div>
            <div className='project3'>
              <img src={picture_p2} alt="Image projet3"></img>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error ducimus dolorem quo voluptatibus, eius repellat et unde non! Quod voluptates ducimus iusto aspernatur ab minus, atque illo adipisci dignissimos!</p>
            </div>
          </div>

          <h1>My skills</h1>
          <div className='skills'>
            <ul>
              <li>Java</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </div>

          <h1>Profiles</h1>
          <div className='profiles'>
            <img src={github_logo} alt="Logo github"></img>
            <img src={linkedin_logo} alt="Logo linkedin"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
