import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="logo">Finance<span>Manager</span></div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/transactions">Transactions</Link></li>
              <li><Link to="/budget">Budget</Link></li>
              <li><Link to="/reports">Reports</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 Finance Manager. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="hero">
      <h1>Take Control of Your Finances</h1>
      <p>Track expenses, manage budgets, and plan for the future with ease.</p>
      <Link to="/login">
        <button>Get Started</button>
      </Link>
    </section>
  );
}

export default App;
