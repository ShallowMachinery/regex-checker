import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Rule1Page from "./Rule1Page";
import Rule2Page from "./Rule2Page";
import "./App.css";

function App() {
      useEffect(() => {
          document.title = "RegEx Checker";
      }, []);

  return (
    <Router>
      <div className="app">
        <div className="checker">
          <Routes>
            <Route path="/rule1" element={<Rule1Page />} />
            <Route path="/rule2" element={<Rule2Page />} />
          </Routes>
          <nav>
            <ul>
              <li>
                <Link to="/rule1">Rule: Same start and end letter</Link>
              </li>
              <li>
                <Link to="/rule2">Rule: `a` must be followed by a `b`</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: "center", fontSize: '1rem' }}>
        <p className="footer">Submitters: Galope, Eleazar James S. and Cruz, Jocas Arabella S. (CS-3A)</p>
      </footer>
    </Router>
  );
}

export default App;
