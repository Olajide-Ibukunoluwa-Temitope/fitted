import Dashboard from "./pages/Dashboard/Dashboard";
import './App.css';
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="frame-container">
        <SideBar />
        <div className="body">
          <Navbar />
          <div className="content">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
