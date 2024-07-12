// import React, { useEffect, useRef } from 'react';
// import Stats from './lib/stats'; // Assuming stats.js is in the local lib folder

// const ParticleComponent: React.FC = () => {
//   const particlesRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<Stats | null>(null);

//   useEffect(() => {
//     // Initialize stats.js for performance monitoring
//     statsRef.current = new Stats();
//     // Append statsRef.current.dom to document.body if it exists
//     if (statsRef.current.dom && document.body) {
//       document.body.appendChild(statsRef.current.dom);
//     }

//     // Cleanup function for stats.js
//     return () => {
//       // Remove statsRef.current.dom from document.body if it exists
//       if (statsRef.current && statsRef.current.dom && statsRef.current.dom.parentNode) {
//         statsRef.current.dom.parentNode.removeChild(statsRef.current.dom);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     // Dynamically import particles.js when the component mounts
//     import('particles.js').then((module) => {
//       const Particles = module.default;

//       // Check if Particles is a function and initialize particles.js
//       if (Particles && typeof Particles === 'function') {
//         Particles({
//           selector: '#particles-js',
//           color: '#ffffff',
//           connectParticles: true,
//           sizeVariations: 3,
//           maxParticles: 150,
//           responsive: [{
//             breakpoint: 800,
//             options: {
//               maxParticles: 100,
//               color: '#00C9B1',
//               connectParticles: false
//             }
//           }]
//         });
//       } else {
//         console.error('Failed to initialize particles.js. Particles is not a function.');
//       }

//       // Animation loop with stats.js
//       const animate = () => {
//         if (statsRef.current) {
//           statsRef.current.begin();
//         }

//         // Update particles count if needed
//         if (particlesRef.current && Particles) {
//           // Example: Update particle count based on particles.js state
//           // Replace with your specific logic to update particle count
//           // Example assumes there's a direct way to access particle count
//           const particleCount = document.querySelectorAll('.particles-js-canvas-el').length;
//           document.querySelector('.js-count-particles')!.innerHTML = particleCount.toString();
//         }

//         if (statsRef.current) {
//           statsRef.current.end();
//         }

//         requestAnimationFrame(animate);
//       };

//       requestAnimationFrame(animate);
//     }).catch((error) => {
//       console.error('Failed to import particles.js:', error);
//     });

//   }, []);

//   return (
//     <div>
//       {/* Display particle count */}
//       <div className="count-particles">
//         <span className="js-count-particles">--</span> particles
//       </div>

//       {/* particles.js container */}
//       <div id="particles-js" ref={particlesRef}></div>
//     </div>
//   );
// };

// export default ParticleComponent;
