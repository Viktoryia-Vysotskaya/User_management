import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import UserTable from "./components/UserTable";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="main-content">
        <h1 className="title">User Management</h1>
        <UserTable />
      </div>
      <footer className="footer">
        <div className="footer-row">
          <span>Copyright &copy; User Management.App 2024</span>
        </div>
        <div className="footer-row">
          <span>Coded by Viktoryia Vysotskaya</span>
          <a
            href="https://github.com/Viktoryia-Vysotskaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/viktoryia-vysotskaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:radevich.vika2014@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
