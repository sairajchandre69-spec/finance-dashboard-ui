import "../styles/Navbar.css";

function Navbar({ role, setRole }) {
  return (
    <nav className="nav">
      <div className="nav-wrap">
        <div className="left-box">
          <img
            src="zorvynfulllogolight.png"
            alt="logo"
            height={50}
            width={190}
          />
          <span className="line">|</span>
          <p className="heading">Finance Dashboard UI</p>
        </div>

        <div className="right-box">
          <label>Role:</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="role"
          >
            <option value="Admin">Admin</option>
            <option value="Viewer">Viewer</option>
          </select>

          <p className="mail">sairajchandre69@gmail.com</p>

          <button className="btn">Logout</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;