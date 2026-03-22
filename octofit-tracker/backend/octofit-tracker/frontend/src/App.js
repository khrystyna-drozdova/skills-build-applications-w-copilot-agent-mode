import logo from './octofitapp-small.png';
import './App.css';

function App() {
  return (
    <div className="container py-4">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="OctoFit Logo" style={{height: '40px', marginRight: '12px'}} />
          OctoFit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Activities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Leaderboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Workouts</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Heading */}
      <h1 className="display-4 mb-4 text-center">Welcome to OctoFit Tracker</h1>

      {/* Card Example */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Get Started</h5>
              <p className="card-text">Track your fitness activities, join teams, and climb the leaderboard!</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Table Example */}
      <div className="table-responsive mb-4">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">User</th>
              <th scope="col">Team</th>
              <th scope="col">Activity</th>
              <th scope="col">Duration (min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clark Kent</td>
              <td>DC</td>
              <td>Flight</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Tony Stark</td>
              <td>Marvel</td>
              <td>Suit Training</td>
              <td>45</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button Example */}
      <div className="text-center mb-4">
        <button className="btn btn-success mx-2">Add Activity</button>
        <button className="btn btn-outline-secondary mx-2">View Leaderboard</button>
      </div>

      {/* Modal Example (static, for demo) */}
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} aria-modal="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Demo Modal</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>This is a static Bootstrap modal example.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
