import Introduction from './components/Introduction';
import './App.css';
import './MobileStyle.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import SectionAbout from './components/SectionAbout';
import SectionProjects from './components/SectionProjects';
import SectionExperiences from './components/SectionExperiences';
import SectionContact from './components/SectionContact';
import { BrowserView, MobileView, TabletView } from 'react-device-detect';
import React from 'react';

function App() {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  function appView() {
    return (
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
      </div >);
  }

  function loadingView() {
    return (
      <div className="App">
        <div className='title-container'>
          <h1 className='mobile-title-logo'>🚧</h1>
          <h1 className='mobile-title'>Responsive version of the website in construction...</h1>
        </div>
      </div>
    );
  }


  return (
    <div>
      <BrowserView>
        {dimensions.width >= 1100 ? appView() : loadingView()}
      </BrowserView>
      <MobileView>
        {loadingView()}
      </MobileView>
      <TabletView>
        {loadingView()}
      </TabletView>
    </div>
  );
}

export default App;
