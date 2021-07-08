import logo from './logo.svg';
import './App.css';
import Icons from './components/icons';
import Home from './pages/home';
import Footer from './components/Footer';


function App() {
  return (
      <div>
      <Home></Home>
      <Footer></Footer>
      </div>
  )
}

function Hero() {
  return (
    <div className="hero">
        <img src="./Images/Dude-Coding.jpg" alt="Ian-Coding"/>
    </div>
  )
}
export default App;

