import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div className="App">
      <Parallax pages={2} className="animation">
        <ParallaxLayer offset={0} speed={0.35}>
          <div className='layer plx' id="h1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className='layer plx' id="h2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className='layer plx' id="h3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className='layer plx' id="h4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className='layer plx' id="h5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className='layer plx' id="leaf"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div className='layer plx' id="plant"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className='layer plx' id="tree"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <section>
            <div className='textclass'>
              Hi there this is parallax website
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
