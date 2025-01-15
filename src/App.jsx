import './App.css'
import photo from './assets/portrait-professionnel-corporate-4.jpg'

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
        </div>
      </nav>
      <div className="main">
        <div className='about-me'>
          <img src={photo} alt='Une photo de profil'></img>
          <p>Hi, i'm currently a student in computer science, I love web technologies</p>
        </div>
      </div>
    </>
  )
}

export default App
