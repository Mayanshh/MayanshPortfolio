import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import './style.css';
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';

function App() {
  const [loading, setLoading] = useState(true); // Controls visibility of the app
  const [progress, setProgress] = useState(0); // Tracks loader progress

  // Preload all assets (images, videos, models, etc.)
  const preloadAssets = async () => {
    const resources = [
      '/path/to/image1.jpg',
      '/path/to/video.mp4',
      '/path/to/image2.png',
      // Add more assets as needed
    ];

    await Promise.all(
      resources.map((resource) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = resource;
          img.onload = resolve;
          img.onerror = resolve;
        })
      )
    );
  };

  useEffect(() => {
    // Start the loader animation
    const loaderInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(loaderInterval);
          return prev;
        }
      });
    }, 30); // Adjust speed of progress animation here

    // Preload resources
    preloadAssets().then(() => {
      // Ensure the loader runs to 100% before hiding
      const waitForLoader = setInterval(() => {
        if (progress === 100) {
          clearInterval(waitForLoader);
          setLoading(false);
        }
      }, 100);
    });

    return () => clearInterval(loaderInterval);
  }, [progress]); // Progress is included to synchronize with the animation

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader-text">{progress.toString().padStart(2, '0')}%</div>
        </div>
      ) : (
        <>
          <Canvas flat camera={{ fov: 40 }}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableRotate={true}
              dampingFactor={0.1}
              enableDamping={true}
              target={[0, 0, 0]}
            />
            <ambientLight />
            <Cyl />
            <EffectComposer>
              <Bloom
                intensity={12.5}
                luminanceThreshold={0.1}
                luminanceSmoothing={0.9}
                mipmapBlur
              />
            </EffectComposer>
          </Canvas>
          <div id="pages">
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
          </div>
        </>
      )}
    </>
  );
}

export default App;
