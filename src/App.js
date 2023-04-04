import Introduction from './components/Introduction';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import SectionAbout from './components/SectionAbout';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Introduction />
      <SectionAbout />
    </div>
  );
}

export default App;
