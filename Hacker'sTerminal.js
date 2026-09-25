// // Hacker's Terminal

// const randomDelay = () => {
//    return new Promise((resolve) => {
//      let timeout = 1 + 2 * Math.random();
//      setTimeout(() => {
//        resolve();
//      }, timeout * 1000);
//    });
//  };
 
//  alert("System Hacked!!!!!!!!!!!!!!!!");
 
//  const terminal = document.createElement("div");
//  terminal.style.color = "lime";
//  terminal.style.backgroundColor = "black";
//  terminal.style.padding = "10px";
//  terminal.style.height = "auto";
//  terminal.style.width = "auto";
//  terminal.style.overflow = "auto";
//  document.body.appendChild(terminal);
 
//  function addMessage(message) {
//    const p = document.createElement("p");
//    const spanmessage = document.createElement("span");
//    const spandots = document.createElement("span");
 
//    spanmessage.textContent = message;
//    spandots.textContent = "...";
 
//    p.appendChild(spanmessage);
//    p.appendChild(spandots);
//    terminal.appendChild(p);
 
//    const interval = setInterval(() => {
//      if (spandots.textContent === "...") {
//        spandots.textContent = "";
//      } else {
//        spandots.textContent = spandots.textContent + ".";
//      }
//    }, 700);
 
//    setTimeout(() => clearInterval(interval), 15000);
//  }
 
//  setTimeout(() => {
//    document.body.style.backgroundColor = "green";
//  }, 0);
 
//  randomDelay()
//    .then(() => {
//      addMessage("Initializing system scan...");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("------------------------------------------------");
//      addMessage("Target Device: CONNECTED");
//      addMessage("Fetching IP Configuration...");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("------------------------------------------------");
//      addMessage("IP Address Detected: 192.168.1.103");
//      addMessage("Subnet Mask: 255.255.255.0");
//      addMessage("Default Gateway: 192.168.1.1");
//      addMessage("MAC Address: 00:1A:2B:3C:4D:5E");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("------------------------------------------------");
//      addMessage("Starting Data Retrieval...");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Scanning Active Directories...");
//      addMessage("/System/Root/");
//      addMessage("/System/Apps/");
//      addMessage("/User/Documents/");
//      addMessage("/User/Downloads/");
//      addMessage("/User/Desktop/");
//      addMessage("/Network/Cache/");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Extracting Sensitive Data...");
//      addMessage("-> Found encrypted file: **userdata.enc**");
//      addMessage("-> Found config file: **sysconfig.ini**");
//      addMessage("-> Found password dump: **passdump.txt**");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("------------------------------------------------");
//      addMessage("Initiating Device Connection...");
//      addMessage("PING 192.168.1.103: Success (32ms)");
//      addMessage("Establishing secure connection... SUCCESS");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Fetching Active Device Logs:");
//      addMessage("[00:01] Device activity detected");
//      addMessage("[00:02] Unauthorized access attempt logged");
//      addMessage("[00:05] Firewall bypass initiated...");
//      addMessage("[00:06] Access granted.");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("------------------------------------------------");
//      addMessage("Deploying Scripts...");
//      addMessage("- Extracting browser cookies... [SUCCESS]");
//      addMessage("- Fetching Wi-Fi credentials... [SUCCESS]");
//      addMessage("- Dumping local storage... [SUCCESS]");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("------------------------------------------------");
//      addMessage("[WARNING] Security trace detected.");
//      addMessage("[INFO] Activating cloaking mode... [SUCCESS]");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Disabling system firewalls...");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Accessing device camera...");
//      addMessage("[INFO] Camera feed detected. Streaming...");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Searching for financial records...");
//      addMessage("-> Found file: **bankdetails.csv**");
//      addMessage("-> Found file: **creditcard-info.txt**");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Searching for social media accounts...");
//      addMessage("-> Facebook: Connected");
//      addMessage("-> Instagram: Connected");
//      addMessage("-> Twitter: Connected");
//      addMessage("Fetching login tokens...");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Encrypting user data for transmission...");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("[INFO] Uploading sensitive files to the server...");
//      addMessage("-> Uploading bankdetails.csv [COMPLETE]");
//      addMessage("-> Uploading creditcard-info.txt [COMPLETE]");
//      addMessage("-> Uploading password dump [COMPLETE]");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("------------------------------------------------");
//      addMessage("Finalizing...");
//      addMessage("[INFO] Removing activity logs...");
//      addMessage("[INFO] Hiding malware traces...");
//      return randomDelay();
//    })
//    .then(() => {
//      addMessage("Hacking Complete.");
//      addMessage("------------------------------------------------");
//      addMessage("Goodbye.");
//    });


// new advanced version for hacker's terminal  version 2
/* ==========================================================
   HACKER'S TERMINAL
   Visual simulation only.
   No real system, network, file, camera, or account access.
========================================================== */

// (() => {
//   "use strict";

//   /* ========================================================
//      INJECT CSS
//   ======================================================== */

//   const style = document.createElement("style");

//   style.textContent = `
//     * {
//       box-sizing: border-box;
//     }

//     html,
//     body {
//       margin: 0;
//       width: 100%;
//       height: 100%;
//       overflow: hidden;
//       background: #020303;
//       color: #b8ffb8;
//       font-family: "Courier New", Consolas, monospace;
//     }

//     body {
//       position: relative;
//     }

//     /* =========================
//        MAIN TERMINAL
//     ========================= */

//     #terminal {
//       position: fixed;
//       inset: 0;
//       z-index: 5;
//       padding: 24px;
//       overflow: hidden;

//       background:
//         radial-gradient(
//           ellipse at center,
//           rgba(0, 255, 100, 0.035),
//           transparent 65%
//         ),
//         #020303;

//       text-shadow:
//         0 0 5px rgba(0, 255, 80, 0.55),
//         0 0 12px rgba(0, 255, 80, 0.18);
//     }

//     #terminal::before {
//       content: "";
//       position: absolute;
//       inset: 0;
//       pointer-events: none;
//       z-index: 20;

//       background:
//         repeating-linear-gradient(
//           to bottom,
//           rgba(255,255,255,0.025) 0px,
//           rgba(255,255,255,0.025) 1px,
//           transparent 1px,
//           transparent 4px
//         );

//       mix-blend-mode: screen;
//       opacity: 0.45;
//     }

//     #terminal::after {
//       content: "";
//       position: absolute;
//       inset: 0;
//       pointer-events: none;
//       z-index: 21;

//       box-shadow:
//         inset 0 0 120px rgba(0,0,0,0.95),
//         inset 0 0 30px rgba(0,255,100,0.05);
//     }

//     /* =========================
//        MATRIX BACKGROUND
//     ========================= */

//     #matrix {
//       position: fixed;
//       inset: 0;
//       z-index: 1;
//       opacity: 0.10;
//       pointer-events: none;
//     }

//     /* =========================
//        TOP BAR
//     ========================= */

//     #header {
//       position: relative;
//       z-index: 30;

//       display: flex;
//       justify-content: space-between;
//       align-items: center;

//       height: 42px;
//       padding: 0 12px;

//       border-bottom: 1px solid rgba(0,255,100,0.25);

//       color: #75ff91;
//       font-size: 12px;
//       letter-spacing: 1px;
//     }

//     .status {
//       display: flex;
//       gap: 18px;
//     }

//     .status span {
//       opacity: 0.7;
//     }

//     .live {
//       color: #ff4141 !important;
//       opacity: 1 !important;
//       animation: pulse 0.9s infinite alternate;
//     }

//     /* =========================
//        OUTPUT
//     ========================= */

//     #output {
//       position: relative;
//       z-index: 30;

//       height: calc(100vh - 42px);
//       padding: 18px 10px 80px;

//       overflow: hidden;

//       font-size: clamp(12px, 1.1vw, 16px);
//       line-height: 1.55;

//       white-space: pre-wrap;
//     }

//     .line {
//       min-height: 20px;
//       opacity: 0;
//       transform: translateY(3px);

//       animation: lineIn 0.08s forwards;
//     }

//     .dim {
//       color: #5d9365;
//     }

//     .cyan {
//       color: #6fffff;
//       text-shadow: 0 0 8px rgba(0,255,255,0.4);
//     }

//     .yellow {
//       color: #ffe76a;
//     }

//     .red {
//       color: #ff4141;

//       text-shadow:
//         0 0 8px rgba(255,0,0,0.8),
//         0 0 20px rgba(255,0,0,0.3);
//     }

//     .white {
//       color: #f0fff0;
//     }

//     .success {
//       color: #8aff8a;
//     }

//     /* =========================
//        CURSOR
//     ========================= */

//     #cursor {
//       display: inline-block;
//       width: 9px;
//       height: 16px;
//       margin-left: 4px;

//       background: #8aff8a;

//       animation: cursorBlink 0.7s infinite;
//     }

//     /* =========================
//        GLITCH
//     ========================= */

//     body.glitch #terminal {
//       animation:
//         screenShake 0.13s steps(2) infinite,
//         chromatic 0.13s steps(2) infinite;
//     }

//     body.glitch #output {
//       filter:
//         contrast(1.35)
//         brightness(1.15)
//         saturate(1.3);
//     }

//     body.glitch::before,
//     body.glitch::after {
//       content: "";
//       position: fixed;
//       z-index: 100;
//       pointer-events: none;
//     }

//     body.glitch::before {
//       inset: 0;

//       background:
//         repeating-linear-gradient(
//           to bottom,
//           transparent 0,
//           transparent 5px,
//           rgba(255,0,0,0.12) 6px,
//           transparent 8px
//         );

//       animation: glitchLines 0.12s steps(2) infinite;
//     }

//     body.glitch::after {
//       width: 100%;
//       height: 3px;
//       left: 0;
//       top: 35%;

//       background: rgba(255,255,255,0.85);

//       box-shadow:
//         0 120px rgba(255,0,0,0.4),
//         0 -180px rgba(0,255,255,0.3);

//       animation: tear 0.12s steps(2) infinite;
//     }

//     /* =========================
//        FULLSCREEN WARNING
//     ========================= */

//     #alert {
//       position: fixed;
//       inset: 0;
//       z-index: 200;

//       display: flex;
//       align-items: center;
//       justify-content: center;

//       background:
//         radial-gradient(
//           circle,
//           rgba(255,0,0,0.18),
//           rgba(0,0,0,0.97) 65%
//         );

//       opacity: 0;
//       visibility: hidden;

//       transition: opacity 0.12s;
//     }

//     #alert.show {
//       opacity: 1;
//       visibility: visible;
//     }

//     .alert-box {
//       width: min(850px, 90vw);
//       padding: 35px;

//       border: 1px solid #ff3030;

//       background: rgba(8,0,0,0.92);

//       box-shadow:
//         0 0 40px rgba(255,0,0,0.28),
//         inset 0 0 30px rgba(255,0,0,0.08);

//       text-align: center;
//     }

//     .alert-title {
//       color: #ff3030;
//       font-size: clamp(30px, 5vw, 64px);
//       font-weight: bold;
//       letter-spacing: 7px;

//       animation: dangerPulse 0.35s infinite alternate;
//     }

//     .alert-sub {
//       margin-top: 18px;
//       color: #ff9b9b;
//       font-size: 14px;
//       letter-spacing: 2px;
//     }

//     .alert-code {
//       margin-top: 25px;
//       color: #ff4444;
//       font-size: 12px;
//       line-height: 1.8;
//     }

//     /* =========================
//        FINAL SCREEN
//     ========================= */

//     #final {
//       position: fixed;
//       inset: 0;
//       z-index: 250;

//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-direction: column;

//       background: #000;

//       opacity: 0;
//       visibility: hidden;

//       transition: opacity 0.4s;
//     }

//     #final.show {
//       opacity: 1;
//       visibility: visible;
//     }

//     #final h1 {
//       margin: 0;

//       color: #ff3131;

//       font-size: clamp(40px, 8vw, 100px);
//       letter-spacing: 8px;
//       text-align: center;

//       text-shadow:
//         0 0 10px red,
//         0 0 35px red;

//       animation:
//         dangerPulse 0.35s infinite alternate,
//         finalGlitch 0.5s infinite steps(2);
//     }

//     #final p {
//       color: #777;
//       letter-spacing: 3px;
//       margin-top: 25px;
//       text-align: center;
//     }

//     #reveal {
//       margin-top: 30px;

//       padding: 12px 22px;

//       border: 1px solid #444;
//       background: transparent;

//       color: #777;

//       font-family: inherit;
//       cursor: pointer;

//       transition:
//         color 0.2s,
//         border-color 0.2s,
//         box-shadow 0.2s;
//     }

//     #reveal:hover {
//       color: white;
//       border-color: #777;
//       box-shadow: 0 0 15px rgba(255,255,255,0.08);
//     }

//     /* =========================
//        START SCREEN
//     ========================= */

//     #start {
//       position: fixed;
//       z-index: 300;
//       inset: 0;

//       display: flex;
//       align-items: center;
//       justify-content: center;

//       background:
//         radial-gradient(
//           circle at center,
//           rgba(0,255,80,0.035),
//           transparent 50%
//         ),
//         #020303;
//     }

//     #start::after {
//       content: "";
//       position: absolute;
//       inset: 0;
//       pointer-events: none;

//       background:
//         repeating-linear-gradient(
//           to bottom,
//           rgba(255,255,255,0.018) 0px,
//           rgba(255,255,255,0.018) 1px,
//           transparent 1px,
//           transparent 4px
//         );
//     }

//     #start button {
//       position: relative;
//       z-index: 2;

//       padding: 17px 32px;

//       border: 1px solid #43ff70;
//       background: rgba(0,30,10,0.6);

//       color: #75ff91;

//       font-family: inherit;
//       font-size: 14px;
//       letter-spacing: 3px;

//       cursor: pointer;

//       box-shadow:
//         0 0 20px rgba(0,255,80,0.12);

//       transition:
//         background 0.2s,
//         box-shadow 0.2s,
//         transform 0.2s;
//     }

//     #start button:hover {
//       background: rgba(0,255,70,0.08);

//       box-shadow:
//         0 0 35px rgba(0,255,80,0.25);

//       transform: translateY(-1px);
//     }

//     #start button:active {
//       transform: scale(0.98);
//     }

//     /* =========================
//        ANIMATIONS
//     ========================= */

//     @keyframes lineIn {
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     @keyframes cursorBlink {
//       0%, 45% {
//         opacity: 1;
//       }

//       46%, 100% {
//         opacity: 0;
//       }
//     }

//     @keyframes pulse {
//       from {
//         opacity: 0.35;
//       }

//       to {
//         opacity: 1;
//       }
//     }

//     @keyframes dangerPulse {
//       from {
//         opacity: 0.55;
//         transform: scale(0.995);
//       }

//       to {
//         opacity: 1;
//         transform: scale(1.01);
//       }
//     }

//     @keyframes screenShake {
//       0% {
//         transform: translate(0);
//       }

//       25% {
//         transform: translate(-4px, 2px);
//       }

//       50% {
//         transform: translate(4px, -2px);
//       }

//       75% {
//         transform: translate(-2px, -3px);
//       }

//       100% {
//         transform: translate(3px, 2px);
//       }
//     }

//     @keyframes chromatic {
//       0% {
//         text-shadow:
//           -3px 0 red,
//           3px 0 cyan;
//       }

//       100% {
//         text-shadow:
//           3px 0 red,
//           -3px 0 cyan;
//       }
//     }

//     @keyframes glitchLines {
//       0% {
//         transform: translateY(0);
//         opacity: 0.2;
//       }

//       50% {
//         transform: translateY(-10px);
//         opacity: 0.7;
//       }

//       100% {
//         transform: translateY(12px);
//         opacity: 0.3;
//       }
//     }

//     @keyframes tear {
//       0% {
//         transform: translateY(-30px);
//       }

//       50% {
//         transform: translateY(40px);
//       }

//       100% {
//         transform: translateY(-10px);
//       }
//     }

//     @keyframes finalGlitch {
//       0% {
//         transform: translate(0);
//       }

//       20% {
//         transform: translate(-3px, 1px);
//       }

//       40% {
//         transform: translate(3px, -1px);
//       }

//       60% {
//         transform: translate(-1px, 2px);
//       }

//       80% {
//         transform: translate(2px, 0);
//       }

//       100% {
//         transform: translate(0);
//       }
//     }

//     /* =========================
//        ACCESSIBILITY
//     ========================= */

//     @media (prefers-reduced-motion: reduce) {
//       *,
//       *::before,
//       *::after {
//         animation-duration: 0.001ms !important;
//         animation-iteration-count: 1 !important;
//       }
//     }

//     /* =========================
//        MOBILE
//     ========================= */

//     @media (max-width: 600px) {
//       #terminal {
//         padding: 12px;
//       }

//       #output {
//         font-size: 11px;
//         line-height: 1.45;
//       }

//       #header {
//         font-size: 9px;
//       }

//       .status {
//         gap: 8px;
//       }

//       .alert-box {
//         padding: 25px 18px;
//       }

//       .alert-title {
//         letter-spacing: 3px;
//       }

//       #final h1 {
//         letter-spacing: 4px;
//       }

//       #start button {
//         padding: 15px 20px;
//         font-size: 12px;
//       }
//     }
//   `;

//   document.head.appendChild(style);


//   /* ========================================================
//      CREATE PAGE STRUCTURE
//   ======================================================== */

//   document.body.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <!-- START -->
//       <div id="start">
//         <button id="startButton">
//           INITIALIZE SECURE CONSOLE
//         </button>
//       </div>

//       <!-- MATRIX -->
//       <canvas id="matrix"></canvas>

//       <!-- TERMINAL -->
//       <div id="terminal">

//         <div id="header">
//           <div>
//             NODE://LOCAL-CONSOLE
//           </div>

//           <div class="status">
//             <span>LINK: ACTIVE</span>
//             <span class="live">● LIVE</span>
//           </div>
//         </div>

//         <div id="output"></div>

//       </div>

//       <!-- DANGER ALERT -->
//       <div id="alert">

//         <div class="alert-box">

//           <div class="alert-title">
//             SYSTEM COMPROMISED
//           </div>

//           <div class="alert-sub">
//             UNAUTHORIZED SESSION DETECTED
//           </div>

//           <div class="alert-code">
//             TRACE ID: 7F-92A-CC19<br>
//             SESSION STATE: CRITICAL
//           </div>

//         </div>

//       </div>

//       <!-- FINAL -->
//       <div id="final">

//         <h1>ACCESS COMPLETE</h1>

//         <p>SIMULATION TERMINATED</p>

//         <button id="reveal">
//           reveal simulation
//         </button>

//       </div>
//     `
//   );


//   /* ========================================================
//      ELEMENT REFERENCES
//   ======================================================== */

//   const output = document.getElementById("output");
//   const start = document.getElementById("start");
//   const startButton = document.getElementById("startButton");
//   const alertBox = document.getElementById("alert");
//   const finalScreen = document.getElementById("final");
//   const revealButton = document.getElementById("reveal");

//   let running = false;
//   let lineCount = 0;


//   /* ========================================================
//      FULLSCREEN
//   ======================================================== */

//   async function enterFullscreen() {
//     try {
//       if (!document.fullscreenElement) {
//         await document.documentElement.requestFullscreen();
//       }
//     } catch (error) {
//       // Fullscreen can be blocked by browser settings.
//     }
//   }


//   /* ========================================================
//      RANDOM DELAY
//   ======================================================== */

//   function delay(min = 250, max = 900) {
//     return new Promise(resolve => {
//       const time =
//         Math.floor(Math.random() * (max - min + 1)) + min;

//       setTimeout(resolve, time);
//     });
//   }


//   /* ========================================================
//      TERMINAL OUTPUT
//   ======================================================== */

//   function addLine(text, type = "") {

//     const line = document.createElement("div");

//     line.className = `line ${type}`;

//     line.textContent = text;

//     output.appendChild(line);

//     lineCount++;

//     if (lineCount > 55 && output.firstElementChild) {
//       output.removeChild(output.firstElementChild);
//     }
//   }


//   /* ========================================================
//      TYPEWRITER
//   ======================================================== */

//   async function typeLine(text, type = "", speed = 10) {

//     const line = document.createElement("div");

//     line.className = `line ${type}`;

//     output.appendChild(line);

//     for (let i = 0; i < text.length; i++) {

//       line.textContent += text[i];

//       await new Promise(resolve => {
//         setTimeout(
//           resolve,
//           speed + Math.random() * speed
//         );
//       });
//     }

//     lineCount++;

//     if (lineCount > 55 && output.firstElementChild) {
//       output.removeChild(output.firstElementChild);
//     }
//   }


//   /* ========================================================
//      FAST BURST
//   ======================================================== */

//   function burst(lines) {

//     lines.forEach(item => {

//       if (typeof item === "string") {
//         addLine(item);
//       } else {
//         addLine(item.text, item.type);
//       }

//     });
//   }


//   /* ========================================================
//      GLITCH EFFECT
//   ======================================================== */

//   async function glitch(duration = 500) {

//     document.body.classList.add("glitch");

//     await delay(duration, duration + 150);

//     document.body.classList.remove("glitch");
//   }


//   /* ========================================================
//      DRAMATIC FREEZE
//   ======================================================== */

//   async function freezeScreen() {

//     addLine("");

//     addLine(
//       "████████████████████████████████████████████",
//       "red"
//     );

//     addLine(
//       "!!! CRITICAL STATE CHANGE !!!",
//       "red"
//     );

//     await delay(300, 500);

//     document.body.classList.add("glitch");

//     await delay(180, 260);

//     document.body.classList.remove("glitch");

//     await delay(500, 800);

//     addLine(
//       "[SYSTEM] Visual channel restored.",
//       "yellow"
//     );
//   }


//   /* ========================================================
//      MATRIX RAIN
//   ======================================================== */

//   const canvas = document.getElementById("matrix");
//   const ctx = canvas.getContext("2d");

//   let columns = [];
//   let drops = [];

//   function resizeMatrix() {

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const fontSize = 15;

//     columns = Math.floor(
//       canvas.width / fontSize
//     );

//     drops = Array(columns)
//       .fill(1)
//       .map(() => Math.random() * -50);
//   }


//   function matrixFrame() {

//     ctx.fillStyle = "rgba(0,0,0,0.075)";

//     ctx.fillRect(
//       0,
//       0,
//       canvas.width,
//       canvas.height
//     );

//     ctx.font = "15px monospace";

//     ctx.fillStyle = "#00ff55";

//     const chars =
//       "01ABCDEF0123456789<>[]{}\\/";

//     for (let i = 0; i < drops.length; i++) {

//       const char =
//         chars[
//           Math.floor(
//             Math.random() * chars.length
//           )
//         ];

//       const x = i * 15;
//       const y = drops[i] * 15;

//       ctx.fillText(char, x, y);

//       if (
//         y > canvas.height &&
//         Math.random() > 0.975
//       ) {
//         drops[i] = 0;
//       }

//       drops[i]++;
//     }

//     requestAnimationFrame(matrixFrame);
//   }


//   window.addEventListener(
//     "resize",
//     resizeMatrix
//   );

//   resizeMatrix();
//   matrixFrame();


//   /* ========================================================
//      MAIN SIMULATION
//   ======================================================== */

//   async function runSimulation() {

//     if (running) return;

//     running = true;

//     output.innerHTML = "";
//     lineCount = 0;


//     /* ========================
//        BOOT
//     ======================== */

//     await typeLine(
//       "[BOOT] Initializing secure console...",
//       "dim",
//       14
//     );

//     await delay(250, 600);

//     await typeLine(
//       "[BOOT] Loading visual environment...",
//       "dim",
//       12
//     );

//     await delay(300, 700);

//     burst([
//       {
//         text: "[OK] Runtime environment initialized.",
//         type: "success"
//       },
//       {
//         text: "[OK] Terminal channel established.",
//         type: "success"
//       },
//       {
//         text: "[OK] Session handshake complete.",
//         type: "success"
//       }
//     ]);

//     await delay(500, 1000);


//     /* ========================
//        SCANNING
//     ======================== */

//     await typeLine(
//       "------------------------------------------------------------",
//       "dim",
//       2
//     );

//     await typeLine(
//       "[SCAN] Enumerating virtual endpoints...",
//       "cyan",
//       8
//     );

//     await delay(250, 500);

//     burst([
//       "[SCAN] NODE-07 ............... RESPONSE 18ms",
//       "[SCAN] NODE-12 ............... RESPONSE 24ms",
//       "[SCAN] NODE-19 ............... RESPONSE 31ms",
//       "[SCAN] NODE-24 ............... RESPONSE 12ms",
//       "[SCAN] NODE-31 ............... RESPONSE 09ms"
//     ]);

//     await delay(400, 800);

//     await typeLine(
//       "[SCAN] Anomaly detected in session topology.",
//       "yellow",
//       8
//     );

//     await delay(350, 700);


//     /* ========================
//        SYSTEM MAP
//     ======================== */

//     await typeLine(
//       "[TRACE] Building system map...",
//       "cyan",
//       6
//     );

//     burst([
//       "[MAP] /SYSTEM/CORE",
//       "[MAP] /SYSTEM/CONFIG",
//       "[MAP] /USER/SESSION",
//       "[MAP] /CACHE/INDEX",
//       "[MAP] /RUNTIME/TEMP",
//       "[MAP] /SERVICES/LOCAL"
//     ]);

//     await delay(250, 500);


//     /* ========================
//        FIRST GLITCH
//     ======================== */

//     await glitch(350);

//     burst([
//       {
//         text: "!!! SIGNAL INSTABILITY !!!",
//         type: "red"
//       },
//       {
//         text: "[WARN] Visual channel desynchronized.",
//         type: "yellow"
//       },
//       {
//         text: "[WARN] Reconstructing terminal state...",
//         type: "yellow"
//       }
//     ]);

//     await delay(500, 900);


//     /* ========================
//        RECOVERY
//     ======================== */

//     await typeLine(
//       "[RECOVERY] Rebuilding session...",
//       "cyan",
//       7
//     );

//     await delay(500, 800);

//     burst([
//       "[RECOVERY] ███░░░░░░░ 27%",
//       "[RECOVERY] █████░░░░░ 51%",
//       "[RECOVERY] ███████░░░ 74%",
//       "[RECOVERY] ██████████ 100%"
//     ]);

//     await delay(400, 700);


//     /* ========================
//        CRITICAL WARNING
//     ======================== */

//     alertBox.classList.add("show");

//     document.body.classList.add("glitch");

//     await delay(850, 1100);

//     document.body.classList.remove("glitch");

//     alertBox.classList.remove("show");

//     await delay(250, 500);


//     /* ========================
//        CONTINUE
//     ======================== */

//     burst([
//       {
//         text: "[CRITICAL] Session boundary crossed.",
//         type: "red"
//       },
//       {
//         text: "[CRITICAL] Isolation layer unavailable.",
//         type: "red"
//       },
//       {
//         text: "[SYSTEM] Emergency containment initiated...",
//         type: "yellow"
//       }
//     ]);

//     await delay(700, 1000);


//     /* ========================
//        RAPID STREAM
//     ======================== */

//     const rapidLines = [
//       "[PROC] session.validate()",
//       "[PROC] integrity.check()",
//       "[PROC] channel.rebuild()",
//       "[PROC] environment.sync()",
//       "[PROC] cache.reindex()",
//       "[PROC] state.restore()",
//       "[PROC] runtime.verify()",
//       "[PROC] interface.lock()",
//       "[PROC] session.finalize()"
//     ];

//     for (const line of rapidLines) {

//       addLine(
//         line,
//         "white"
//       );

//       await delay(70, 180);
//     }


//     /* ========================
//        BIG GLITCH
//     ======================== */

//     await glitch(550);

//     await delay(300, 500);


//     /* ========================
//        FINAL STATUS
//     ======================== */

//     burst([
//       "",
//       "============================================================",
//       "[SYSTEM] SESSION COMPLETE",
//       "============================================================",
//       "",
//       "[STATUS] Connection ............... CLOSED",
//       "[STATUS] Runtime ................. TERMINATED",
//       "[STATUS] Visual channel .......... LOCKED",
//       "",
//       "FINALIZING SESSION..."
//     ]);

//     await delay(800, 1200);


//     /* ========================
//        FINAL SCREEN
//     ======================== */

//     finalScreen.classList.add("show");

//     document.body.classList.add("glitch");

//     await delay(900, 1200);

//     document.body.classList.remove("glitch");
//   }


//   /* ========================================================
//      START
//   ======================================================== */

//   startButton.addEventListener(
//     "click",
//     async () => {

//       if (running) return;

//       await enterFullscreen();

//       start.style.display = "none";

//       await delay(300, 600);

//       runSimulation();
//     }
//   );


//   /* ========================================================
//      REVEAL
//   ======================================================== */

//   revealButton.addEventListener(
//     "click",
//     () => {

//       finalScreen.classList.remove("show");

//       document.body.classList.remove("glitch");

//       output.innerHTML = "";

//       lineCount = 0;

//       addLine(
//         "SIMULATION ENDED — NOTHING WAS ACCESSED.",
//         "success"
//       );

//       addLine(
//         "This page is a visual prank only.",
//         "dim"
//       );

//       addLine(
//         "No files, accounts, camera, network or device data were accessed.",
//         "dim"
//       );
//     }
//   );


//   /* ========================================================
//      ESCAPE
//   ======================================================== */

//   document.addEventListener(
//     "keydown",
//     event => {

//       if (event.key === "Escape") {

//         document.body.classList.remove("glitch");

//         alertBox.classList.remove("show");

//         finalScreen.classList.remove("show");

//         if (document.fullscreenElement) {
//           document.exitFullscreen();
//         }
//       }
//     }
//   );


//   /* ========================================================
//      INITIAL STATE
//   ======================================================== */

//   console.log(
//     "%c Hacker's Terminal initialized — visual simulation only.",
//     "color:#00ff55;font-family:monospace;"
//   );

// })();


// new advanced version for hacker's terminal  version 3

/* ==========================================================
   HACKER'S TERMINAL — ADVANCED CINEMATIC SIMULATION
   VISUAL SIMULATION ONLY
========================================================== */

(() => {
  "use strict";

  /* ==========================================================
     STYLE INJECTION
  ========================================================== */

  const style = document.createElement("style");

  style.textContent = `
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #010202;
      color: #b8ffb8;
      font-family: "Courier New", Consolas, monospace;
    }

    body {
      position: relative;
      background:
        radial-gradient(
          circle at center,
          rgba(0,255,90,0.025),
          transparent 65%
        ),
        #010202;
    }

    /* ======================================================
       MATRIX
    ====================================================== */

    #matrix {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.09;
      pointer-events: none;
    }

    /* ======================================================
       TERMINAL
    ====================================================== */

    #terminal {
      position: fixed;
      inset: 0;
      z-index: 5;

      padding: 22px;

      overflow: hidden;

      background:
        radial-gradient(
          ellipse at center,
          rgba(0,255,100,0.04),
          transparent 62%
        ),
        #020303;

      text-shadow:
        0 0 5px rgba(0,255,80,0.55),
        0 0 12px rgba(0,255,80,0.15);

      transition:
        filter 0.1s,
        opacity 0.1s;
    }

    #terminal::before {
      content: "";

      position: absolute;
      inset: 0;

      pointer-events: none;

      z-index: 20;

      background:
        repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,0.025) 0px,
          rgba(255,255,255,0.025) 1px,
          transparent 1px,
          transparent 4px
        );

      mix-blend-mode: screen;

      opacity: 0.5;
    }

    #terminal::after {
      content: "";

      position: absolute;
      inset: 0;

      pointer-events: none;

      z-index: 21;

      box-shadow:
        inset 0 0 140px rgba(0,0,0,0.98),
        inset 0 0 40px rgba(0,255,100,0.06);
    }

    /* ======================================================
       HEADER
    ====================================================== */

    #header {
      position: relative;

      z-index: 30;

      height: 44px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0 12px;

      border-bottom:
        1px solid rgba(0,255,100,0.25);

      color: #75ff91;

      font-size: 12px;

      letter-spacing: 1px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .header-brand {
      color: #9dffb0;
    }

    .secure-badge {
      color: #5effff;

      border:
        1px solid rgba(0,255,255,0.3);

      padding: 3px 7px;

      font-size: 9px;

      letter-spacing: 1px;
    }

    .status {
      display: flex;

      align-items: center;

      gap: 18px;
    }

    .status span {
      opacity: 0.7;
    }

    .live {
      color: #ff4141 !important;
      opacity: 1 !important;

      animation:
        pulse 0.9s infinite alternate;
    }

    /* ======================================================
       OUTPUT
    ====================================================== */

    #output {
      position: relative;

      z-index: 30;

      height: calc(100vh - 44px);

      padding:
        17px
        10px
        100px;

      overflow: hidden;

      font-size:
        clamp(11px, 1.05vw, 15px);

      line-height: 1.55;

      white-space: pre-wrap;
    }

    .line {
      min-height: 20px;

      opacity: 0;

      transform:
        translateY(3px);

      animation:
        lineIn 0.08s forwards;
    }

    .dim {
      color: #56865f;
    }

    .cyan {
      color: #65ffff;

      text-shadow:
        0 0 8px rgba(0,255,255,0.4);
    }

    .yellow {
      color: #ffe76a;

      text-shadow:
        0 0 8px rgba(255,220,0,0.2);
    }

    .red {
      color: #ff4141;

      text-shadow:
        0 0 8px rgba(255,0,0,0.8),
        0 0 20px rgba(255,0,0,0.3);
    }

    .white {
      color: #f0fff0;
    }

    .success {
      color: #8aff8a;

      text-shadow:
        0 0 7px rgba(80,255,80,0.3);
    }

    .purple {
      color: #d58aff;

      text-shadow:
        0 0 8px rgba(180,80,255,0.35);
    }

    /* ======================================================
       PROGRESS
    ====================================================== */

    .progress-line {
      color: #78ff93;
    }

    .progress-bar {
      display: inline-block;

      width: 190px;

      margin-left: 8px;

      color: #68ff8a;
    }

    /* ======================================================
       CURSOR
    ====================================================== */

    #cursor {
      display: inline-block;

      width: 9px;
      height: 16px;

      margin-left: 4px;

      background: #8aff8a;

      animation:
        cursorBlink 0.7s infinite;
    }

    /* ======================================================
       GLITCH
    ====================================================== */

    body.glitch #terminal {
      animation:
        screenShake 0.12s steps(2) infinite,
        chromatic 0.12s steps(2) infinite;
    }

    body.glitch #output {
      filter:
        contrast(1.4)
        brightness(1.18)
        saturate(1.45);
    }

    body.glitch::before,
    body.glitch::after {
      content: "";

      position: fixed;

      z-index: 100;

      pointer-events: none;
    }

    body.glitch::before {
      inset: 0;

      background:
        repeating-linear-gradient(
          to bottom,
          transparent 0,
          transparent 5px,
          rgba(255,0,0,0.13) 6px,
          transparent 8px
        );

      animation:
        glitchLines 0.1s steps(2) infinite;
    }

    body.glitch::after {
      width: 100%;
      height: 3px;

      left: 0;
      top: 35%;

      background:
        rgba(255,255,255,0.85);

      box-shadow:
        0 120px rgba(255,0,0,0.4),
        0 -180px rgba(0,255,255,0.3);

      animation:
        tear 0.11s steps(2) infinite;
    }

    /* ======================================================
       FREEZE EFFECT
    ====================================================== */

    body.freeze #terminal {
      filter:
        contrast(1.25)
        brightness(0.75)
        saturate(0.75);

      transform: scale(1.002);
    }

    body.freeze #output {
      text-shadow:
        0 0 8px rgba(255,255,255,0.25);
    }

    #freezeOverlay {
      position: fixed;

      inset: 0;

      z-index: 180;

      pointer-events: none;

      opacity: 0;

      background:
        radial-gradient(
          circle at center,
          rgba(255,255,255,0.04),
          rgba(0,0,0,0.45)
        );

      transition:
        opacity 0.08s;
    }

    body.freeze #freezeOverlay {
      opacity: 1;
    }

    /* ======================================================
       SIGNAL LOSS
    ====================================================== */

    #signalLoss {
      position: fixed;

      inset: 0;

      z-index: 190;

      display: flex;

      align-items: center;
      justify-content: center;

      background:
        #000;

      opacity: 0;

      visibility: hidden;

      pointer-events: none;
    }

    #signalLoss.show {
      opacity: 1;
      visibility: visible;
    }

    .signal-text {
      color: #ff3434;

      font-size:
        clamp(18px, 4vw, 45px);

      letter-spacing:
        7px;

      text-align: center;

      animation:
        signalFlicker 0.08s infinite;
    }

    /* ======================================================
       WARNING
    ====================================================== */

    #alert {
      position: fixed;

      inset: 0;

      z-index: 200;

      display: flex;

      align-items: center;
      justify-content: center;

      background:
        radial-gradient(
          circle,
          rgba(255,0,0,0.19),
          rgba(0,0,0,0.98) 65%
        );

      opacity: 0;

      visibility: hidden;

      transition:
        opacity 0.1s;
    }

    #alert.show {
      opacity: 1;
      visibility: visible;
    }

    .alert-box {
      width:
        min(880px, 90vw);

      padding:
        38px;

      border:
        1px solid #ff3030;

      background:
        rgba(8,0,0,0.94);

      box-shadow:
        0 0 45px rgba(255,0,0,0.32),
        inset 0 0 35px rgba(255,0,0,0.08);

      text-align: center;

      animation:
        warningBox 0.15s steps(2) infinite;
    }

    .alert-title {
      color: #ff3030;

      font-size:
        clamp(30px, 5vw, 66px);

      font-weight: bold;

      letter-spacing: 7px;

      animation:
        dangerPulse 0.35s infinite alternate;
    }

    .alert-sub {
      margin-top: 18px;

      color: #ff9b9b;

      font-size: 14px;

      letter-spacing: 2px;
    }

    .alert-code {
      margin-top: 25px;

      color: #ff4444;

      font-size: 12px;

      line-height: 1.8;
    }

    /* ======================================================
       FINAL SCREEN
    ====================================================== */

    #final {
      position: fixed;

      inset: 0;

      z-index: 250;

      display: flex;

      align-items: center;
      justify-content: center;

      flex-direction: column;

      background:
        radial-gradient(
          circle,
          rgba(255,0,0,0.04),
          #000 60%
        );

      opacity: 0;

      visibility: hidden;

      transition:
        opacity 0.5s;
    }

    #final.show {
      opacity: 1;
      visibility: visible;
    }

    #final h1 {
      margin: 0;

      color: #ff3131;

      font-size:
        clamp(38px, 8vw, 100px);

      letter-spacing: 8px;

      text-align: center;

      text-shadow:
        0 0 10px red,
        0 0 35px red,
        0 0 70px rgba(255,0,0,0.45);

      animation:
        dangerPulse 0.35s infinite alternate,
        finalGlitch 0.5s infinite steps(2);
    }

    #final p {
      color: #777;

      letter-spacing: 3px;

      margin-top: 25px;

      text-align: center;
    }

    #reveal {
      margin-top: 30px;

      padding:
        12px 22px;

      border:
        1px solid #444;

      background:
        transparent;

      color: #777;

      font-family: inherit;

      cursor: pointer;

      transition:
        color 0.2s,
        border-color 0.2s,
        box-shadow 0.2s;
    }

    #reveal:hover {
      color: white;

      border-color: #777;

      box-shadow:
        0 0 15px rgba(255,255,255,0.08);
    }

    /* ======================================================
       START
    ====================================================== */

    #start {
      position: fixed;

      z-index: 300;

      inset: 0;

      display: flex;

      align-items: center;
      justify-content: center;

      background:
        radial-gradient(
          circle at center,
          rgba(0,255,80,0.04),
          transparent 50%
        ),
        #020303;
    }

    #start::before {
      content: "";

      position: absolute;

      inset: 0;

      background:
        repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,0.018) 0px,
          rgba(255,255,255,0.018) 1px,
          transparent 1px,
          transparent 4px
        );

      pointer-events: none;
    }

    #start button {
      position: relative;

      z-index: 2;

      padding:
        17px 32px;

      border:
        1px solid #43ff70;

      background:
        rgba(0,30,10,0.6);

      color: #75ff91;

      font-family: inherit;

      font-size: 14px;

      letter-spacing: 3px;

      cursor: pointer;

      box-shadow:
        0 0 20px rgba(0,255,80,0.12);

      transition:
        background 0.2s,
        box-shadow 0.2s,
        transform 0.2s;
    }

    #start button:hover {
      background:
        rgba(0,255,70,0.08);

      box-shadow:
        0 0 35px rgba(0,255,80,0.25);

      transform:
        translateY(-1px);
    }

    #start button:active {
      transform:
        scale(0.98);
    }

    /* ======================================================
       ANIMATIONS
    ====================================================== */

    @keyframes lineIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes cursorBlink {
      0%, 45% {
        opacity: 1;
      }

      46%, 100% {
        opacity: 0;
      }
    }

    @keyframes pulse {
      from {
        opacity: 0.35;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes dangerPulse {
      from {
        opacity: 0.55;
        transform: scale(0.995);
      }

      to {
        opacity: 1;
        transform: scale(1.01);
      }
    }

    @keyframes screenShake {
      0% {
        transform: translate(0);
      }

      25% {
        transform: translate(-5px, 2px);
      }

      50% {
        transform: translate(5px, -3px);
      }

      75% {
        transform: translate(-3px, -4px);
      }

      100% {
        transform: translate(4px, 3px);
      }
    }

    @keyframes chromatic {
      0% {
        text-shadow:
          -4px 0 red,
          4px 0 cyan;
      }

      100% {
        text-shadow:
          4px 0 red,
          -4px 0 cyan;
      }
    }

    @keyframes glitchLines {
      0% {
        transform:
          translateY(0)
          skewX(0deg);

        opacity: 0.2;
      }

      50% {
        transform:
          translateY(-12px)
          skewX(2deg);

        opacity: 0.8;
      }

      100% {
        transform:
          translateY(15px)
          skewX(-2deg);

        opacity: 0.3;
      }
    }

    @keyframes tear {
      0% {
        transform:
          translateY(-30px)
          scaleX(0.7);
      }

      50% {
        transform:
          translateY(40px)
          scaleX(1.2);
      }

      100% {
        transform:
          translateY(-10px)
          scaleX(0.9);
      }
    }

    @keyframes finalGlitch {
      0% {
        transform: translate(0);
      }

      20% {
        transform: translate(-4px, 1px);
      }

      40% {
        transform: translate(4px, -2px);
      }

      60% {
        transform: translate(-2px, 3px);
      }

      80% {
        transform: translate(3px, 0);
      }

      100% {
        transform: translate(0);
      }
    }

    @keyframes warningBox {
      0% {
        transform: translate(0);
      }

      50% {
        transform: translate(2px, -1px);
      }

      100% {
        transform: translate(-2px, 1px);
      }
    }

    @keyframes signalFlicker {
      0% {
        opacity: 1;
      }

      40% {
        opacity: 0.15;
      }

      70% {
        opacity: 0.8;
      }

      100% {
        opacity: 0.3;
      }
    }

    /* ======================================================
       MOBILE
    ====================================================== */

    @media (max-width: 600px) {

      #terminal {
        padding: 12px;
      }

      #output {
        font-size: 11px;
        line-height: 1.45;
      }

      #header {
        font-size: 9px;
      }

      .status {
        gap: 8px;
      }

      .secure-badge {
        display: none;
      }

      .alert-box {
        padding:
          25px 18px;
      }

      .alert-title {
        letter-spacing: 3px;
      }

      #final h1 {
        letter-spacing: 4px;
      }

      #start button {
        padding:
          15px 20px;

        font-size: 12px;
      }
    }

    /* ======================================================
       REDUCED MOTION
    ====================================================== */

    @media (prefers-reduced-motion: reduce) {

      *,
      *::before,
      *::after {
        animation-duration:
          0.001ms !important;

        animation-iteration-count:
          1 !important;
      }
    }
  `;

  document.head.appendChild(style);


  /* ==========================================================
     PAGE STRUCTURE
  ========================================================== */

  document.body.insertAdjacentHTML(
    "afterbegin",
    `
      <div id="start">
        <button id="startButton">
          INITIALIZE SECURE CONSOLE
        </button>
      </div>

      <canvas id="matrix"></canvas>

      <div id="terminal">

        <div id="header">

          <div class="header-left">

            <span class="header-brand">
              NODE://LOCAL-CONSOLE
            </span>

            <span class="secure-badge">
              ENCRYPTED CHANNEL
            </span>

          </div>

          <div class="status">

            <span>
              LINK: ACTIVE
            </span>

            <span class="live">
              ● LIVE
            </span>

          </div>

        </div>

        <div id="output"></div>

      </div>

      <div id="freezeOverlay"></div>

      <div id="signalLoss">
        <div class="signal-text">
          SIGNAL LOST
        </div>
      </div>

      <div id="alert">

        <div class="alert-box">

          <div class="alert-title">
            SYSTEM COMPROMISED
          </div>

          <div class="alert-sub">
            UNAUTHORIZED SESSION DETECTED
          </div>

          <div class="alert-code">
            TRACE ID: 7F-92A-CC19<br>
            SESSION STATE: CRITICAL
          </div>

        </div>

      </div>

      <div id="final">

        <h1>
          ACCESS COMPLETE
        </h1>

        <p>
          SIMULATION TERMINATED
        </p>

        <button id="reveal">
          reveal simulation
        </button>

      </div>
    `
  );


  /* ==========================================================
     ELEMENTS
  ========================================================== */

  const output =
    document.getElementById("output");

  const start =
    document.getElementById("start");

  const startButton =
    document.getElementById("startButton");

  const alertBox =
    document.getElementById("alert");

  const finalScreen =
    document.getElementById("final");

  const revealButton =
    document.getElementById("reveal");

  const signalLoss =
    document.getElementById("signalLoss");

  let running = false;

  let lineCount = 0;


  /* ==========================================================
     UTILITY
  ========================================================== */

  function delay(min = 250, max = 900) {

    return new Promise(resolve => {

      const time =
        Math.floor(
          Math.random() *
          (max - min + 1)
        ) + min;

      setTimeout(
        resolve,
        time
      );
    });
  }


  function random(min, max) {

    return Math.floor(
      Math.random() *
      (max - min + 1)
    ) + min;
  }


  /* ==========================================================
     FULLSCREEN
  ========================================================== */

  async function enterFullscreen() {

    try {

      if (!document.fullscreenElement) {

        await document.documentElement
          .requestFullscreen();
      }

    } catch (error) {
      // Fullscreen is optional.
    }
  }


  /* ==========================================================
     TERMINAL OUTPUT
  ========================================================== */

  function addLine(
    text,
    type = ""
  ) {

    const line =
      document.createElement("div");

    line.className =
      `line ${type}`;

    line.textContent =
      text;

    output.appendChild(line);

    lineCount++;

    if (
      lineCount > 58 &&
      output.firstElementChild
    ) {

      output.removeChild(
        output.firstElementChild
      );
    }
  }


  /* ==========================================================
     TYPEWRITER
  ========================================================== */

  async function typeLine(
    text,
    type = "",
    speed = 10
  ) {

    const line =
      document.createElement("div");

    line.className =
      `line ${type}`;

    output.appendChild(line);

    for (
      let i = 0;
      i < text.length;
      i++
    ) {

      line.textContent +=
        text[i];

      await new Promise(resolve => {

        setTimeout(
          resolve,
          speed +
          Math.random() * speed
        );

      });
    }

    lineCount++;

    if (
      lineCount > 58 &&
      output.firstElementChild
    ) {

      output.removeChild(
        output.firstElementChild
      );
    }
  }


  /* ==========================================================
     BURST
  ========================================================== */

  function burst(lines) {

    lines.forEach(item => {

      if (
        typeof item === "string"
      ) {

        addLine(item);

      } else {

        addLine(
          item.text,
          item.type
        );
      }

    });
  }


  /* ==========================================================
     GLITCH
  ========================================================== */

  async function glitch(
    duration = 500
  ) {

    document.body.classList.add(
      "glitch"
    );

    await delay(
      duration,
      duration + 150
    );

    document.body.classList.remove(
      "glitch"
    );
  }


  /* ==========================================================
     SCREEN FREEZE
  ========================================================== */

  async function freezeScreen(
    duration = 2600
  ) {

    addLine(
      "",
      "dim"
    );

    addLine(
      "[SYSTEM] Visual stream halted.",
      "red"
    );

    await delay(
      180,
      280
    );

    document.body.classList.add(
      "freeze"
    );

    /*
      The browser itself isn't actually frozen.
      The visual layer is intentionally locked.
    */

    await delay(
      700,
      900
    );

    addLine(
      "[SYSTEM] Response timeout...",
      "red"
    );

    await delay(
      500,
      700
    );

    addLine(
      "[SYSTEM] Attempting visual recovery...",
      "yellow"
    );

    await delay(
      duration - 1500,
      duration - 1200
    );

    document.body.classList.remove(
      "freeze"
    );

    await glitch(
      220
    );

    addLine(
      "[SYSTEM] Visual stream restored.",
      "success"
    );
  }


  /* ==========================================================
     SIGNAL INTERRUPTION
  ========================================================== */

  async function signalInterruption() {

    signalLoss.classList.add(
      "show"
    );

    await delay(
      350,
      550
    );

    signalLoss.classList.remove(
      "show"
    );

    await delay(
      100,
      200
    );

    await glitch(
      300
    );
  }


  /* ==========================================================
     PROGRESS BAR
  ========================================================== */

  async function progress(
    label,
    duration = 1600
  ) {

    const line =
      document.createElement("div");

    line.className =
      "line progress-line";

    output.appendChild(line);

    const startTime =
      performance.now();

    while (true) {

      const elapsed =
        performance.now() -
        startTime;

      const percent =
        Math.min(
          100,
          Math.floor(
            elapsed /
            duration *
            100
          )
        );

      const filled =
        Math.floor(
          percent / 5
        );

      const empty =
        20 - filled;

      line.textContent =
        `${label} [${"█".repeat(
          filled
        )}${"░".repeat(
          empty
        )}] ${String(
          percent
        ).padStart(
          3,
          " "
        )}%`;

      if (
        percent >= 100
      ) {
        break;
      }

      await new Promise(
        requestAnimationFrame
      );
    }

    lineCount++;
  }


  /* ==========================================================
     RANDOM HEX
  ========================================================== */

  function randomHex(length = 8) {

    const chars =
      "0123456789ABCDEF";

    let result = "";

    for (
      let i = 0;
      i < length;
      i++
    ) {

      result +=
        chars[
          Math.floor(
            Math.random() *
            chars.length
          )
        ];
    }

    return result;
  }


  /* ==========================================================
     MATRIX
  ========================================================== */

  const canvas =
    document.getElementById(
      "matrix"
    );

  const ctx =
    canvas.getContext("2d");

  let drops = [];

  function resizeMatrix() {

    canvas.width =
      window.innerWidth;

    canvas.height =
      window.innerHeight;

    const fontSize =
      15;

    const columns =
      Math.floor(
        canvas.width /
        fontSize
      );

    drops =
      Array(columns)
        .fill(1)
        .map(() =>
          Math.random() * -50
        );
  }


  function matrixFrame() {

    ctx.fillStyle =
      "rgba(0,0,0,0.075)";

    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.font =
      "15px monospace";

    ctx.fillStyle =
      "#00ff55";

    const chars =
      "01ABCDEF0123456789<>[]{}\\/";

    for (
      let i = 0;
      i < drops.length;
      i++
    ) {

      const char =
        chars[
          Math.floor(
            Math.random() *
            chars.length
          )
        ];

      const x =
        i * 15;

      const y =
        drops[i] * 15;

      ctx.fillText(
        char,
        x,
        y
      );

      if (
        y > canvas.height &&
        Math.random() > 0.975
      ) {

        drops[i] = 0;
      }

      drops[i]++;
    }

    requestAnimationFrame(
      matrixFrame
    );
  }


  window.addEventListener(
    "resize",
    resizeMatrix
  );

  resizeMatrix();

  matrixFrame();


  /* ==========================================================
     MAIN SIMULATION
  ========================================================== */

  async function runSimulation() {

    if (running) return;

    running = true;

    output.innerHTML = "";

    lineCount = 0;


    /* ======================================================
       PHASE 01 — BOOT
    ====================================================== */

    await typeLine(
      "[BOOT] Initializing secure console...",
      "dim",
      14
    );

    await delay(
      300,
      650
    );

    await typeLine(
      "[BOOT] Loading runtime environment...",
      "dim",
      11
    );

    await delay(
      250,
      550
    );

    burst([
      {
        text:
          "[OK] Kernel interface initialized.",
        type: "success"
      },

      {
        text:
          "[OK] Memory channel synchronized.",
        type: "success"
      },

      {
        text:
          "[OK] Session handshake complete.",
        type: "success"
      }
    ]);

    await delay(
      500,
      850
    );


    /* ======================================================
       PHASE 02 — ENVIRONMENT
    ====================================================== */

    await typeLine(
      "",
      "dim",
      1
    );

    await typeLine(
      "[ENV] Detecting execution environment...",
      "cyan",
      7
    );

    await delay(
      250,
      450
    );

    burst([
      "[ENV] PLATFORM ............... LOCAL",
      "[ENV] DISPLAY ............... CONNECTED",
      "[ENV] RUNTIME ............... ACTIVE",
      "[ENV] SESSION ............... UNRESOLVED"
    ]);

    await delay(
      450,
      750
    );

    await typeLine(
      `[ENV] SESSION ID ............ ${randomHex(12)}`,
      "purple",
      5
    );

    await typeLine(
      `[ENV] CHANNEL KEY ........... ${randomHex(16)}`,
      "purple",
      4
    );

    await delay(
      400,
      700
    );


    /* ======================================================
       PHASE 03 — VIRTUAL SCAN
    ====================================================== */

    await typeLine(
      "------------------------------------------------------------",
      "dim",
      2
    );

    await typeLine(
      "[SCAN] Enumerating virtual endpoints...",
      "cyan",
      7
    );

    await delay(
      250,
      450
    );

    burst([
      "[SCAN] NODE-07 ............... RESPONSE 18ms",
      "[SCAN] NODE-12 ............... RESPONSE 24ms",
      "[SCAN] NODE-19 ............... RESPONSE 31ms",
      "[SCAN] NODE-24 ............... RESPONSE 12ms",
      "[SCAN] NODE-31 ............... RESPONSE 09ms"
    ]);

    await delay(
      450,
      800
    );

    await typeLine(
      "[SCAN] Mapping session topology...",
      "cyan",
      6
    );

    await progress(
      "[SCAN] topology",
      1300
    );

    await delay(
      300,
      600
    );


    /* ======================================================
       PHASE 04 — MEMORY DIAGNOSTIC
    ====================================================== */

    await typeLine(
      "[MEM] Inspecting virtual memory map...",
      "cyan",
      6
    );

    await delay(
      300,
      500
    );

    burst([
      "[MEM] 0x0000-0x1FFF ........ AVAILABLE",
      "[MEM] 0x2000-0x3FFF ........ ALLOCATED",
      "[MEM] 0x4000-0x5FFF ........ RESERVED",
      "[MEM] 0x6000-0x7FFF ........ UNKNOWN"
    ]);

    await delay(
      350,
      650
    );

    await typeLine(
      "[MEM] Unexpected state transition detected.",
      "yellow",
      7
    );

    await delay(
      400,
      650
    );


    /* ======================================================
       PHASE 05 — SYSTEM MAP
    ====================================================== */

    await typeLine(
      "[TRACE] Constructing virtual system map...",
      "cyan",
      6
    );

    burst([
      "[MAP] /SYSTEM/CORE",
      "[MAP] /SYSTEM/CONFIG",
      "[MAP] /USER/SESSION",
      "[MAP] /CACHE/INDEX",
      "[MAP] /RUNTIME/TEMP",
      "[MAP] /SERVICES/LOCAL",
      "[MAP] /PROCESS/STATE",
      "[MAP] /INTERFACE/LOCK"
    ]);

    await delay(
      450,
      800
    );


    /* ======================================================
       PHASE 06 — FIRST INSTABILITY
    ====================================================== */

    await typeLine(
      "[TRACE] Synchronizing visual state...",
      "cyan",
      5
    );

    await delay(
      250,
      400
    );

    await glitch(
      400
    );

    burst([
      {
        text:
          "!!! SIGNAL INSTABILITY !!!",
        type: "red"
      },

      {
        text:
          "[WARN] Visual channel desynchronized.",
        type: "yellow"
      },

      {
        text:
          "[WARN] Session clock drift detected.",
        type: "yellow"
      },

      {
        text:
          "[WARN] Reconstructing terminal state...",
        type: "yellow"
      }
    ]);

    await delay(
      550,
      850
    );


    /* ======================================================
       PHASE 07 — RECOVERY
    ====================================================== */

    await typeLine(
      "[RECOVERY] Rebuilding session...",
      "cyan",
      7
    );

    await progress(
      "[RECOVERY] channel",
      1700
    );

    await delay(
      350,
      650
    );

    burst([
      "[RECOVERY] state restored.",
      "[RECOVERY] checksum verified.",
      "[RECOVERY] visual channel restored."
    ]);

    await delay(
      450,
      750
    );


    /* ======================================================
       PHASE 08 — SCREEN FREEZE
    ====================================================== */

    await typeLine(
      "[SYSTEM] Processing anomalous response...",
      "yellow",
      6
    );

    await delay(
      400,
      650
    );

    await freezeScreen(
      3100
    );

    await delay(
      350,
      600
    );


    /* ======================================================
       PHASE 09 — SIGNAL LOSS
    ====================================================== */

    await typeLine(
      "[LINK] Re-establishing visual channel...",
      "cyan",
      5
    );

    await delay(
      350,
      600
    );

    await signalInterruption();

    await typeLine(
      "[LINK] Signal recovered.",
      "success",
      7
    );

    await delay(
      350,
      600
    );


    /* ======================================================
       PHASE 10 — CRITICAL WARNING
    ====================================================== */

    alertBox.classList.add(
      "show"
    );

    document.body.classList.add(
      "glitch"
    );

    await delay(
      1000,
      1350
    );

    document.body.classList.remove(
      "glitch"
    );

    alertBox.classList.remove(
      "show"
    );

    await delay(
      300,
      550
    );


    /* ======================================================
       PHASE 11 — CRITICAL STATE
    ====================================================== */

    burst([
      {
        text:
          "[CRITICAL] Session boundary crossed.",
        type: "red"
      },

      {
        text:
          "[CRITICAL] Isolation layer unavailable.",
        type: "red"
      },

      {
        text:
          "[CRITICAL] Runtime state unstable.",
        type: "red"
      },

      {
        text:
          "[SYSTEM] Emergency containment initiated...",
        type: "yellow"
      }
    ]);

    await delay(
      700,
      1000
    );


    /* ======================================================
       PHASE 12 — RAPID PROCESSING
    ====================================================== */

    const rapidLines = [

      "[PROC] session.validate()",

      "[PROC] integrity.check()",

      "[PROC] channel.rebuild()",

      "[PROC] environment.sync()",

      "[PROC] cache.reindex()",

      "[PROC] state.restore()",

      "[PROC] runtime.verify()",

      "[PROC] interface.lock()",

      "[PROC] session.finalize()",

      "[PROC] visual.commit()",

      "[PROC] terminal.freeze()",

      "[PROC] recovery.begin()"
    ];

    for (
      const line of rapidLines
    ) {

      addLine(
        line,
        "white"
      );

      await delay(
        55,
        150
      );
    }


    /* ======================================================
       PHASE 13 — MAJOR GLITCH
    ====================================================== */

    await glitch(
      650
    );

    await delay(
      250,
      450
    );


    /* ======================================================
       PHASE 14 — SECOND FREEZE
    ====================================================== */

    await typeLine(
      "[SYSTEM] Finalizing state transition...",
      "yellow",
      5
    );

    await delay(
      300,
      500
    );

    await freezeScreen(
      2700
    );

    await delay(
      300,
      500
    );


    /* ======================================================
       PHASE 15 — FINALIZATION
    ====================================================== */

    await typeLine(
      "[FINAL] Session integrity check...",
      "cyan",
      6
    );

    await progress(
      "[FINAL] verification",
      1500
    );

    await delay(
      400,
      700
    );

    burst([

      "",

      "============================================================",

      "[SYSTEM] SESSION COMPLETE",

      "============================================================",

      "",

      "[STATUS] Connection ............... CLOSED",

      "[STATUS] Runtime ................. TERMINATED",

      "[STATUS] Visual channel .......... LOCKED",

      "[STATUS] Session state ........... FINAL",

      "",

      "FINALIZING SESSION..."
    ]);

    await delay(
      1000,
      1500
    );


    /* ======================================================
       FINAL SCREEN
    ====================================================== */

    finalScreen.classList.add(
      "show"
    );

    document.body.classList.add(
      "glitch"
    );

    await delay(
      900,
      1200
    );

    document.body.classList.remove(
      "glitch"
    );
  }


  /* ==========================================================
     START
  ========================================================== */

  startButton.addEventListener(
    "click",
    async () => {

      if (running) return;

      await enterFullscreen();

      start.style.display =
        "none";

      await delay(
        400,
        700
      );

      runSimulation();
    }
  );


  /* ==========================================================
     REVEAL
  ========================================================== */

  revealButton.addEventListener(
    "click",
    () => {

      finalScreen.classList.remove(
        "show"
      );

      document.body.classList.remove(
        "glitch",
        "freeze"
      );

      alertBox.classList.remove(
        "show"
      );

      signalLoss.classList.remove(
        "show"
      );

      output.innerHTML =
        "";

      lineCount =
        0;

      addLine(
        "SIMULATION ENDED — NOTHING WAS ACCESSED.",
        "success"
      );

      addLine(
        "This page was a visual simulation only.",
        "dim"
      );

      addLine(
        "No files, accounts, camera, network or device data were accessed.",
        "dim"
      );

      addLine(
        "All terminal events displayed during the sequence were fictional.",
        "dim"
      );

      running =
        false;
    }
  );


  /* ==========================================================
     ESCAPE
  ========================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        document.body.classList.remove(
          "glitch",
          "freeze"
        );

        alertBox.classList.remove(
          "show"
        );

        signalLoss.classList.remove(
          "show"
        );

        finalScreen.classList.remove(
          "show"
        );

        if (
          document.fullscreenElement
        ) {

          document.exitFullscreen();
        }
      }
    }
  );


  /* ==========================================================
     INITIALIZATION
  ========================================================== */

  console.log(
    "%c HACKER'S TERMINAL INITIALIZED ",
    "background:#020303;color:#5cff80;font-family:monospace;padding:6px;"
  );

  console.log(
    "%c Visual simulation only — no system access performed. ",
    "color:#777;font-family:monospace;"
  );

})();




/*

//basic
const randomDelay = ()=>{
    return new Promise((resolve,reject)=>{
       let timeout = 1 + 6 * Math.random()
       setTimeout(() => {
          resolve()
       }, timeout * 1000);
    })
 }
 
 
 alert("System Hacked!!!!!!!!!!!!!!!!")
 
 
 const terminal = document.createElement("div")
 terminal.style.color = "lime"
 terminal.style.backgroundColor = "black"
 terminal.style.padding = "10px"
 terminal.style.marginTop = "250px"
 terminal.style.height = "auto"
 terminal.style.width = "auto"
 terminal.style.overflow = "auto"
 document.body.appendChild(terminal)
 
 
 function addMessage(message){
    const p = document.createElement("p")
    const spanmessage = document.createElement("span")
    const spandots = document.createElement("span")
 
    spanmessage.textContent = message
     spandots.textContent = "..."
 
     p.appendChild(spanmessage)
     p.appendChild(spandots)
    terminal.appendChild(p)
 
 
    const interval = setInterval(() => {
       if(spandots.textContent === "..."){
        spandots.textContent = ""
       }
       else{
        spandots.textContent = spandots.textContent +"."
       }
       
    }, 700);
 
 
    setTimeout(()=>clearInterval(interval),15000)
 }
 
 
 setTimeout(()=>{
    document.body.style.backgroundColor = "green"
    },1000)
    
 randomDelay()
 
 .then(()=>{
    addMessage("Initialize Hacking")
    return randomDelay()
 })
 
 .then(()=>{
    addMessage("Reading your Files")
    return randomDelay()
 })
 .then(()=>{
    addMessage("searching for stored Cookies")
    return randomDelay()
 })
 .then(()=>{
    addMessage("Fetching Cookies")
    return randomDelay()
 })
 .then(()=>{
    addMessage("Password files Detected")
    return randomDelay()
 })
 
 .then(()=>{
    addMessage("Sending all passwords and personal files to server")
    return randomDelay()
 })
 
 
 .then(()=>{
    addMessage("Cleaning Up...")
    
 })
*/





 /*
 //Another method (display messages using array)

 const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main() {


    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{

            last.innerHTML = last.innerHTML + "."
        }

    }, 100);


    let text = ["Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"]

    for (const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t)
    
}
main()
*/
