import './App.css';
import Dropdown from './components/dropdown/Dropdown';
import WeatherModal from './components/weather/WeatherModal';

function App() {
  return (
    <div className='main-container'>
      <Dropdown />
      <WeatherModal />
    </div>
  );
}

export default App;
