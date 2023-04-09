import Introduction from './components/Introduction';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import SectionAbout from './components/SectionAbout';
import SectionProjects from './components/SectionProjects';
import SectionExperiences from './components/SectionExperiences';
import { BrowserView, MobileView, TabletView } from 'react-device-detect';

function App() {
  return (
    <div>
      <BrowserView>
        <div className="App">
          <Sidebar />
          <Introduction />
          <SectionAbout />
          <SectionProjects />
          <SectionExperiences />
          <Header />
        </div>
      </BrowserView>
      <MobileView>
        <div className="App"> <h1>App not available on mobile and tablet.</h1></div>
      </MobileView>
      <TabletView>
        <div className="App"> <h1>App not available on mobile and tablet.</h1></div>
      </TabletView>
    </div>
  );
}

export default App;
