import Introduction from './components/Introduction';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import SectionAbout from './components/SectionAbout';
import SectionProjects from './components/SectionProjects';
import SectionExperiences from './components/SectionExperiences';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Introduction />
      <SectionAbout />
      <SectionProjects />
      <SectionExperiences />
      <Header />
    </div>
  );
}

export default App;
