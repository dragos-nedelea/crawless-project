import React from 'react';
import './App.css';
import NavbarExample from './components/navbar/navbar';
import HeroHome from './components/banner/HeroHome';
import VideoExample from './components/video/VideoExample';
import RoadCards from './components/RoadCards/RoadCards';
import IdeFreatures from './components/IdeFeatures/IdeFreatures';
import ExampleCarousel from './components/ExampleCarousel1/ExampleCarousel';
import FeaturesCont from './components/FeaturesCont/FeaturesCont';
import DownloadComponent from './components/DownloadComponent/DownloadComponent';
import EdgeComponent from './components/EdgeComponent/EdgeComponent';
import ExampleCarousel2 from './components/ExampleCarousel2/ExampleCarousel';
import StoreComponent from './components/StoreComponent/StoreComponent';
import ExampleCarousel3 from './components/ExampleCarousel3/ExampleCarousel3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap//dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavbarExample />
        </header>
        <main>
          <HeroHome />
          <VideoExample />
          <RoadCards />
          <IdeFreatures />
          <ExampleCarousel />
          <FeaturesCont />
          <DownloadComponent />
          <EdgeComponent />
          <ExampleCarousel2 />
          <StoreComponent />
          <ExampleCarousel3 />
        </main>
        <footer>
          {/* Your footer content goes here */}
        </footer>
      </Router>
    </div>
  );
}

export default App;
