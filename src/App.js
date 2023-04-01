import './App.css';
import './Styles.css'
import Sidebar from "./components/Sidebar";
import Content from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">

        <Sidebar/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
