// import React, { useEffect } from "react";
// import * as THREE from "three";
// import vertexShader from "./shader.vert"; // Import the vertex shader file
// import fragmentShader from "./fragmentShader.frag"; // Import the fragment shader file

// export default function InitialPage() {
//   useEffect(() => {
//     const preload = () => {
//       let manager = new THREE.LoadingManager();
//       manager.onLoad = function () {
//         const environment = new Environment(typo, particle);
//       };

//       var typo = null;
//       const loader = new THREE.FontLoader(manager);
//       const font = loader.load(
//         "https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json",
//         function (font) {
//           typo = font;
//         }
//       );
//       const particle = new THREE.TextureLoader(manager).load(
//         "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png"
//       );
//     };

//     if (
//       document.readyState === "complete" ||
//       (document.readyState !== "loading" && !document.documentElement.doScroll)
//     )
//       preload();
//     else document.addEventListener("DOMContentLoaded", preload);
//   }, []);

//   class Environment {
//     constructor(font, particle) {
//       this.font = font;
//       this.particle = particle;
//       this.container = document.querySelector("#magic");
//       this.scene = new THREE.Scene();
//       this.createCamera();
//       this.createRenderer();
//       this.setup();
//       this.bindEvents();
//     }

//     bindEvents() {
//       window.addEventListener("resize", this.onWindowResize.bind(this));
//     }

//     setup() {
//       this.createParticles = new CreateParticles(
//         this.scene,
//         this.font,
//         this.particle,
//         this.camera,
//         this.renderer
//       );
//     }

//     render() {
//       this.createParticles.render();
//       this.renderer.render(this.scene, this.camera);
//     }

//     createCamera() {
//       this.camera = new THREE.PerspectiveCamera(
//         65,
//         this.container.clientWidth / this.container.clientHeight,
//         1,
//         10000
//       );
//       this.camera.position.set(0, 0, 100);
//     }

//     createRenderer() {
//       this.renderer = new THREE.WebGLRenderer();
//       this.renderer.setSize(
//         this.container.clientWidth,
//         this.container.clientHeight
//       );

//       this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//       this.renderer.outputEncoding = THREE.sRGBEncoding;
//       this.container.appendChild(this.renderer.domElement);

//       this.renderer.setAnimationLoop(() => {
//         this.render();
//       });
//     }

//     onWindowResize() {
//       this.camera.aspect =
//         this.container.clientWidth / this.container.clientHeight;
//       this.camera.updateProjectionMatrix();
//       this.renderer.setSize(
//         this.container.clientWidth,
//         this.container.clientHeight
//       );
//     }
//   }

//   class CreateParticles {
//     constructor(scene, font, particleImg, camera, renderer) {
//       this.scene = scene;
//       this.font = font;
//       this.particleImg = particleImg;
//       this.camera = camera;
//       this.renderer = renderer;

//       // Rest of the code...
//     }

//     // Rest of the code...
//   }

//   return (
//     <div className="initialPage">
//       <div id="magic"></div>
//       <div className="playground">
//         <div className="bottomPosition">
//           <a href="http://sanprieto.es/" target="_blank">
//             <svg
//               className="logo"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 278.8 278.8"
//             >
//               {/* SVG paths */}
//               <circle fill="#000205" cx="139.4" cy="139.4" r="139.4" />
//               <g
//                 fill="none"
//                 stroke="#FFF"
//                 strokeWidth="6.062"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeMiterlimit="10"
//               >
//                 <path d="M214 183.4l-74.6 43.1-75.5-43.6V95.8l75.5-43.5 75.4 43.5v59.8l-11.3 6.5z" />
//                 <path d="M139.4 226.5l-18.8-38.2 18.8 10.8 75.4-43.5M63.9 95.8l75.3 43.6 75.6-43.6M139.2 139.4v59.7" />
//               </g>
//             </svg>
//           </a>
//           <h1 className="special">LEARN MORE ABOUT ME HERE</h1>
//         </div>
//       </div>

//       {/* Vertex Shader */}
//       <script
//         type="x-shader/x-vertex"
//         id="vertexshader"
//         dangerouslySetInnerHTML={{ __html: vertexShader }}
//       />

//       {/* Fragment Shader */}
//       <script
//         type="x-shader/x-fragment"
//         id="fragmentshader"
//         dangerouslySetInnerHTML={{ __html: fragmentShader }}
//       />
//     </div>
//   );
// }
import React from "react";

export const InitialPage = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
};
