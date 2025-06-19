import './Header.css';


export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>이창근 PORTFOLIO <span>VITE</span></h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#intro">INTRO</a></li>
          <li><a href="#skill">SKILL</a></li>
          <li><a href="#site">SITE</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

