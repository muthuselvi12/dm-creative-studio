

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">
          <img 
            src='/dmcreativestudio.png' 
            alt="DM Creative Studio" 
            style={{ height: "45px", width: "auto" }}
          />
        </a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link btn btn-warning px-3 text-dark" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
