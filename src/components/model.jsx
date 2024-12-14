import React, { useRef, useEffect } from 'react';
import '@google/model-viewer';
import '../style.css';

const SimpleModelViewer = () => {
  const modelRef = useRef(null);

  // Optional: Example of how you can manipulate the model via the ref.
  useEffect(() => {
    if (modelRef.current) {
      // You can access the model-viewer properties or methods here.
      modelRef.current.cameraOrbit = '0deg 75deg 10m'; // Example of changing camera orbit
    }
  }, []);

  return (
    <model-viewer
      id="model"
      ref={modelRef}
      src="../assets/jellyfish.glb"
      alt="A rotating jellyfish model"
      auto-rotate
      autoplay
      animation-loop
    ></model-viewer>
  );
};

export default SimpleModelViewer;