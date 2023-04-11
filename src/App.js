import Introduction from './components/Introduction';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import SectionAbout from './components/SectionAbout';
import SectionProjects from './components/SectionProjects';
import SectionExperiences from './components/SectionExperiences';
import SectionContact from './components/SectionContact';
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
          <SectionContact />
          <Header />
          <footer className="footer">
            <div className="footer--content">
              <h4 className="footer--text">
                Built by Jean Abou Moussa, 2023
              </h4>
            </div>
          </footer>
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
