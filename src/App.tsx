
import { BrowserRouter as Router }  from "react-router-dom";
import Header from './components/Header'
import RouteContentRenderer from './components/RouteContentRenderer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Header />
            </div>
            <div className="col-9">
              <RouteContentRenderer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
