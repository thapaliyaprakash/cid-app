import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🕵️‍♂️ CID Department</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#cases">Our Recent Cases</a></li>
          <li><a href="#about">About CID</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#episodes">Episodes</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="hero">
          <h1>Welcome to the Crime Investigation Department</h1>
          <p>Your Trusted Partner in Solving Crimes and Bringing Justice.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2>Gallery:</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://i.ytimg.com/vi/WXDqRUWdqnU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-NbaVgzVncR6KKytm9sQUhk-yGQ" />
            <div className="caption">Case 1: Evidence</div>
          </div>
          <div className="gallery-item">
            <img src= "https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <div className="caption">Case 2: Crime Scene</div>
          </div>
          <div className="gallery-item">
            <img src="https://i.ytimg.com/vi/QH2VqicMQqI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBaVGINzuolXzMVldXp3ZO3ARVRnw" />
            <div className="caption">Case 3: Forensics Lab</div>
          </div>
          <div className="gallery-item">
            <img src="https://images.justwatch.com/backdrop/323203393/s640/season-2" />
            <div className="caption">Case 4: Investigation Team</div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="cases-section">
        <h2>Our Recent Cases:</h2>
        <ul className="cases-list">
          <li>✔️ Solved High Profile Murder</li>
          <li>✔️ Cybercrime Investigation</li>
          <li>✔️ Major Robbery Bust</li>
          <li>✔️ Missing Person Found</li>
        </ul>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About CID:</h2>
        <p>The Crime Investigation Department (CID) is an Indian Police Procedural Television Series that premiered on Sony Entertainment Television on 21 January 1998. The series was created by B. P. Singh and produced by Singh and Pradeep Uppoor under the banner of Fireworks Productions in season 1; Deepak Dhar, Rajesh Chadhaa and B.P. Singh under Banijay Asia in season 2. It featured Shivaji Satam as ACP Pradyuman, Aditya Srivastava as Sr. Inspector Abhijeet, Dayanand Shetty as Sr. Inspector Daya, Dinesh Phadnis as Inspector Fredricks and Narendra Gupta as Dr. Salunkhe.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us:</h2>
        <div className="contact-info">
          <p>Email: contact@ciddepartment.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="episodes-section">
        <h2>Episodes:</h2>
        <div className="episodes-grid">
          <a href="https://youtu.be/jS90L1FNocQ?si=E-65ICyEWfM0NlJX" className="episode-card" target="_blank">Episode 1: Crime Without A Voice Ft. CID</a>
          <a href="https://youtu.be/3OMdDaqjtEE?si=092tTLr3Hccu32PK" className="episode-card" target="_blank">Episode 2: CID Vs EyeGang_1</a>
          <a href="https://youtu.be/KdnV4aI2G_A?si=O2c9SLrtfmTJuiUw" className="episode-card" target="_blank">Episode 3: CID Vs EyeGang_2</a>
          <a href="https://youtu.be/gmKpw1Ddh3s?si=OdulptCr2cXqW3cE" className="episode-card" target="_blank">Episode 4: The Last Clue</a>
        </div>
      </section>
    </div>
  );
}

export default App;
