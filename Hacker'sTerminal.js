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

// (() => {
//   "use strict";

//   /* ==========================================================
//      STYLE INJECTION
//   ========================================================== */

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
//       background: #010202;
//       color: #b8ffb8;
//       font-family: "Courier New", Consolas, monospace;
//     }

//     body {
//       position: relative;
//       background:
//         radial-gradient(
//           circle at center,
//           rgba(0,255,90,0.025),
//           transparent 65%
//         ),
//         #010202;
//     }

//     /* ======================================================
//        MATRIX
//     ====================================================== */

//     #matrix {
//       position: fixed;
//       inset: 0;
//       width: 100%;
//       height: 100%;
//       z-index: 1;
//       opacity: 0.09;
//       pointer-events: none;
//     }

//     /* ======================================================
//        TERMINAL
//     ====================================================== */

//     #terminal {
//       position: fixed;
//       inset: 0;
//       z-index: 5;

//       padding: 22px;

//       overflow: hidden;

//       background:
//         radial-gradient(
//           ellipse at center,
//           rgba(0,255,100,0.04),
//           transparent 62%
//         ),
//         #020303;

//       text-shadow:
//         0 0 5px rgba(0,255,80,0.55),
//         0 0 12px rgba(0,255,80,0.15);

//       transition:
//         filter 0.1s,
//         opacity 0.1s;
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

//       opacity: 0.5;
//     }

//     #terminal::after {
//       content: "";

//       position: absolute;
//       inset: 0;

//       pointer-events: none;

//       z-index: 21;

//       box-shadow:
//         inset 0 0 140px rgba(0,0,0,0.98),
//         inset 0 0 40px rgba(0,255,100,0.06);
//     }

//     /* ======================================================
//        HEADER
//     ====================================================== */

//     #header {
//       position: relative;

//       z-index: 30;

//       height: 44px;

//       display: flex;
//       justify-content: space-between;
//       align-items: center;

//       padding: 0 12px;

//       border-bottom:
//         1px solid rgba(0,255,100,0.25);

//       color: #75ff91;

//       font-size: 12px;

//       letter-spacing: 1px;
//     }

//     .header-left {
//       display: flex;
//       align-items: center;
//       gap: 15px;
//     }

//     .header-brand {
//       color: #9dffb0;
//     }

//     .secure-badge {
//       color: #5effff;

//       border:
//         1px solid rgba(0,255,255,0.3);

//       padding: 3px 7px;

//       font-size: 9px;

//       letter-spacing: 1px;
//     }

//     .status {
//       display: flex;

//       align-items: center;

//       gap: 18px;
//     }

//     .status span {
//       opacity: 0.7;
//     }

//     .live {
//       color: #ff4141 !important;
//       opacity: 1 !important;

//       animation:
//         pulse 0.9s infinite alternate;
//     }

//     /* ======================================================
//        OUTPUT
//     ====================================================== */

//     #output {
//       position: relative;

//       z-index: 30;

//       height: calc(100vh - 44px);

//       padding:
//         17px
//         10px
//         100px;

//       overflow: hidden;

//       font-size:
//         clamp(11px, 1.05vw, 15px);

//       line-height: 1.55;

//       white-space: pre-wrap;
//     }

//     .line {
//       min-height: 20px;

//       opacity: 0;

//       transform:
//         translateY(3px);

//       animation:
//         lineIn 0.08s forwards;
//     }

//     .dim {
//       color: #56865f;
//     }

//     .cyan {
//       color: #65ffff;

//       text-shadow:
//         0 0 8px rgba(0,255,255,0.4);
//     }

//     .yellow {
//       color: #ffe76a;

//       text-shadow:
//         0 0 8px rgba(255,220,0,0.2);
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

//       text-shadow:
//         0 0 7px rgba(80,255,80,0.3);
//     }

//     .purple {
//       color: #d58aff;

//       text-shadow:
//         0 0 8px rgba(180,80,255,0.35);
//     }

//     /* ======================================================
//        PROGRESS
//     ====================================================== */

//     .progress-line {
//       color: #78ff93;
//     }

//     .progress-bar {
//       display: inline-block;

//       width: 190px;

//       margin-left: 8px;

//       color: #68ff8a;
//     }

//     /* ======================================================
//        CURSOR
//     ====================================================== */

//     #cursor {
//       display: inline-block;

//       width: 9px;
//       height: 16px;

//       margin-left: 4px;

//       background: #8aff8a;

//       animation:
//         cursorBlink 0.7s infinite;
//     }

//     /* ======================================================
//        GLITCH
//     ====================================================== */

//     body.glitch #terminal {
//       animation:
//         screenShake 0.12s steps(2) infinite,
//         chromatic 0.12s steps(2) infinite;
//     }

//     body.glitch #output {
//       filter:
//         contrast(1.4)
//         brightness(1.18)
//         saturate(1.45);
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
//           rgba(255,0,0,0.13) 6px,
//           transparent 8px
//         );

//       animation:
//         glitchLines 0.1s steps(2) infinite;
//     }

//     body.glitch::after {
//       width: 100%;
//       height: 3px;

//       left: 0;
//       top: 35%;

//       background:
//         rgba(255,255,255,0.85);

//       box-shadow:
//         0 120px rgba(255,0,0,0.4),
//         0 -180px rgba(0,255,255,0.3);

//       animation:
//         tear 0.11s steps(2) infinite;
//     }

//     /* ======================================================
//        FREEZE EFFECT
//     ====================================================== */

//     body.freeze #terminal {
//       filter:
//         contrast(1.25)
//         brightness(0.75)
//         saturate(0.75);

//       transform: scale(1.002);
//     }

//     body.freeze #output {
//       text-shadow:
//         0 0 8px rgba(255,255,255,0.25);
//     }

//     #freezeOverlay {
//       position: fixed;

//       inset: 0;

//       z-index: 180;

//       pointer-events: none;

//       opacity: 0;

//       background:
//         radial-gradient(
//           circle at center,
//           rgba(255,255,255,0.04),
//           rgba(0,0,0,0.45)
//         );

//       transition:
//         opacity 0.08s;
//     }

//     body.freeze #freezeOverlay {
//       opacity: 1;
//     }

//     /* ======================================================
//        SIGNAL LOSS
//     ====================================================== */

//     #signalLoss {
//       position: fixed;

//       inset: 0;

//       z-index: 190;

//       display: flex;

//       align-items: center;
//       justify-content: center;

//       background:
//         #000;

//       opacity: 0;

//       visibility: hidden;

//       pointer-events: none;
//     }

//     #signalLoss.show {
//       opacity: 1;
//       visibility: visible;
//     }

//     .signal-text {
//       color: #ff3434;

//       font-size:
//         clamp(18px, 4vw, 45px);

//       letter-spacing:
//         7px;

//       text-align: center;

//       animation:
//         signalFlicker 0.08s infinite;
//     }

//     /* ======================================================
//        WARNING
//     ====================================================== */

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
//           rgba(255,0,0,0.19),
//           rgba(0,0,0,0.98) 65%
//         );

//       opacity: 0;

//       visibility: hidden;

//       transition:
//         opacity 0.1s;
//     }

//     #alert.show {
//       opacity: 1;
//       visibility: visible;
//     }

//     .alert-box {
//       width:
//         min(880px, 90vw);

//       padding:
//         38px;

//       border:
//         1px solid #ff3030;

//       background:
//         rgba(8,0,0,0.94);

//       box-shadow:
//         0 0 45px rgba(255,0,0,0.32),
//         inset 0 0 35px rgba(255,0,0,0.08);

//       text-align: center;

//       animation:
//         warningBox 0.15s steps(2) infinite;
//     }

//     .alert-title {
//       color: #ff3030;

//       font-size:
//         clamp(30px, 5vw, 66px);

//       font-weight: bold;

//       letter-spacing: 7px;

//       animation:
//         dangerPulse 0.35s infinite alternate;
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

//     /* ======================================================
//        FINAL SCREEN
//     ====================================================== */

//     #final {
//       position: fixed;

//       inset: 0;

//       z-index: 250;

//       display: flex;

//       align-items: center;
//       justify-content: center;

//       flex-direction: column;

//       background:
//         radial-gradient(
//           circle,
//           rgba(255,0,0,0.04),
//           #000 60%
//         );

//       opacity: 0;

//       visibility: hidden;

//       transition:
//         opacity 0.5s;
//     }

//     #final.show {
//       opacity: 1;
//       visibility: visible;
//     }

//     #final h1 {
//       margin: 0;

//       color: #ff3131;

//       font-size:
//         clamp(38px, 8vw, 100px);

//       letter-spacing: 8px;

//       text-align: center;

//       text-shadow:
//         0 0 10px red,
//         0 0 35px red,
//         0 0 70px rgba(255,0,0,0.45);

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

//       padding:
//         12px 22px;

//       border:
//         1px solid #444;

//       background:
//         transparent;

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

//       box-shadow:
//         0 0 15px rgba(255,255,255,0.08);
//     }

//     /* ======================================================
//        START
//     ====================================================== */

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
//           rgba(0,255,80,0.04),
//           transparent 50%
//         ),
//         #020303;
//     }

//     #start::before {
//       content: "";

//       position: absolute;

//       inset: 0;

//       background:
//         repeating-linear-gradient(
//           to bottom,
//           rgba(255,255,255,0.018) 0px,
//           rgba(255,255,255,0.018) 1px,
//           transparent 1px,
//           transparent 4px
//         );

//       pointer-events: none;
//     }

//     #start button {
//       position: relative;

//       z-index: 2;

//       padding:
//         17px 32px;

//       border:
//         1px solid #43ff70;

//       background:
//         rgba(0,30,10,0.6);

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
//       background:
//         rgba(0,255,70,0.08);

//       box-shadow:
//         0 0 35px rgba(0,255,80,0.25);

//       transform:
//         translateY(-1px);
//     }

//     #start button:active {
//       transform:
//         scale(0.98);
//     }

//     /* ======================================================
//        ANIMATIONS
//     ====================================================== */

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
//         transform: translate(-5px, 2px);
//       }

//       50% {
//         transform: translate(5px, -3px);
//       }

//       75% {
//         transform: translate(-3px, -4px);
//       }

//       100% {
//         transform: translate(4px, 3px);
//       }
//     }

//     @keyframes chromatic {
//       0% {
//         text-shadow:
//           -4px 0 red,
//           4px 0 cyan;
//       }

//       100% {
//         text-shadow:
//           4px 0 red,
//           -4px 0 cyan;
//       }
//     }

//     @keyframes glitchLines {
//       0% {
//         transform:
//           translateY(0)
//           skewX(0deg);

//         opacity: 0.2;
//       }

//       50% {
//         transform:
//           translateY(-12px)
//           skewX(2deg);

//         opacity: 0.8;
//       }

//       100% {
//         transform:
//           translateY(15px)
//           skewX(-2deg);

//         opacity: 0.3;
//       }
//     }

//     @keyframes tear {
//       0% {
//         transform:
//           translateY(-30px)
//           scaleX(0.7);
//       }

//       50% {
//         transform:
//           translateY(40px)
//           scaleX(1.2);
//       }

//       100% {
//         transform:
//           translateY(-10px)
//           scaleX(0.9);
//       }
//     }

//     @keyframes finalGlitch {
//       0% {
//         transform: translate(0);
//       }

//       20% {
//         transform: translate(-4px, 1px);
//       }

//       40% {
//         transform: translate(4px, -2px);
//       }

//       60% {
//         transform: translate(-2px, 3px);
//       }

//       80% {
//         transform: translate(3px, 0);
//       }

//       100% {
//         transform: translate(0);
//       }
//     }

//     @keyframes warningBox {
//       0% {
//         transform: translate(0);
//       }

//       50% {
//         transform: translate(2px, -1px);
//       }

//       100% {
//         transform: translate(-2px, 1px);
//       }
//     }

//     @keyframes signalFlicker {
//       0% {
//         opacity: 1;
//       }

//       40% {
//         opacity: 0.15;
//       }

//       70% {
//         opacity: 0.8;
//       }

//       100% {
//         opacity: 0.3;
//       }
//     }

//     /* ======================================================
//        MOBILE
//     ====================================================== */

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

//       .secure-badge {
//         display: none;
//       }

//       .alert-box {
//         padding:
//           25px 18px;
//       }

//       .alert-title {
//         letter-spacing: 3px;
//       }

//       #final h1 {
//         letter-spacing: 4px;
//       }

//       #start button {
//         padding:
//           15px 20px;

//         font-size: 12px;
//       }
//     }

//     /* ======================================================
//        REDUCED MOTION
//     ====================================================== */

//     @media (prefers-reduced-motion: reduce) {

//       *,
//       *::before,
//       *::after {
//         animation-duration:
//           0.001ms !important;

//         animation-iteration-count:
//           1 !important;
//       }
//     }
//   `;

//   document.head.appendChild(style);


//   /* ==========================================================
//      PAGE STRUCTURE
//   ========================================================== */

//   document.body.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <div id="start">
//         <button id="startButton">
//           INITIALIZE SECURE CONSOLE
//         </button>
//       </div>

//       <canvas id="matrix"></canvas>

//       <div id="terminal">

//         <div id="header">

//           <div class="header-left">

//             <span class="header-brand">
//               NODE://LOCAL-CONSOLE
//             </span>

//             <span class="secure-badge">
//               ENCRYPTED CHANNEL
//             </span>

//           </div>

//           <div class="status">

//             <span>
//               LINK: ACTIVE
//             </span>

//             <span class="live">
//               ● LIVE
//             </span>

//           </div>

//         </div>

//         <div id="output"></div>

//       </div>

//       <div id="freezeOverlay"></div>

//       <div id="signalLoss">
//         <div class="signal-text">
//           SIGNAL LOST
//         </div>
//       </div>

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

//       <div id="final">

//         <h1>
//           ACCESS COMPLETE
//         </h1>

//         <p>
//           SIMULATION TERMINATED
//         </p>

//         <button id="reveal">
//           reveal simulation
//         </button>

//       </div>
//     `
//   );


//   /* ==========================================================
//      ELEMENTS
//   ========================================================== */

//   const output =
//     document.getElementById("output");

//   const start =
//     document.getElementById("start");

//   const startButton =
//     document.getElementById("startButton");

//   const alertBox =
//     document.getElementById("alert");

//   const finalScreen =
//     document.getElementById("final");

//   const revealButton =
//     document.getElementById("reveal");

//   const signalLoss =
//     document.getElementById("signalLoss");

//   let running = false;

//   let lineCount = 0;


//   /* ==========================================================
//      UTILITY
//   ========================================================== */

//   function delay(min = 250, max = 900) {

//     return new Promise(resolve => {

//       const time =
//         Math.floor(
//           Math.random() *
//           (max - min + 1)
//         ) + min;

//       setTimeout(
//         resolve,
//         time
//       );
//     });
//   }


//   function random(min, max) {

//     return Math.floor(
//       Math.random() *
//       (max - min + 1)
//     ) + min;
//   }


//   /* ==========================================================
//      FULLSCREEN
//   ========================================================== */

//   async function enterFullscreen() {

//     try {

//       if (!document.fullscreenElement) {

//         await document.documentElement
//           .requestFullscreen();
//       }

//     } catch (error) {
//       // Fullscreen is optional.
//     }
//   }


//   /* ==========================================================
//      TERMINAL OUTPUT
//   ========================================================== */

//   function addLine(
//     text,
//     type = ""
//   ) {

//     const line =
//       document.createElement("div");

//     line.className =
//       `line ${type}`;

//     line.textContent =
//       text;

//     output.appendChild(line);

//     lineCount++;

//     if (
//       lineCount > 58 &&
//       output.firstElementChild
//     ) {

//       output.removeChild(
//         output.firstElementChild
//       );
//     }
//   }


//   /* ==========================================================
//      TYPEWRITER
//   ========================================================== */

//   async function typeLine(
//     text,
//     type = "",
//     speed = 10
//   ) {

//     const line =
//       document.createElement("div");

//     line.className =
//       `line ${type}`;

//     output.appendChild(line);

//     for (
//       let i = 0;
//       i < text.length;
//       i++
//     ) {

//       line.textContent +=
//         text[i];

//       await new Promise(resolve => {

//         setTimeout(
//           resolve,
//           speed +
//           Math.random() * speed
//         );

//       });
//     }

//     lineCount++;

//     if (
//       lineCount > 58 &&
//       output.firstElementChild
//     ) {

//       output.removeChild(
//         output.firstElementChild
//       );
//     }
//   }


//   /* ==========================================================
//      BURST
//   ========================================================== */

//   function burst(lines) {

//     lines.forEach(item => {

//       if (
//         typeof item === "string"
//       ) {

//         addLine(item);

//       } else {

//         addLine(
//           item.text,
//           item.type
//         );
//       }

//     });
//   }


//   /* ==========================================================
//      GLITCH
//   ========================================================== */

//   async function glitch(
//     duration = 500
//   ) {

//     document.body.classList.add(
//       "glitch"
//     );

//     await delay(
//       duration,
//       duration + 150
//     );

//     document.body.classList.remove(
//       "glitch"
//     );
//   }


//   /* ==========================================================
//      SCREEN FREEZE
//   ========================================================== */

//   async function freezeScreen(
//     duration = 2600
//   ) {

//     addLine(
//       "",
//       "dim"
//     );

//     addLine(
//       "[SYSTEM] Visual stream halted.",
//       "red"
//     );

//     await delay(
//       180,
//       280
//     );

//     document.body.classList.add(
//       "freeze"
//     );

//     /*
//       The browser itself isn't actually frozen.
//       The visual layer is intentionally locked.
//     */

//     await delay(
//       700,
//       900
//     );

//     addLine(
//       "[SYSTEM] Response timeout...",
//       "red"
//     );

//     await delay(
//       500,
//       700
//     );

//     addLine(
//       "[SYSTEM] Attempting visual recovery...",
//       "yellow"
//     );

//     await delay(
//       duration - 1500,
//       duration - 1200
//     );

//     document.body.classList.remove(
//       "freeze"
//     );

//     await glitch(
//       220
//     );

//     addLine(
//       "[SYSTEM] Visual stream restored.",
//       "success"
//     );
//   }


//   /* ==========================================================
//      SIGNAL INTERRUPTION
//   ========================================================== */

//   async function signalInterruption() {

//     signalLoss.classList.add(
//       "show"
//     );

//     await delay(
//       350,
//       550
//     );

//     signalLoss.classList.remove(
//       "show"
//     );

//     await delay(
//       100,
//       200
//     );

//     await glitch(
//       300
//     );
//   }


//   /* ==========================================================
//      PROGRESS BAR
//   ========================================================== */

//   async function progress(
//     label,
//     duration = 1600
//   ) {

//     const line =
//       document.createElement("div");

//     line.className =
//       "line progress-line";

//     output.appendChild(line);

//     const startTime =
//       performance.now();

//     while (true) {

//       const elapsed =
//         performance.now() -
//         startTime;

//       const percent =
//         Math.min(
//           100,
//           Math.floor(
//             elapsed /
//             duration *
//             100
//           )
//         );

//       const filled =
//         Math.floor(
//           percent / 5
//         );

//       const empty =
//         20 - filled;

//       line.textContent =
//         `${label} [${"█".repeat(
//           filled
//         )}${"░".repeat(
//           empty
//         )}] ${String(
//           percent
//         ).padStart(
//           3,
//           " "
//         )}%`;

//       if (
//         percent >= 100
//       ) {
//         break;
//       }

//       await new Promise(
//         requestAnimationFrame
//       );
//     }

//     lineCount++;
//   }


//   /* ==========================================================
//      RANDOM HEX
//   ========================================================== */

//   function randomHex(length = 8) {

//     const chars =
//       "0123456789ABCDEF";

//     let result = "";

//     for (
//       let i = 0;
//       i < length;
//       i++
//     ) {

//       result +=
//         chars[
//           Math.floor(
//             Math.random() *
//             chars.length
//           )
//         ];
//     }

//     return result;
//   }


//   /* ==========================================================
//      MATRIX
//   ========================================================== */

//   const canvas =
//     document.getElementById(
//       "matrix"
//     );

//   const ctx =
//     canvas.getContext("2d");

//   let drops = [];

//   function resizeMatrix() {

//     canvas.width =
//       window.innerWidth;

//     canvas.height =
//       window.innerHeight;

//     const fontSize =
//       15;

//     const columns =
//       Math.floor(
//         canvas.width /
//         fontSize
//       );

//     drops =
//       Array(columns)
//         .fill(1)
//         .map(() =>
//           Math.random() * -50
//         );
//   }


//   function matrixFrame() {

//     ctx.fillStyle =
//       "rgba(0,0,0,0.075)";

//     ctx.fillRect(
//       0,
//       0,
//       canvas.width,
//       canvas.height
//     );

//     ctx.font =
//       "15px monospace";

//     ctx.fillStyle =
//       "#00ff55";

//     const chars =
//       "01ABCDEF0123456789<>[]{}\\/";

//     for (
//       let i = 0;
//       i < drops.length;
//       i++
//     ) {

//       const char =
//         chars[
//           Math.floor(
//             Math.random() *
//             chars.length
//           )
//         ];

//       const x =
//         i * 15;

//       const y =
//         drops[i] * 15;

//       ctx.fillText(
//         char,
//         x,
//         y
//       );

//       if (
//         y > canvas.height &&
//         Math.random() > 0.975
//       ) {

//         drops[i] = 0;
//       }

//       drops[i]++;
//     }

//     requestAnimationFrame(
//       matrixFrame
//     );
//   }


//   window.addEventListener(
//     "resize",
//     resizeMatrix
//   );

//   resizeMatrix();

//   matrixFrame();


//   /* ==========================================================
//      MAIN SIMULATION
//   ========================================================== */

//   async function runSimulation() {

//     if (running) return;

//     running = true;

//     output.innerHTML = "";

//     lineCount = 0;


//     /* ======================================================
//        PHASE 01 — BOOT
//     ====================================================== */

//     await typeLine(
//       "[BOOT] Initializing secure console...",
//       "dim",
//       14
//     );

//     await delay(
//       300,
//       650
//     );

//     await typeLine(
//       "[BOOT] Loading runtime environment...",
//       "dim",
//       11
//     );

//     await delay(
//       250,
//       550
//     );

//     burst([
//       {
//         text:
//           "[OK] Kernel interface initialized.",
//         type: "success"
//       },

//       {
//         text:
//           "[OK] Memory channel synchronized.",
//         type: "success"
//       },

//       {
//         text:
//           "[OK] Session handshake complete.",
//         type: "success"
//       }
//     ]);

//     await delay(
//       500,
//       850
//     );


//     /* ======================================================
//        PHASE 02 — ENVIRONMENT
//     ====================================================== */

//     await typeLine(
//       "",
//       "dim",
//       1
//     );

//     await typeLine(
//       "[ENV] Detecting execution environment...",
//       "cyan",
//       7
//     );

//     await delay(
//       250,
//       450
//     );

//     burst([
//       "[ENV] PLATFORM ............... LOCAL",
//       "[ENV] DISPLAY ............... CONNECTED",
//       "[ENV] RUNTIME ............... ACTIVE",
//       "[ENV] SESSION ............... UNRESOLVED"
//     ]);

//     await delay(
//       450,
//       750
//     );

//     await typeLine(
//       `[ENV] SESSION ID ............ ${randomHex(12)}`,
//       "purple",
//       5
//     );

//     await typeLine(
//       `[ENV] CHANNEL KEY ........... ${randomHex(16)}`,
//       "purple",
//       4
//     );

//     await delay(
//       400,
//       700
//     );


//     /* ======================================================
//        PHASE 03 — VIRTUAL SCAN
//     ====================================================== */

//     await typeLine(
//       "------------------------------------------------------------",
//       "dim",
//       2
//     );

//     await typeLine(
//       "[SCAN] Enumerating virtual endpoints...",
//       "cyan",
//       7
//     );

//     await delay(
//       250,
//       450
//     );

//     burst([
//       "[SCAN] NODE-07 ............... RESPONSE 18ms",
//       "[SCAN] NODE-12 ............... RESPONSE 24ms",
//       "[SCAN] NODE-19 ............... RESPONSE 31ms",
//       "[SCAN] NODE-24 ............... RESPONSE 12ms",
//       "[SCAN] NODE-31 ............... RESPONSE 09ms"
//     ]);

//     await delay(
//       450,
//       800
//     );

//     await typeLine(
//       "[SCAN] Mapping session topology...",
//       "cyan",
//       6
//     );

//     await progress(
//       "[SCAN] topology",
//       1300
//     );

//     await delay(
//       300,
//       600
//     );


//     /* ======================================================
//        PHASE 04 — MEMORY DIAGNOSTIC
//     ====================================================== */

//     await typeLine(
//       "[MEM] Inspecting virtual memory map...",
//       "cyan",
//       6
//     );

//     await delay(
//       300,
//       500
//     );

//     burst([
//       "[MEM] 0x0000-0x1FFF ........ AVAILABLE",
//       "[MEM] 0x2000-0x3FFF ........ ALLOCATED",
//       "[MEM] 0x4000-0x5FFF ........ RESERVED",
//       "[MEM] 0x6000-0x7FFF ........ UNKNOWN"
//     ]);

//     await delay(
//       350,
//       650
//     );

//     await typeLine(
//       "[MEM] Unexpected state transition detected.",
//       "yellow",
//       7
//     );

//     await delay(
//       400,
//       650
//     );


//     /* ======================================================
//        PHASE 05 — SYSTEM MAP
//     ====================================================== */

//     await typeLine(
//       "[TRACE] Constructing virtual system map...",
//       "cyan",
//       6
//     );

//     burst([
//       "[MAP] /SYSTEM/CORE",
//       "[MAP] /SYSTEM/CONFIG",
//       "[MAP] /USER/SESSION",
//       "[MAP] /CACHE/INDEX",
//       "[MAP] /RUNTIME/TEMP",
//       "[MAP] /SERVICES/LOCAL",
//       "[MAP] /PROCESS/STATE",
//       "[MAP] /INTERFACE/LOCK"
//     ]);

//     await delay(
//       450,
//       800
//     );


//     /* ======================================================
//        PHASE 06 — FIRST INSTABILITY
//     ====================================================== */

//     await typeLine(
//       "[TRACE] Synchronizing visual state...",
//       "cyan",
//       5
//     );

//     await delay(
//       250,
//       400
//     );

//     await glitch(
//       400
//     );

//     burst([
//       {
//         text:
//           "!!! SIGNAL INSTABILITY !!!",
//         type: "red"
//       },

//       {
//         text:
//           "[WARN] Visual channel desynchronized.",
//         type: "yellow"
//       },

//       {
//         text:
//           "[WARN] Session clock drift detected.",
//         type: "yellow"
//       },

//       {
//         text:
//           "[WARN] Reconstructing terminal state...",
//         type: "yellow"
//       }
//     ]);

//     await delay(
//       550,
//       850
//     );


//     /* ======================================================
//        PHASE 07 — RECOVERY
//     ====================================================== */

//     await typeLine(
//       "[RECOVERY] Rebuilding session...",
//       "cyan",
//       7
//     );

//     await progress(
//       "[RECOVERY] channel",
//       1700
//     );

//     await delay(
//       350,
//       650
//     );

//     burst([
//       "[RECOVERY] state restored.",
//       "[RECOVERY] checksum verified.",
//       "[RECOVERY] visual channel restored."
//     ]);

//     await delay(
//       450,
//       750
//     );


//     /* ======================================================
//        PHASE 08 — SCREEN FREEZE
//     ====================================================== */

//     await typeLine(
//       "[SYSTEM] Processing anomalous response...",
//       "yellow",
//       6
//     );

//     await delay(
//       400,
//       650
//     );

//     await freezeScreen(
//       3100
//     );

//     await delay(
//       350,
//       600
//     );


//     /* ======================================================
//        PHASE 09 — SIGNAL LOSS
//     ====================================================== */

//     await typeLine(
//       "[LINK] Re-establishing visual channel...",
//       "cyan",
//       5
//     );

//     await delay(
//       350,
//       600
//     );

//     await signalInterruption();

//     await typeLine(
//       "[LINK] Signal recovered.",
//       "success",
//       7
//     );

//     await delay(
//       350,
//       600
//     );


//     /* ======================================================
//        PHASE 10 — CRITICAL WARNING
//     ====================================================== */

//     alertBox.classList.add(
//       "show"
//     );

//     document.body.classList.add(
//       "glitch"
//     );

//     await delay(
//       1000,
//       1350
//     );

//     document.body.classList.remove(
//       "glitch"
//     );

//     alertBox.classList.remove(
//       "show"
//     );

//     await delay(
//       300,
//       550
//     );


//     /* ======================================================
//        PHASE 11 — CRITICAL STATE
//     ====================================================== */

//     burst([
//       {
//         text:
//           "[CRITICAL] Session boundary crossed.",
//         type: "red"
//       },

//       {
//         text:
//           "[CRITICAL] Isolation layer unavailable.",
//         type: "red"
//       },

//       {
//         text:
//           "[CRITICAL] Runtime state unstable.",
//         type: "red"
//       },

//       {
//         text:
//           "[SYSTEM] Emergency containment initiated...",
//         type: "yellow"
//       }
//     ]);

//     await delay(
//       700,
//       1000
//     );


//     /* ======================================================
//        PHASE 12 — RAPID PROCESSING
//     ====================================================== */

//     const rapidLines = [

//       "[PROC] session.validate()",

//       "[PROC] integrity.check()",

//       "[PROC] channel.rebuild()",

//       "[PROC] environment.sync()",

//       "[PROC] cache.reindex()",

//       "[PROC] state.restore()",

//       "[PROC] runtime.verify()",

//       "[PROC] interface.lock()",

//       "[PROC] session.finalize()",

//       "[PROC] visual.commit()",

//       "[PROC] terminal.freeze()",

//       "[PROC] recovery.begin()"
//     ];

//     for (
//       const line of rapidLines
//     ) {

//       addLine(
//         line,
//         "white"
//       );

//       await delay(
//         55,
//         150
//       );
//     }


//     /* ======================================================
//        PHASE 13 — MAJOR GLITCH
//     ====================================================== */

//     await glitch(
//       650
//     );

//     await delay(
//       250,
//       450
//     );


//     /* ======================================================
//        PHASE 14 — SECOND FREEZE
//     ====================================================== */

//     await typeLine(
//       "[SYSTEM] Finalizing state transition...",
//       "yellow",
//       5
//     );

//     await delay(
//       300,
//       500
//     );

//     await freezeScreen(
//       2700
//     );

//     await delay(
//       300,
//       500
//     );


//     /* ======================================================
//        PHASE 15 — FINALIZATION
//     ====================================================== */

//     await typeLine(
//       "[FINAL] Session integrity check...",
//       "cyan",
//       6
//     );

//     await progress(
//       "[FINAL] verification",
//       1500
//     );

//     await delay(
//       400,
//       700
//     );

//     burst([

//       "",

//       "============================================================",

//       "[SYSTEM] SESSION COMPLETE",

//       "============================================================",

//       "",

//       "[STATUS] Connection ............... CLOSED",

//       "[STATUS] Runtime ................. TERMINATED",

//       "[STATUS] Visual channel .......... LOCKED",

//       "[STATUS] Session state ........... FINAL",

//       "",

//       "FINALIZING SESSION..."
//     ]);

//     await delay(
//       1000,
//       1500
//     );


//     /* ======================================================
//        FINAL SCREEN
//     ====================================================== */

//     finalScreen.classList.add(
//       "show"
//     );

//     document.body.classList.add(
//       "glitch"
//     );

//     await delay(
//       900,
//       1200
//     );

//     document.body.classList.remove(
//       "glitch"
//     );
//   }


//   /* ==========================================================
//      START
//   ========================================================== */

//   startButton.addEventListener(
//     "click",
//     async () => {

//       if (running) return;

//       await enterFullscreen();

//       start.style.display =
//         "none";

//       await delay(
//         400,
//         700
//       );

//       runSimulation();
//     }
//   );


//   /* ==========================================================
//      REVEAL
//   ========================================================== */

//   revealButton.addEventListener(
//     "click",
//     () => {

//       finalScreen.classList.remove(
//         "show"
//       );

//       document.body.classList.remove(
//         "glitch",
//         "freeze"
//       );

//       alertBox.classList.remove(
//         "show"
//       );

//       signalLoss.classList.remove(
//         "show"
//       );

//       output.innerHTML =
//         "";

//       lineCount =
//         0;

//       addLine(
//         "SIMULATION ENDED — NOTHING WAS ACCESSED.",
//         "success"
//       );

//       addLine(
//         "This page was a visual simulation only.",
//         "dim"
//       );

//       addLine(
//         "No files, accounts, camera, network or device data were accessed.",
//         "dim"
//       );

//       addLine(
//         "All terminal events displayed during the sequence were fictional.",
//         "dim"
//       );

//       running =
//         false;
//     }
//   );


//   /* ==========================================================
//      ESCAPE
//   ========================================================== */

//   document.addEventListener(
//     "keydown",
//     event => {

//       if (
//         event.key === "Escape"
//       ) {

//         document.body.classList.remove(
//           "glitch",
//           "freeze"
//         );

//         alertBox.classList.remove(
//           "show"
//         );

//         signalLoss.classList.remove(
//           "show"
//         );

//         finalScreen.classList.remove(
//           "show"
//         );

//         if (
//           document.fullscreenElement
//         ) {

//           document.exitFullscreen();
//         }
//       }
//     }
//   );


//   /* ==========================================================
//      INITIALIZATION
//   ========================================================== */

//   console.log(
//     "%c HACKER'S TERMINAL INITIALIZED ",
//     "background:#020303;color:#5cff80;font-family:monospace;padding:6px;"
//   );

//   console.log(
//     "%c Visual simulation only — no system access performed. ",
//     "color:#777;font-family:monospace;"
//   );

// })();


// version 3

// (() => {
//   "use strict";

//   /* =========================================================
//      HACKER'S TERMINAL
//      Cinematic Security Incident Simulation
//      Visual-only / harmless browser simulation
//      ========================================================= */

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
//       background: #020506;
//       color: #b8ffd0;
//       font-family:
//         "SFMono-Regular",
//         "Cascadia Code",
//         "Roboto Mono",
//         Consolas,
//         monospace;
//     }

//     body {
//       position: relative;
//       min-height: 100vh;
//       background:
//         radial-gradient(circle at 50% 45%, rgba(0,255,120,.055), transparent 42%),
//         #020506;
//     }

//     button {
//       font-family: inherit;
//     }

//     /* =====================================================
//        GLOBAL EFFECTS
//        ===================================================== */

//     #hack-app {
//       position: fixed;
//       inset: 0;
//       z-index: 10;
//       overflow: hidden;
//       background:
//         radial-gradient(circle at center, rgba(0,255,120,.025), transparent 50%),
//         #020506;
//     }

//     #matrix {
//       position: absolute;
//       inset: 0;
//       width: 100%;
//       height: 100%;
//       opacity: .12;
//       pointer-events: none;
//       mix-blend-mode: screen;
//     }

//     #scanlines {
//       position: absolute;
//       inset: 0;
//       pointer-events: none;
//       z-index: 100;
//       opacity: .15;
//       background:
//         repeating-linear-gradient(
//           to bottom,
//           rgba(255,255,255,.025) 0px,
//           rgba(255,255,255,.025) 1px,
//           transparent 1px,
//           transparent 4px
//         );
//     }

//     #vignette {
//       position: absolute;
//       inset: 0;
//       pointer-events: none;
//       z-index: 101;
//       background:
//         radial-gradient(
//           ellipse at center,
//           transparent 48%,
//           rgba(0,0,0,.2) 72%,
//           rgba(0,0,0,.7) 100%
//         );
//     }

//     #noise {
//       position: absolute;
//       inset: 0;
//       pointer-events: none;
//       z-index: 102;
//       opacity: 0;
//       background-image:
//         repeating-radial-gradient(
//           circle at 17% 32%,
//           rgba(255,255,255,.08) 0,
//           rgba(255,255,255,.08) 1px,
//           transparent 1px,
//           transparent 3px
//         );
//       mix-blend-mode: screen;
//     }

//     body.glitch #hack-app {
//       animation: screenJolt .08s steps(2) infinite;
//       filter: contrast(1.25) saturate(1.2);
//     }

//     body.glitch #noise {
//       opacity: .22;
//     }

//     body.glitch #scanlines {
//       opacity: .4;
//     }

//     body.freeze #hack-app {
//       filter: brightness(.72) contrast(1.15);
//     }

//     body.freeze #matrix {
//       opacity: .035;
//     }

//     @keyframes screenJolt {
//       0%   { transform: translate(0); }
//       25%  { transform: translate(-3px, 1px); }
//       50%  { transform: translate(3px, -1px); }
//       75%  { transform: translate(-1px, 2px); }
//       100% { transform: translate(0); }
//     }

//     /* =====================================================
//        ENTRY
//        ===================================================== */

//     #entry {
//       position: absolute;
//       inset: 0;
//       z-index: 50;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       background:
//         radial-gradient(circle at center, rgba(0,255,120,.06), transparent 38%),
//         #020506;
//       transition:
//         opacity .9s ease,
//         visibility .9s ease;
//     }

//     #entry.hidden {
//       opacity: 0;
//       visibility: hidden;
//       pointer-events: none;
//     }

//     .entry-box {
//       width: min(650px, 90vw);
//       padding: 42px;
//       border: 1px solid rgba(82,255,147,.25);
//       background: rgba(2,8,7,.82);
//       box-shadow:
//         0 0 60px rgba(0,255,120,.035),
//         inset 0 0 30px rgba(0,255,120,.018);
//       position: relative;
//     }

//     .entry-box::before,
//     .entry-box::after {
//       content: "";
//       position: absolute;
//       width: 18px;
//       height: 18px;
//       border-color: rgba(100,255,150,.65);
//       border-style: solid;
//     }

//     .entry-box::before {
//       top: -1px;
//       left: -1px;
//       border-width: 2px 0 0 2px;
//     }

//     .entry-box::after {
//       right: -1px;
//       bottom: -1px;
//       border-width: 0 2px 2px 0;
//     }

//     .entry-kicker {
//       color: #5cff91;
//       font-size: 11px;
//       letter-spacing: 3px;
//       margin-bottom: 18px;
//     }

//     .entry-title {
//       color: #d8ffe4;
//       font-size: clamp(28px, 5vw, 52px);
//       letter-spacing: 5px;
//       margin: 0 0 12px;
//       font-weight: 500;
//       text-shadow: 0 0 18px rgba(80,255,140,.15);
//     }

//     .entry-sub {
//       color: #70947d;
//       font-size: 12px;
//       line-height: 1.8;
//       margin-bottom: 30px;
//     }

//     .entry-status {
//       display: flex;
//       justify-content: space-between;
//       gap: 18px;
//       padding: 14px 0;
//       border-top: 1px solid rgba(82,255,147,.12);
//       border-bottom: 1px solid rgba(82,255,147,.12);
//       margin-bottom: 28px;
//       color: #6c9278;
//       font-size: 10px;
//       letter-spacing: 1px;
//     }

//     .entry-status strong {
//       color: #65ff96;
//       font-weight: 400;
//     }

//     #initialize {
//       width: 100%;
//       padding: 16px 22px;
//       border: 1px solid rgba(88,255,145,.48);
//       background: rgba(26,130,67,.08);
//       color: #aaffc1;
//       cursor: pointer;
//       letter-spacing: 2px;
//       font-size: 12px;
//       transition: .25s ease;
//       position: relative;
//       overflow: hidden;
//     }

//     #initialize::before {
//       content: "";
//       position: absolute;
//       left: -100%;
//       top: 0;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(
//         90deg,
//         transparent,
//         rgba(100,255,150,.1),
//         transparent
//       );
//       transition: .5s ease;
//     }

//     #initialize:hover {
//       background: rgba(26,130,67,.18);
//       border-color: rgba(88,255,145,.8);
//       box-shadow: 0 0 24px rgba(0,255,100,.08);
//     }

//     #initialize:hover::before {
//       left: 100%;
//     }

//     /* =====================================================
//        MAIN CONSOLE
//        ===================================================== */

//     #console {
//       position: absolute;
//       inset: 0;
//       z-index: 20;
//       display: flex;
//       flex-direction: column;
//       padding: 14px;
//       opacity: 0;
//       visibility: hidden;
//       transition: opacity .8s ease;
//     }

//     #console.active {
//       opacity: 1;
//       visibility: visible;
//     }

//     #console.reconfigured .dashboard {
//       opacity: 0;
//       transform: scale(.985);
//       pointer-events: none;
//     }

//     #console.reconfigured .incident-screen {
//       opacity: 1;
//       visibility: visible;
//     }

//     /* =====================================================
//        HEADER
//        ===================================================== */

//     .topbar {
//       height: 44px;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       gap: 20px;
//       border: 1px solid rgba(88,255,145,.14);
//       background: rgba(4,14,11,.72);
//       padding: 0 14px;
//       flex-shrink: 0;
//     }

//     .brand {
//       display: flex;
//       align-items: center;
//       gap: 12px;
//       min-width: 0;
//     }

//     .brand-mark {
//       width: 8px;
//       height: 8px;
//       background: #59ff8e;
//       box-shadow: 0 0 12px rgba(70,255,130,.8);
//       animation: pulse 1.4s infinite;
//     }

//     .brand-text {
//       font-size: 10px;
//       letter-spacing: 2px;
//       color: #9fc6ab;
//       white-space: nowrap;
//     }

//     .top-status {
//       display: flex;
//       align-items: center;
//       gap: 18px;
//       font-size: 9px;
//       letter-spacing: 1px;
//       color: #587261;
//       white-space: nowrap;
//     }

//     .live {
//       color: #68ff9a;
//     }

//     .live::before {
//       content: "";
//       display: inline-block;
//       width: 5px;
//       height: 5px;
//       margin-right: 6px;
//       border-radius: 50%;
//       background: currentColor;
//       box-shadow: 0 0 9px currentColor;
//       animation: pulse 1s infinite;
//     }

//     /* =====================================================
//        DASHBOARD
//        ===================================================== */

//     .dashboard {
//       position: relative;
//       flex: 1;
//       min-height: 0;
//       margin-top: 10px;
//       display: grid;
//       grid-template-columns: 1.05fr 1.7fr 1fr;
//       grid-template-rows: 1fr 1fr;
//       gap: 10px;
//       transition:
//         opacity 1s ease,
//         transform 1s ease;
//     }

//     .panel {
//       border: 1px solid rgba(88,255,145,.13);
//       background: rgba(3,12,10,.76);
//       position: relative;
//       overflow: hidden;
//       min-height: 0;
//     }

//     .panel::after {
//       content: "";
//       position: absolute;
//       inset: 0;
//       pointer-events: none;
//       background: linear-gradient(
//         120deg,
//         transparent 0%,
//         rgba(90,255,150,.018) 45%,
//         transparent 55%
//       );
//     }

//     .panel-title {
//       height: 32px;
//       padding: 0 11px;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       border-bottom: 1px solid rgba(88,255,145,.1);
//       color: #6f987d;
//       font-size: 9px;
//       letter-spacing: 1.5px;
//     }

//     .panel-title span:last-child {
//       color: #42614d;
//     }

//     .event-panel {
//       grid-row: 1 / 3;
//     }

//     .topology-panel {
//       grid-column: 2;
//       grid-row: 1 / 3;
//     }

//     .metrics-panel {
//       grid-column: 3;
//       grid-row: 1;
//     }

//     .activity-panel {
//       grid-column: 3;
//       grid-row: 2;
//     }

//     /* =====================================================
//        EVENT STREAM
//        ===================================================== */

//     #eventStream {
//       height: calc(100% - 32px);
//       padding: 10px;
//       overflow: hidden;
//       font-size: 9px;
//       line-height: 1.85;
//     }

//     .event-line {
//       color: #567361;
//       white-space: nowrap;
//       opacity: .92;
//     }

//     .event-line .time {
//       color: #3e5947;
//       margin-right: 6px;
//     }

//     .event-line .ok {
//       color: #6bcf8b;
//     }

//     .event-line .warn {
//       color: #d4b65e;
//     }

//     .event-line .critical {
//       color: #ff6868;
//     }

//     .event-line .dim {
//       color: #415548;
//     }

//     /* =====================================================
//        TOPOLOGY
//        ===================================================== */

//     .topology {
//       position: absolute;
//       inset: 32px 0 0;
//       overflow: hidden;
//     }

//     .topology-grid {
//       position: absolute;
//       inset: 0;
//       opacity: .18;
//       background-image:
//         linear-gradient(rgba(90,255,150,.09) 1px, transparent 1px),
//         linear-gradient(90deg, rgba(90,255,150,.09) 1px, transparent 1px);
//       background-size: 36px 36px;
//     }

//     .node {
//       position: absolute;
//       width: 38px;
//       height: 38px;
//       border: 1px solid rgba(95,255,150,.35);
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       color: #73b889;
//       font-size: 9px;
//       background: rgba(0,20,12,.85);
//       box-shadow: 0 0 15px rgba(0,255,100,.025);
//       transition:
//         border-color .5s ease,
//         box-shadow .5s ease,
//         color .5s ease;
//     }

//     .node::after {
//       content: "";
//       position: absolute;
//       width: 5px;
//       height: 5px;
//       border-radius: 50%;
//       right: -3px;
//       top: -3px;
//       background: #54ff91;
//       box-shadow: 0 0 8px #54ff91;
//     }

//     .node.n1 { left: 12%; top: 16%; }
//     .node.n2 { left: 42%; top: 12%; }
//     .node.n3 { right: 13%; top: 23%; }
//     .node.n4 { left: 20%; top: 50%; }
//     .node.n5 { left: 48%; top: 46%; }
//     .node.n6 { right: 18%; top: 55%; }
//     .node.n7 { left: 37%; bottom: 13%; }
//     .node.n8 { right: 8%; bottom: 12%; }

//     .node.central {
//       width: 52px;
//       height: 52px;
//       left: calc(50% - 26px);
//       top: calc(50% - 26px);
//       border-color: rgba(110,255,160,.7);
//       color: #a4ffc0;
//       box-shadow: 0 0 25px rgba(0,255,120,.08);
//     }

//     .connection {
//       position: absolute;
//       height: 1px;
//       background: linear-gradient(
//         90deg,
//         transparent,
//         rgba(90,255,150,.38),
//         transparent
//       );
//       transform-origin: left center;
//       opacity: .45;
//       animation: connectionPulse 2.2s infinite;
//     }

//     .c1 { width: 27%; left: 18%; top: 25%; transform: rotate(-12deg); }
//     .c2 { width: 25%; left: 45%; top: 24%; transform: rotate(12deg); }
//     .c3 { width: 28%; left: 23%; top: 52%; transform: rotate(-8deg); }
//     .c4 { width: 25%; left: 50%; top: 52%; transform: rotate(7deg); }
//     .c5 { width: 22%; left: 40%; top: 60%; transform: rotate(70deg); }
//     .c6 { width: 25%; left: 50%; top: 62%; transform: rotate(-35deg); }

//     .node.degraded {
//       border-color: rgba(255,190,70,.8);
//       color: #e6c36b;
//       box-shadow: 0 0 20px rgba(255,180,50,.08);
//     }

//     .node.degraded::after {
//       background: #e5b84d;
//       box-shadow: 0 0 9px #e5b84d;
//     }

//     .node.lost {
//       border-color: rgba(255,70,70,.75);
//       color: #ff7474;
//       opacity: .55;
//     }

//     .node.lost::after {
//       background: #ff5555;
//       box-shadow: 0 0 9px #ff5555;
//     }

//     /* =====================================================
//        METRICS
//        ===================================================== */

//     .metrics {
//       padding: 12px;
//       display: grid;
//       gap: 11px;
//     }

//     .metric {
//       position: relative;
//     }

//     .metric-head {
//       display: flex;
//       justify-content: space-between;
//       font-size: 8px;
//       color: #567361;
//       margin-bottom: 5px;
//       letter-spacing: 1px;
//     }

//     .metric-value {
//       color: #9cefb1;
//     }

//     .bar {
//       height: 4px;
//       background: rgba(100,255,150,.07);
//       overflow: hidden;
//     }

//     .bar > span {
//       display: block;
//       height: 100%;
//       width: 40%;
//       background: rgba(95,255,145,.6);
//       box-shadow: 0 0 8px rgba(95,255,145,.25);
//       transition: width .7s ease;
//     }

//     .mini-chart {
//       height: 42px;
//       display: flex;
//       align-items: flex-end;
//       gap: 3px;
//       margin-top: 3px;
//     }

//     .mini-chart i {
//       flex: 1;
//       height: 20%;
//       background: rgba(90,255,150,.3);
//       transition: height .35s ease;
//     }

//     /* =====================================================
//        ACTIVITY
//        ===================================================== */

//     #activity {
//       padding: 10px;
//       font-size: 8px;
//       line-height: 1.9;
//       color: #526b5b;
//       overflow: hidden;
//     }

//     .activity-row {
//       display: flex;
//       justify-content: space-between;
//       gap: 8px;
//       border-bottom: 1px solid rgba(100,255,150,.045);
//     }

//     .activity-row span:last-child {
//       color: #6bbd83;
//     }

//     /* =====================================================
//        INCIDENT SCREEN
//        ===================================================== */

//     .incident-screen {
//       position: absolute;
//       inset: 54px 0 0;
//       z-index: 30;
//       opacity: 0;
//       visibility: hidden;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       transition: opacity 1s ease;
//       background:
//         radial-gradient(circle at center, rgba(255,40,40,.025), transparent 45%);
//     }

//     .incident-core {
//       width: min(720px, 88vw);
//       text-align: center;
//     }

//     .incident-label {
//       color: #6e8175;
//       letter-spacing: 5px;
//       font-size: 10px;
//       margin-bottom: 28px;
//     }

//     .incident-main {
//       color: #ff6969;
//       font-size: clamp(32px, 7vw, 76px);
//       letter-spacing: 8px;
//       font-weight: 400;
//       text-shadow:
//         0 0 20px rgba(255,50,50,.2),
//         0 0 60px rgba(255,50,50,.06);
//       margin-bottom: 35px;
//     }

//     .incident-lines {
//       border-top: 1px solid rgba(255,100,100,.16);
//       border-bottom: 1px solid rgba(255,100,100,.16);
//       padding: 18px 0;
//       display: grid;
//       gap: 10px;
//       text-align: left;
//       max-width: 520px;
//       margin: auto;
//       font-size: 9px;
//       letter-spacing: 1px;
//     }

//     .incident-line {
//       display: flex;
//       justify-content: space-between;
//       color: #705d5d;
//     }

//     .incident-line strong {
//       color: #d47777;
//       font-weight: 400;
//     }

//     /* =====================================================
//        CRITICAL OVERLAY
//        ===================================================== */

//     #critical {
//       position: absolute;
//       inset: 0;
//       z-index: 70;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       background: rgba(3,0,0,.82);
//       opacity: 0;
//       visibility: hidden;
//       pointer-events: none;
//       transition: opacity .3s ease;
//     }

//     #critical.active {
//       opacity: 1;
//       visibility: visible;
//     }

//     .critical-box {
//       width: min(700px, 86vw);
//       padding: 34px;
//       border: 1px solid rgba(255,80,80,.5);
//       background: rgba(15,2,2,.85);
//       box-shadow:
//         0 0 60px rgba(255,30,30,.06),
//         inset 0 0 40px rgba(255,30,30,.025);
//       text-align: center;
//     }

//     .critical-title {
//       color: #ff6666;
//       font-size: clamp(28px, 5vw, 55px);
//       letter-spacing: 6px;
//       margin-bottom: 15px;
//     }

//     .critical-sub {
//       color: #a86d6d;
//       font-size: 10px;
//       letter-spacing: 2px;
//     }

//     /* =====================================================
//        SIGNAL LOSS
//        ===================================================== */

//     #signalLoss {
//       position: absolute;
//       inset: 0;
//       z-index: 80;
//       background: #000;
//       color: #a6aaa7;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-direction: column;
//       opacity: 0;
//       visibility: hidden;
//       pointer-events: none;
//     }

//     #signalLoss.active {
//       opacity: 1;
//       visibility: visible;
//     }

//     .signal-title {
//       font-size: 13px;
//       letter-spacing: 7px;
//       margin-bottom: 12px;
//     }

//     .signal-sub {
//       color: #555;
//       font-size: 8px;
//       letter-spacing: 2px;
//     }

//     /* =====================================================
//        FINAL REVEAL
//        ===================================================== */

//     #reveal {
//       position: absolute;
//       inset: 0;
//       z-index: 90;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       background:
//         radial-gradient(circle at center, rgba(0,255,120,.045), transparent 42%),
//         #020506;
//       opacity: 0;
//       visibility: hidden;
//       transition: opacity 1s ease;
//     }

//     #reveal.active {
//       opacity: 1;
//       visibility: visible;
//     }

//     .reveal-box {
//       width: min(720px, 88vw);
//       text-align: center;
//     }

//     .reveal-status {
//       color: #5cff91;
//       font-size: 10px;
//       letter-spacing: 5px;
//       margin-bottom: 20px;
//     }

//     .reveal-title {
//       font-size: clamp(30px, 6vw, 65px);
//       color: #d7ffe3;
//       letter-spacing: 6px;
//       margin-bottom: 28px;
//     }

//     .reveal-text {
//       color: #5f7968;
//       font-size: 10px;
//       line-height: 2.1;
//       letter-spacing: 1px;
//       margin-bottom: 32px;
//     }

//     .reveal-actions {
//       display: flex;
//       justify-content: center;
//       gap: 10px;
//       flex-wrap: wrap;
//     }

//     .reveal-btn {
//       padding: 12px 20px;
//       border: 1px solid rgba(88,255,145,.3);
//       background: rgba(30,120,60,.07);
//       color: #8ed9a5;
//       font-family: inherit;
//       font-size: 9px;
//       letter-spacing: 2px;
//       cursor: pointer;
//       transition: .2s ease;
//     }

//     .reveal-btn:hover {
//       border-color: rgba(88,255,145,.7);
//       background: rgba(30,120,60,.14);
//     }

//     /* =====================================================
//        UTILITY
//        ===================================================== */

//     .hidden {
//       display: none !important;
//     }

//     #freezeMessage {
//       position: absolute;
//       inset: 0;
//       z-index: 75;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       pointer-events: none;
//       opacity: 0;
//       color: rgba(180,255,205,.28);
//       font-size: 9px;
//       letter-spacing: 4px;
//     }

//     body.freeze #freezeMessage {
//       opacity: .45;
//     }

//     @keyframes pulse {
//       0%, 100% { opacity: .45; }
//       50% { opacity: 1; }
//     }

//     @keyframes connectionPulse {
//       0%, 100% { opacity: .18; }
//       50% { opacity: .6; }
//     }

//     @media (max-width: 900px) {
//       .dashboard {
//         grid-template-columns: 1fr 1fr;
//         grid-template-rows: 1.2fr 1fr 1fr;
//       }

//       .event-panel {
//         grid-column: 1;
//         grid-row: 1 / 3;
//       }

//       .topology-panel {
//         grid-column: 2;
//         grid-row: 1 / 3;
//       }

//       .metrics-panel {
//         grid-column: 1 / 3;
//         grid-row: 3;
//       }

//       .activity-panel {
//         display: none;
//       }

//       .top-status span:not(.live) {
//         display: none;
//       }
//     }

//     @media (max-width: 620px) {
//       #console {
//         padding: 7px;
//       }

//       .topbar {
//         height: 38px;
//       }

//       .brand-text {
//         font-size: 8px;
//       }

//       .dashboard {
//         grid-template-columns: 1fr;
//         grid-template-rows: 1.1fr 1fr 1fr;
//       }

//       .event-panel,
//       .topology-panel,
//       .metrics-panel {
//         grid-column: 1;
//       }

//       .event-panel {
//         grid-row: 1;
//       }

//       .topology-panel {
//         grid-row: 2;
//       }

//       .metrics-panel {
//         grid-row: 3;
//       }

//       .entry-box {
//         padding: 28px 22px;
//       }

//       .entry-status {
//         flex-direction: column;
//         gap: 7px;
//       }
//     }

//     @media (prefers-reduced-motion: reduce) {
//       *,
//       *::before,
//       *::after {
//         animation-duration: .01ms !important;
//         animation-iteration-count: 1 !important;
//         scroll-behavior: auto !important;
//         transition-duration: .01ms !important;
//       }
//     }
//   `;

//   document.head.appendChild(style);

//   /* =========================================================
//      HTML
//      ========================================================= */

//   document.body.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <div id="hack-app">

//         <canvas id="matrix"></canvas>

//         <div id="scanlines"></div>
//         <div id="vignette"></div>
//         <div id="noise"></div>

//         <!-- ENTRY -->
//         <section id="entry">
//           <div class="entry-box">

//             <div class="entry-kicker">
//               SECURE SESSION / LOCAL CONSOLE
//             </div>

//             <h1 class="entry-title">
//               SECURE SESSION
//             </h1>

//             <div class="entry-sub">
//               Encrypted diagnostic environment.<br>
//               Session is currently waiting for operator initialization.
//             </div>

//             <div class="entry-status">
//               <span>CHANNEL <strong>ENCRYPTED</strong></span>
//               <span>SESSION <strong>STANDBY</strong></span>
//               <span>STATUS <strong>READY</strong></span>
//             </div>

//             <button id="initialize">
//               ENTER SECURE SESSION
//             </button>

//           </div>
//         </section>

//         <!-- MAIN CONSOLE -->
//         <main id="console">

//           <header class="topbar">

//             <div class="brand">
//               <div class="brand-mark"></div>
//               <div class="brand-text">
//                 SECURE SESSION // LOCAL CONSOLE
//               </div>
//             </div>

//             <div class="top-status">
//               <span id="sessionId">SESSION: ----</span>
//               <span id="channelId">CHANNEL: ----</span>
//               <span class="live">LIVE</span>
//             </div>

//           </header>

//           <section class="dashboard">

//             <!-- EVENTS -->
//             <article class="panel event-panel">

//               <div class="panel-title">
//                 <span>EVENT STREAM</span>
//                 <span id="eventState">NORMAL</span>
//               </div>

//               <div id="eventStream"></div>

//             </article>

//             <!-- TOPOLOGY -->
//             <article class="panel topology-panel">

//               <div class="panel-title">
//                 <span>SESSION TOPOLOGY</span>
//                 <span id="topologyState">STABLE</span>
//               </div>

//               <div class="topology">

//                 <div class="topology-grid"></div>

//                 <div class="connection c1"></div>
//                 <div class="connection c2"></div>
//                 <div class="connection c3"></div>
//                 <div class="connection c4"></div>
//                 <div class="connection c5"></div>
//                 <div class="connection c6"></div>

//                 <div class="node n1">A1</div>
//                 <div class="node n2">B2</div>
//                 <div class="node n3">C3</div>
//                 <div class="node n4">D4</div>
//                 <div class="node central">CORE</div>
//                 <div class="node n6">F6</div>
//                 <div class="node n7">G7</div>
//                 <div class="node n8">H8</div>

//               </div>

//             </article>

//             <!-- METRICS -->
//             <article class="panel metrics-panel">

//               <div class="panel-title">
//                 <span>LIVE TELEMETRY</span>
//                 <span id="telemetryState">NORMAL</span>
//               </div>

//               <div class="metrics">

//                 <div class="metric">
//                   <div class="metric-head">
//                     <span>PROCESS LOAD</span>
//                     <span class="metric-value" id="cpuValue">27%</span>
//                   </div>
//                   <div class="bar">
//                     <span id="cpuBar"></span>
//                   </div>
//                 </div>

//                 <div class="metric">
//                   <div class="metric-head">
//                     <span>MEMORY STATE</span>
//                     <span class="metric-value" id="memoryValue">41%</span>
//                   </div>
//                   <div class="bar">
//                     <span id="memoryBar"></span>
//                   </div>
//                 </div>

//                 <div class="metric">
//                   <div class="metric-head">
//                     <span>CHANNEL LOAD</span>
//                     <span class="metric-value" id="channelValue">18%</span>
//                   </div>
//                   <div class="bar">
//                     <span id="channelBar"></span>
//                   </div>
//                 </div>

//                 <div class="mini-chart" id="chart"></div>

//               </div>

//             </article>

//             <!-- ACTIVITY -->
//             <article class="panel activity-panel">

//               <div class="panel-title">
//                 <span>PROCESS ACTIVITY</span>
//                 <span>MONITOR</span>
//               </div>

//               <div id="activity"></div>

//             </article>

//           </section>

//           <!-- RECONFIGURED INCIDENT STATE -->
//           <section class="incident-screen">

//             <div class="incident-core">

//               <div class="incident-label">
//                 INCIDENT 07 // SESSION INTEGRITY EVENT
//               </div>

//               <div class="incident-main">
//                 SESSION<br>COMPROMISED
//               </div>

//               <div class="incident-lines">

//                 <div class="incident-line">
//                   <span>CONTROL CHANNEL</span>
//                   <strong id="incidentControl">ESTABLISHED</strong>
//                 </div>

//                 <div class="incident-line">
//                   <span>DISPLAY CHANNEL</span>
//                   <strong>DEGRADED</strong>
//                 </div>

//                 <div class="incident-line">
//                   <span>SESSION CONTROL</span>
//                   <strong>RESTRICTED</strong>
//                 </div>

//                 <div class="incident-line">
//                   <span>INTEGRITY</span>
//                   <strong id="incidentIntegrity">12%</strong>
//                 </div>

//               </div>

//             </div>

//           </section>

//         </main>

//         <!-- CRITICAL -->
//         <div id="critical">

//           <div class="critical-box">
//             <div class="critical-title">
//               CONTROL STATE
//             </div>

//             <div class="critical-sub">
//               SESSION RESPONSE CHANNEL UNSTABLE
//             </div>
//           </div>

//         </div>

//         <!-- SIGNAL LOSS -->
//         <div id="signalLoss">

//           <div class="signal-title">
//             SIGNAL LOST
//           </div>

//           <div class="signal-sub">
//             ATTEMPTING SESSION RECOVERY
//           </div>

//         </div>

//         <!-- FREEZE -->
//         <div id="freezeMessage">
//           RESPONSE TIMEOUT
//         </div>

//         <!-- FINAL REVEAL -->
//         <section id="reveal">

//           <div class="reveal-box">

//             <div class="reveal-status">
//               INCIDENT TERMINATED
//             </div>

//             <div class="reveal-title">
//               SIMULATION COMPLETE
//             </div>

//             <div class="reveal-text">
//               This was a visual security simulation.<br><br>
//               No files were accessed.<br>
//               No accounts were accessed.<br>
//               No network was scanned.<br>
//               No camera, microphone or device data was accessed.<br>
//               All terminal events displayed during the sequence were fictional.
//             </div>

//             <div class="reveal-actions">

//               <button class="reveal-btn" id="restart">
//                 RUN AGAIN
//               </button>

//               <button class="reveal-btn" id="exit">
//                 EXIT
//               </button>

//             </div>

//           </div>

//         </section>

//       </div>
//     `
//   );

//   /* =========================================================
//      ELEMENTS
//      ========================================================= */

//   const entry = document.getElementById("entry");
//   const initialize = document.getElementById("initialize");
//   const consoleEl = document.getElementById("console");
//   const reveal = document.getElementById("reveal");
//   const restart = document.getElementById("restart");
//   const exit = document.getElementById("exit");

//   const eventStream = document.getElementById("eventStream");
//   const eventState = document.getElementById("eventState");
//   const topologyState = document.getElementById("topologyState");
//   const telemetryState = document.getElementById("telemetryState");

//   const sessionId = document.getElementById("sessionId");
//   const channelId = document.getElementById("channelId");

//   const cpuValue = document.getElementById("cpuValue");
//   const memoryValue = document.getElementById("memoryValue");
//   const channelValue = document.getElementById("channelValue");

//   const cpuBar = document.getElementById("cpuBar");
//   const memoryBar = document.getElementById("memoryBar");
//   const channelBar = document.getElementById("channelBar");

//   const chart = document.getElementById("chart");
//   const activity = document.getElementById("activity");

//   const critical = document.getElementById("critical");
//   const signalLoss = document.getElementById("signalLoss");

//   const nodes = [...document.querySelectorAll(".node")];

//   /* =========================================================
//      MATRIX
//      ========================================================= */

//   const canvas = document.getElementById("matrix");
//   const ctx = canvas.getContext("2d");

//   let matrixWidth = 0;
//   let matrixHeight = 0;
//   let matrixColumns = 0;
//   let matrixDrops = [];

//   const matrixChars =
//     "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}#$%";

//   function resizeMatrix() {
//     const ratio = Math.min(window.devicePixelRatio || 1, 2);

//     matrixWidth = window.innerWidth;
//     matrixHeight = window.innerHeight;

//     canvas.width = matrixWidth * ratio;
//     canvas.height = matrixHeight * ratio;
//     canvas.style.width = matrixWidth + "px";
//     canvas.style.height = matrixHeight + "px";

//     ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

//     matrixColumns = Math.floor(matrixWidth / 15);

//     matrixDrops = Array.from(
//       { length: matrixColumns },
//       () => Math.random() * matrixHeight / 15
//     );
//   }

//   function drawMatrix() {
//     ctx.fillStyle = "rgba(2,5,6,.09)";
//     ctx.fillRect(0, 0, matrixWidth, matrixHeight);

//     ctx.font = "11px monospace";
//     ctx.fillStyle = "rgba(72,255,130,.52)";

//     for (let i = 0; i < matrixColumns; i++) {

//       const char =
//         matrixChars[Math.floor(Math.random() * matrixChars.length)];

//       const x = i * 15;
//       const y = matrixDrops[i] * 15;

//       ctx.fillText(char, x, y);

//       if (y > matrixHeight && Math.random() > .975) {
//         matrixDrops[i] = 0;
//       }

//       matrixDrops[i] += .35;
//     }

//     requestAnimationFrame(drawMatrix);
//   }

//   resizeMatrix();
//   drawMatrix();

//   window.addEventListener("resize", resizeMatrix);

//   /* =========================================================
//      HELPERS
//      ========================================================= */

//   let running = false;
//   let visualPaused = false;

//   const sleep = ms =>
//     new Promise(resolve => setTimeout(resolve, ms));

//   const random = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1)) + min;

//   function timestamp() {
//     const now = new Date();

//     return now.toLocaleTimeString("en-GB", {
//       hour12: false
//     });
//   }

//   function fakeId(length = 8) {
//     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

//     return Array.from(
//       { length },
//       () => chars[Math.floor(Math.random() * chars.length)]
//     ).join("");
//   }

//   function addEvent(message, type = "dim") {

//     const row = document.createElement("div");
//     row.className = "event-line";

//     row.innerHTML =
//       `<span class="time">${timestamp()}</span>` +
//       `<span class="${type}">${message}</span>`;

//     eventStream.appendChild(row);

//     while (eventStream.children.length > 34) {
//       eventStream.removeChild(eventStream.firstChild);
//     }

//     eventStream.scrollTop = eventStream.scrollHeight;
//   }

//   async function typeEvent(message, type = "dim", speed = 12) {

//     const row = document.createElement("div");
//     row.className = "event-line";

//     const time = document.createElement("span");
//     time.className = "time";
//     time.textContent = timestamp();

//     const text = document.createElement("span");
//     text.className = type;

//     row.appendChild(time);
//     row.appendChild(text);
//     eventStream.appendChild(row);

//     for (const char of message) {
//       text.textContent += char;

//       if (speed > 0) {
//         await sleep(speed);
//       }
//     }

//     while (eventStream.children.length > 34) {
//       eventStream.removeChild(eventStream.firstChild);
//     }

//     eventStream.scrollTop = eventStream.scrollHeight;
//   }

//   function randomTelemetry() {

//     if (visualPaused) return;

//     const cpu = random(18, 38);
//     const memory = random(35, 49);
//     const channel = random(12, 28);

//     cpuValue.textContent = cpu + "%";
//     memoryValue.textContent = memory + "%";
//     channelValue.textContent = channel + "%";

//     cpuBar.style.width = cpu + "%";
//     memoryBar.style.width = memory + "%";
//     channelBar.style.width = channel + "%";

//     [...chart.children].forEach(bar => {
//       bar.style.height = random(12, 90) + "%";
//     });
//   }

//   function createChart() {

//     chart.innerHTML = "";

//     for (let i = 0; i < 18; i++) {

//       const bar = document.createElement("i");
//       bar.style.height = random(15, 80) + "%";

//       chart.appendChild(bar);
//     }
//   }

//   function createActivity() {

//     const processes = [
//       "session.guard",
//       "telemetry.core",
//       "event.router",
//       "channel.sync",
//       "display.node",
//       "integrity.chk"
//     ];

//     activity.innerHTML = "";

//     processes.forEach((process, index) => {

//       const row = document.createElement("div");
//       row.className = "activity-row";

//       row.innerHTML = `
//         <span>${process}</span>
//         <span>${random(2, 38)}%</span>
//       `;

//       activity.appendChild(row);
//     });
//   }

//   createChart();
//   createActivity();

//   setInterval(randomTelemetry, 800);

//   /* =========================================================
//      GLITCH
//      ========================================================= */

//   async function glitch(duration = 500) {

//     document.body.classList.add("glitch");

//     await sleep(duration);

//     document.body.classList.remove("glitch");
//   }

//   /* =========================================================
//      SIGNAL LOSS
//      ========================================================= */

//   async function blackout(duration = 650) {

//     signalLoss.classList.add("active");

//     await sleep(duration);

//     signalLoss.classList.remove("active");
//   }

//   /* =========================================================
//      VISUAL FREEZE
//      ========================================================= */

//   async function freezeScreen(duration = 3000) {

//     visualPaused = true;

//     addEvent(
//       "RESPONSE TIMEOUT — DISPLAY STREAM HALTED",
//       "warn"
//     );

//     await sleep(400);

//     document.body.classList.add("freeze");

//     await sleep(duration);

//     document.body.classList.remove("freeze");

//     await sleep(300);

//     visualPaused = false;

//     await glitch(180);

//     addEvent(
//       "DISPLAY STREAM RESTORED",
//       "warn"
//     );
//   }

//   /* =========================================================
//      PROGRESS
//      ========================================================= */

//   async function progress(label, duration, start = 0, end = 100) {

//     const startTime = performance.now();

//     while (true) {

//       const elapsed = performance.now() - startTime;
//       const ratio = Math.min(elapsed / duration, 1);

//       const value =
//         Math.floor(start + (end - start) * ratio);

//       addEvent(
//         `${label} ${String(value).padStart(3, " ")}%`,
//         value >= 85 ? "ok" : "dim"
//       );

//       await sleep(650);

//       if (ratio >= 1) break;
//     }
//   }

//   /* =========================================================
//      PHASE 1 — BOOT
//      ========================================================= */

//   async function bootSequence() {

//     await typeEvent(
//       "SECURE SESSION INITIALIZING",
//       "ok",
//       20
//     );

//     await sleep(800);

//     await typeEvent(
//       "CHANNEL HANDSHAKE ACCEPTED",
//       "ok",
//       15
//     );

//     await sleep(700);

//     await typeEvent(
//       "LOCAL CONSOLE READY",
//       "ok",
//       15
//     );

//     await sleep(1000);
//   }

//   /* =========================================================
//      PHASE 2 — NORMAL SYSTEM
//      ========================================================= */

//   async function normalSystem() {

//     eventState.textContent = "NORMAL";
//     topologyState.textContent = "STABLE";
//     telemetryState.textContent = "NORMAL";

//     await typeEvent(
//       "ENVIRONMENT INTEGRITY CHECK ........ OK",
//       "ok",
//       10
//     );

//     await sleep(800);

//     await typeEvent(
//       "SESSION TOKEN VALIDATED ............. OK",
//       "ok",
//       10
//     );

//     await sleep(700);

//     await typeEvent(
//       "EVENT ROUTER ONLINE ................ OK",
//       "ok",
//       10
//     );

//     await sleep(800);

//     await typeEvent(
//       "TELEMETRY STREAM SYNCHRONIZED ....... OK",
//       "ok",
//       9
//     );

//     await sleep(900);

//     await typeEvent(
//       "SYSTEM STATE ........................ STABLE",
//       "ok",
//       10
//     );

//     await sleep(1800);
//   }

//   /* =========================================================
//      PHASE 3 — FIRST ANOMALY
//      ========================================================= */

//   async function firstAnomaly() {

//     await typeEvent(
//       "UNKNOWN EVENT RECEIVED",
//       "warn",
//       18
//     );

//     await sleep(1200);

//     await typeEvent(
//       "EVENT CORRELATION .................. RUNNING",
//       "warn",
//       10
//     );

//     await sleep(1200);

//     const node = nodes[random(0, nodes.length - 1)];

//     node.classList.add("degraded");

//     topologyState.textContent = "DEGRADED";

//     await typeEvent(
//       "NODE RESPONSE DELAY DETECTED",
//       "warn",
//       12
//     );

//     await sleep(1000);

//     await typeEvent(
//       "CONTROL RESPONSE ................... 847ms",
//       "warn",
//       10
//     );

//     await sleep(1300);
//   }

//   /* =========================================================
//      PHASE 4 — CASCADE
//      ========================================================= */

//   async function anomalyCascade() {

//     eventState.textContent = "ANOMALY";
//     telemetryState.textContent = "ELEVATED";

//     const messages = [
//       "EVENT RATE ABOVE BASELINE",
//       "CHANNEL LATENCY INCREASING",
//       "SESSION RESPONSE DELAYED",
//       "UNEXPECTED STATE TRANSITION",
//       "TOPOLOGY RECONCILIATION REQUIRED",
//       "DISPLAY EVENT QUEUE EXPANDING",
//       "CONTROL CHANNEL UNSTABLE"
//     ];

//     for (const message of messages) {

//       await typeEvent(
//         message,
//         "warn",
//         random(5, 11)
//       );

//       await sleep(random(550, 950));
//     }

//     nodes[random(0, nodes.length - 1)].classList.add("degraded");
//     nodes[random(0, nodes.length - 1)].classList.add("degraded");

//     cpuValue.textContent = "71%";
//     cpuBar.style.width = "71%";

//     channelValue.textContent = "64%";
//     channelBar.style.width = "64%";

//     await sleep(1200);
//   }

//   /* =========================================================
//      PHASE 5 — CONTROL INSTABILITY
//      ========================================================= */

//   async function controlInstability() {

//     eventState.textContent = "UNSTABLE";
//     topologyState.textContent = "UNSTABLE";
//     telemetryState.textContent = "UNSTABLE";

//     await typeEvent(
//       "CONTROL CHANNEL ................. UNSTABLE",
//       "warn",
//       10
//     );

//     await sleep(700);

//     await typeEvent(
//       "DISPLAY CHANNEL ................. DEGRADED",
//       "warn",
//       10
//     );

//     await sleep(800);

//     await typeEvent(
//       "SESSION RESPONSE ................ DELAYED",
//       "warn",
//       10
//     );

//     await sleep(900);

//     await glitch(350);

//     await sleep(700);
//   }

//   /* =========================================================
//      PHASE 6 — FIRST FREEZE
//      ========================================================= */

//   async function firstFreeze() {

//     await typeEvent(
//       "RESPONSE TIMEOUT",
//       "critical",
//       15
//     );

//     await sleep(800);

//     await freezeScreen(3200);

//     await sleep(700);

//     await blackout(550);
//   }

//   /* =========================================================
//      PHASE 7 — RECOVERY
//      ========================================================= */

//   async function recovery() {

//     await typeEvent(
//       "DISPLAY CHANNEL RECOVERING",
//       "warn",
//       10
//     );

//     await sleep(900);

//     await progress(
//       "SESSION RECOVERY",
//       5200,
//       12,
//       100
//     );

//     await sleep(700);

//     await typeEvent(
//       "DISPLAY ......................... RESTORED",
//       "ok",
//       10
//     );

//     await sleep(700);

//     await typeEvent(
//       "MEMORY STATE .................... VERIFIED",
//       "ok",
//       10
//     );

//     await sleep(700);

//     await typeEvent(
//       "EVENT STREAM .................... FAILED",
//       "critical",
//       10
//     );

//     await sleep(700);

//     await typeEvent(
//       "CONTROL CHANNEL ................. UNKNOWN",
//       "critical",
//       10
//     );

//     await sleep(1400);
//   }

//   /* =========================================================
//      PHASE 8 — RECONFIGURATION
//      ========================================================= */

//   async function reconfigureInterface() {

//     await typeEvent(
//       "SESSION STATE: UNKNOWN",
//       "critical",
//       14
//     );

//     await sleep(1200);

//     consoleEl.classList.add("reconfigured");

//     await sleep(1700);
//   }

//   /* =========================================================
//      PHASE 9 — TAKEOVER STATE
//      ========================================================= */

//   async function takeoverState() {

//     await sleep(1200);

//     critical.classList.add("active");

//     await sleep(1700);

//     critical.classList.remove("active");

//     await sleep(900);

//     document.getElementById("incidentControl").textContent =
//       "ESTABLISHED";

//     document.getElementById("incidentIntegrity").textContent =
//       "12%";

//     await sleep(2200);
//   }

//   /* =========================================================
//      PHASE 10 — SECOND FREEZE
//      ========================================================= */

//   async function secondFreeze() {

//     await sleep(900);

//     await glitch(250);

//     await sleep(800);

//     await freezeScreen(3900);

//     await sleep(300);

//     await blackout(750);

//     await sleep(700);
//   }

//   /* =========================================================
//      PHASE 11 — FINAL INCIDENT
//      ========================================================= */

//   async function finalIncident() {

//     consoleEl.classList.remove("reconfigured");

//     await sleep(500);

//     eventState.textContent = "CRITICAL";
//     topologyState.textContent = "UNKNOWN";
//     telemetryState.textContent = "FAILED";

//     await typeEvent(
//       "INCIDENT 07 REINITIALIZING",
//       "critical",
//       14
//     );

//     await sleep(700);

//     const finalEvents = [
//       "SESSION INTEGRITY ............... 31%",
//       "CONTROL CHANNEL ................. UNKNOWN",
//       "DISPLAY CHANNEL ................. DEGRADED",
//       "STATE RECONCILIATION ............ RUNNING",
//       "EVENT QUEUE ..................... FLUSHING",
//       "SESSION CONTROL ................. RESTRICTED",
//       "INTEGRITY VERIFICATION .......... FAILED",
//       "RECOVERY PATH ................... UNAVAILABLE"
//     ];

//     for (const event of finalEvents) {

//       await typeEvent(
//         event,
//         "critical",
//         random(5, 12)
//       );

//       await sleep(random(450, 700));
//     }

//     await sleep(900);

//     await glitch(500);

//     await sleep(800);
//   }

//   /* =========================================================
//      PHASE 12 — SILENCE
//      ========================================================= */

//   async function finalSilence() {

//     visualPaused = true;

//     eventStream.innerHTML = "";

//     const silence = document.createElement("div");

//     silence.style.cssText = `
//       position:absolute;
//       inset:32px 0 0;
//       display:flex;
//       align-items:center;
//       justify-content:center;
//       color:#718277;
//       font-size:10px;
//       letter-spacing:4px;
//     `;

//     silence.textContent = "SESSION STATE";

//     document.querySelector(".event-panel").appendChild(silence);

//     await sleep(1800);

//     silence.textContent = "UNKNOWN";

//     await sleep(1800);

//     await blackout(850);

//     silence.remove();

//     visualPaused = false;
//   }

//   /* =========================================================
//      FINAL REVEAL
//      ========================================================= */

//   async function showReveal() {

//     reveal.classList.add("active");

//     await sleep(1000);
//   }

//   /* =========================================================
//      FULLSCREEN
//      ========================================================= */

//   async function requestFullscreen() {

//     try {

//       if (!document.fullscreenElement) {

//         await document.documentElement.requestFullscreen();

//       }

//     } catch {
//       // Fullscreen may be blocked by browser settings.
//     }
//   }

//   /* =========================================================
//      MAIN SIMULATION
//      ========================================================= */

//   async function runSimulation() {

//     if (running) return;

//     running = true;

//     await requestFullscreen();

//     entry.classList.add("hidden");

//     consoleEl.classList.add("active");

//     sessionId.textContent =
//       "SESSION: " + fakeId(8);

//     channelId.textContent =
//       "CHANNEL: " + fakeId(6);

//     await sleep(900);

//     await bootSequence();

//     await normalSystem();

//     await firstAnomaly();

//     await anomalyCascade();

//     await controlInstability();

//     await firstFreeze();

//     await recovery();

//     await reconfigureInterface();

//     await takeoverState();

//     await secondFreeze();

//     await finalIncident();

//     await finalSilence();

//     await showReveal();
//   }

//   /* =========================================================
//      RESET
//      ========================================================= */

//   function resetSimulation() {

//     location.reload();
//   }

//   /* =========================================================
//      EXIT
//      ========================================================= */

//   async function exitSimulation() {

//     try {

//       if (document.fullscreenElement) {
//         await document.exitFullscreen();
//       }

//     } catch {}

//     location.reload();
//   }

//   /* =========================================================
//      EVENTS
//      ========================================================= */

//   initialize.addEventListener(
//     "click",
//     runSimulation
//   );

//   restart.addEventListener(
//     "click",
//     resetSimulation
//   );

//   exit.addEventListener(
//     "click",
//     exitSimulation
//   );

//   document.addEventListener(
//     "keydown",
//     async event => {

//       if (event.key === "Escape") {

//         try {

//           if (document.fullscreenElement) {
//             await document.exitFullscreen();
//           }

//         } catch {}

//         if (running) {
//           reveal.classList.add("active");
//         }
//       }

//     }
//   );

// })();
(() => {
    "use strict";

    /*
     * HACKER'S TERMINAL — V2
     * FULL-SCREEN VISUAL TAKEOVER SIMULATION
     *
     * Everything here is visual only.
     *
     * It does NOT:
     * - read cookies
     * - read localStorage/sessionStorage
     * - access files
     * - access accounts
     * - access camera/microphone
     * - scan the network
     * - communicate with external servers
     * - disable browser Refresh / Back / navigation
     *
     * The page may visually freeze and suppress page-local interaction,
     * but browser controls remain under browser control.
     */

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
            background: #000;
            font-family:
                "SFMono-Regular",
                "Cascadia Code",
                "Roboto Mono",
                Consolas,
                monospace;
        }

        body {
            color: #f0f2f2;
            user-select: none;
            cursor: default;
        }

        #v2 {
            position: fixed;
            inset: 0;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at 50% 45%,
                    rgba(25, 31, 28, .55),
                    transparent 55%
                ),
                #030504;
        }

        /* -------------------------------------------------------
           BACKGROUND
        ------------------------------------------------------- */

        #background-grid {
            position: absolute;
            inset: 0;
            opacity: .22;
            background-image:
                linear-gradient(
                    rgba(255,255,255,.035) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255,255,255,.035) 1px,
                    transparent 1px
                );
            background-size: 42px 42px;
            animation: gridMove 8s linear infinite;
        }

        #scanlines {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: .23;
            background:
                repeating-linear-gradient(
                    to bottom,
                    transparent 0px,
                    transparent 3px,
                    rgba(255,255,255,.025) 4px
                );
        }

        #noise {
            position: absolute;
            inset: -100%;
            pointer-events: none;
            opacity: .035;
            background:
                repeating-linear-gradient(
                    0deg,
                    rgba(255,255,255,.08) 0px,
                    rgba(255,255,255,.08) 1px,
                    transparent 1px,
                    transparent 3px
                );
            animation: noise 0.13s steps(2) infinite;
        }

        /* -------------------------------------------------------
           MAIN ACTIVITY AREA
        ------------------------------------------------------- */

        #activity {
            position: absolute;
            inset: 0;
            padding: 30px;
            overflow: hidden;
        }

        #activity-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30px;
            color: rgba(225,230,229,.43);
            font-size: 9px;
            letter-spacing: .17em;
            text-transform: uppercase;
        }

        #live-indicator {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        #live-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #72ff9c;
            box-shadow: 0 0 12px rgba(114,255,156,.8);
            animation: pulse 1s infinite;
        }

        #runtime {
            opacity: .5;
        }

        #log-area {
            position: absolute;
            left: 30px;
            right: 30px;
            top: 76px;
            bottom: 25px;
            overflow: hidden;
            mask-image: linear-gradient(
                to bottom,
                transparent 0%,
                black 8%,
                black 90%,
                transparent 100%
            );
            -webkit-mask-image: linear-gradient(
                to bottom,
                transparent 0%,
                black 8%,
                black 90%,
                transparent 100%
            );
        }

        #logs {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 7px;
        }

        .log {
            width: fit-content;
            max-width: 90vw;
            font-size: clamp(9px, .85vw, 12px);
            line-height: 1.4;
            letter-spacing: .04em;
            color: rgba(230,235,234,.52);
            text-shadow: 0 0 9px rgba(255,255,255,.07);
            animation: logIn .16s ease-out;
        }

        .log.green {
            color: rgba(108,255,151,.72);
            text-shadow: 0 0 10px rgba(70,255,130,.15);
        }

        .log.white {
            color: rgba(238,242,242,.70);
        }

        .log.dim {
            color: rgba(220,225,224,.28);
        }

        .log.warn {
            color: rgba(255,198,89,.82);
        }

        .log.red {
            color: rgba(255,93,93,.88);
            text-shadow: 0 0 14px rgba(255,45,45,.20);
        }

        .log .prefix {
            opacity: .32;
            margin-right: 9px;
        }

        /* -------------------------------------------------------
           LARGE SYSTEM MESSAGES
        ------------------------------------------------------- */

        #center-message {
            position: absolute;
            inset: 0;
            z-index: 20;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            opacity: 0;
            transition: opacity .12s;
        }

        #center-inner {
            text-align: center;
            width: min(800px, 90vw);
        }

        #center-small {
            font-size: 10px;
            letter-spacing: .25em;
            color: rgba(235,240,239,.42);
            text-transform: uppercase;
        }

        #center-main {
            margin-top: 12px;
            font-family:
                Inter,
                Arial,
                sans-serif;
            font-size: clamp(25px, 4.5vw, 62px);
            font-weight: 700;
            letter-spacing: .08em;
            color: #f4f5f5;
            text-transform: uppercase;
            text-shadow:
                0 0 20px rgba(255,255,255,.13);
        }

        #center-sub {
            margin-top: 13px;
            font-family:
                Inter,
                Arial,
                sans-serif;
            font-size: clamp(11px, 1.2vw, 14px);
            color: rgba(225,230,230,.48);
        }

        #center-message.green #center-main {
            color: #83ffa7;
            text-shadow: 0 0 30px rgba(80,255,130,.18);
        }

        #center-message.warning #center-main {
            color: #ffd16b;
            text-shadow: 0 0 30px rgba(255,190,70,.18);
        }

        #center-message.danger #center-main {
            color: #ff6767;
            text-shadow: 0 0 35px rgba(255,40,40,.24);
        }

        /* -------------------------------------------------------
           NOTIFICATIONS
        ------------------------------------------------------- */

        #notifications {
            position: fixed;
            top: 25px;
            right: 25px;
            z-index: 70;
            width: min(390px, calc(100vw - 30px));
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        }

        .notification {
            position: relative;
            padding: 14px 15px;
            border: 1px solid rgba(255,255,255,.11);
            border-radius: 10px;
            background:
                linear-gradient(
                    145deg,
                    rgba(23,27,25,.97),
                    rgba(5,8,7,.97)
                );
            box-shadow:
                0 20px 60px rgba(0,0,0,.6),
                inset 0 1px 0 rgba(255,255,255,.045);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            transform: translateX(115%);
            opacity: 0;
            transition:
                transform .22s cubic-bezier(.2,.8,.2,1),
                opacity .18s;
        }

        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }

        .notification.hide {
            transform: translateX(115%);
            opacity: 0;
        }

        .notification.warning {
            border-color: rgba(255,193,75,.24);
        }

        .notification.danger {
            border-color: rgba(255,65,65,.32);
        }

        .notification.critical {
            border-color: rgba(255,45,45,.48);
            background:
                linear-gradient(
                    145deg,
                    rgba(43,9,11,.98),
                    rgba(10,4,5,.98)
                );
        }

        .notification-head {
            display: flex;
            align-items: center;
            gap: 9px;
        }

        .notification-icon {
            width: 27px;
            height: 27px;
            display: grid;
            place-items: center;
            border-radius: 7px;
            background: rgba(255,255,255,.055);
            color: rgba(240,244,243,.78);
            font-size: 13px;
        }

        .warning .notification-icon {
            color: #ffd06a;
            background: rgba(255,190,60,.08);
        }

        .danger .notification-icon,
        .critical .notification-icon {
            color: #ff7474;
            background: rgba(255,50,50,.08);
        }

        .notification-source {
            font-family:
                Inter,
                Arial,
                sans-serif;
            font-size: 9px;
            letter-spacing: .13em;
            text-transform: uppercase;
            color: rgba(235,240,239,.40);
        }

        .notification-time {
            margin-left: auto;
            font-family:
                Inter,
                Arial,
                sans-serif;
            font-size: 9px;
            color: rgba(235,240,239,.24);
        }

        .notification-title {
            margin-top: 9px;
            font-family:
                Inter,
                Arial,
                sans-serif;
            font-size: 13px;
            font-weight: 700;
            color: #f0f3f2;
        }

        .notification-body {
            margin-top: 5px;
            font-family:
                Inter,
                Arial,
                sans-serif;
            font-size: 10px;
            line-height: 1.55;
            color: rgba(230,235,234,.48);
        }

        /* -------------------------------------------------------
           WARNING OVERLAY
        ------------------------------------------------------- */

        #warning-overlay {
            position: fixed;
            inset: 0;
            z-index: 90;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(120,0,0,.08);
            border: 10px solid transparent;
            pointer-events: none;
            opacity: 0;
        }

        #warning-box {
            text-align: center;
            transform: scale(.95);
        }

        #warning-symbol {
            font-family: Arial, sans-serif;
            font-size: clamp(48px, 8vw, 100px);
            color: #ff4545;
            text-shadow:
                0 0 25px rgba(255,0,0,.4);
        }

        #warning-title {
            margin-top: 5px;
            font-family: Arial, sans-serif;
            font-size: clamp(22px, 4vw, 50px);
            font-weight: 800;
            letter-spacing: .08em;
            color: #ff5a5a;
        }

        #warning-sub {
            margin-top: 12px;
            font-family: Arial, sans-serif;
            font-size: 11px;
            letter-spacing: .17em;
            color: rgba(255,215,215,.58);
            text-transform: uppercase;
        }

        /* -------------------------------------------------------
           GLITCH / FLASH
        ------------------------------------------------------- */

        #flash {
            position: fixed;
            inset: 0;
            z-index: 100;
            background: #fff;
            opacity: 0;
            pointer-events: none;
        }

        #blackout {
            position: fixed;
            inset: 0;
            z-index: 80;
            background: #000;
            opacity: 0;
            pointer-events: none;
            transition: opacity .1s;
        }

        #red-shift,
        #blue-shift {
            position: fixed;
            inset: 0;
            z-index: 85;
            pointer-events: none;
            opacity: 0;
            mix-blend-mode: screen;
        }

        #red-shift {
            background:
                linear-gradient(
                    90deg,
                    rgba(255,0,30,.17),
                    transparent 48%,
                    rgba(255,0,30,.08)
                );
        }

        #blue-shift {
            background:
                linear-gradient(
                    90deg,
                    rgba(0,120,255,.10),
                    transparent 55%,
                    rgba(0,180,255,.08)
                );
        }

        /* -------------------------------------------------------
           FAKE BROWSER FAILURE
        ------------------------------------------------------- */

        #browser-failure {
            position: fixed;
            left: 50%;
            top: 50%;
            z-index: 110;
            width: min(440px, calc(100vw - 34px));
            padding: 23px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,.12);
            background: rgba(25,27,29,.98);
            box-shadow: 0 30px 100px rgba(0,0,0,.75);
            transform:
                translate(-50%, -50%)
                scale(.95);
            opacity: 0;
            pointer-events: none;
            transition:
                opacity .22s,
                transform .22s;
        }

        #browser-failure.show {
            opacity: 1;
            transform:
                translate(-50%, -50%)
                scale(1);
        }

        .browser-failure-title {
            font-family: Arial, sans-serif;
            font-size: 17px;
            color: #f0f2f3;
        }

        .browser-failure-text {
            margin-top: 9px;
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.55;
            color: rgba(235,239,240,.50);
        }

        .browser-failure-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 20px;
        }

        .fake-button {
            padding: 7px 12px;
            border-radius: 6px;
            border: 1px solid rgba(255,255,255,.10);
            background: rgba(255,255,255,.045);
            font-family: Arial, sans-serif;
            font-size: 10px;
            color: rgba(240,243,243,.65);
        }

        /* -------------------------------------------------------
           CRASH SCREEN
        ------------------------------------------------------- */

        #crash {
            position: fixed;
            inset: 0;
            z-index: 120;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #050607;
            opacity: 0;
            pointer-events: none;
            transition: opacity .45s;
        }

        #crash.show {
            opacity: 1;
        }

        .crash-inner {
            width: min(720px, 84vw);
        }

        .crash-face {
            font-family: Arial, sans-serif;
            font-size: clamp(65px, 9vw, 105px);
            font-weight: 200;
            color: #e9edef;
        }

        .crash-title {
            margin-top: 18px;
            font-family: Arial, sans-serif;
            font-size: clamp(19px, 2.5vw, 29px);
            color: #e9edef;
            font-weight: 350;
        }

        .crash-copy {
            margin-top: 13px;
            max-width: 620px;
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.7;
            color: rgba(225,230,232,.52);
        }

        .progress {
            width: min(430px, 100%);
            height: 4px;
            margin-top: 25px;
            border-radius: 20px;
            overflow: hidden;
            background: rgba(255,255,255,.08);
        }

        .progress-bar {
            width: 0;
            height: 100%;
            background: rgba(235,240,241,.72);
            transition: width 2.5s linear;
        }

        .crash-status {
            margin-top: 11px;
            font-family: monospace;
            font-size: 9px;
            letter-spacing: .14em;
            color: rgba(225,230,232,.32);
            text-transform: uppercase;
        }

        /* -------------------------------------------------------
           REVEAL
        ------------------------------------------------------- */

        #reveal {
            position: fixed;
            inset: 0;
            z-index: 130;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #060809;
            opacity: 0;
            pointer-events: none;
            transition: opacity .8s ease;
        }

        #reveal.show {
            opacity: 1;
            pointer-events: auto;
        }

        .reveal-inner {
            width: min(700px, 85vw);
            text-align: center;
        }

        .reveal-label {
            font-family: Arial, sans-serif;
            font-size: 10px;
            letter-spacing: .22em;
            color: rgba(225,230,232,.32);
            text-transform: uppercase;
        }

        .reveal-title {
            margin-top: 15px;
            font-family: Arial, sans-serif;
            font-size: clamp(25px, 4vw, 45px);
            font-weight: 500;
            color: #f2f4f4;
        }

        .reveal-copy {
            max-width: 620px;
            margin: 18px auto 0;
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.75;
            color: rgba(225,230,232,.50);
        }

        .replay {
            margin-top: 27px;
            padding: 10px 17px;
            border-radius: 7px;
            border: 1px solid rgba(255,255,255,.12);
            background: rgba(255,255,255,.04);
            color: rgba(240,243,244,.72);
            cursor: pointer;
            font-size: 10px;
        }

        .replay:hover {
            background: rgba(255,255,255,.08);
        }

        /* -------------------------------------------------------
           ANIMATIONS
        ------------------------------------------------------- */

        @keyframes gridMove {
            from {
                background-position: 0 0;
            }

            to {
                background-position: 42px 42px;
            }
        }

        @keyframes noise {
            0% {
                transform: translate(0,0);
            }

            25% {
                transform: translate(2%,-1%);
            }

            50% {
                transform: translate(-1%,2%);
            }

            75% {
                transform: translate(1%,1%);
            }

            100% {
                transform: translate(-2%,-1%);
            }
        }

        @keyframes pulse {
            0%,
            100% {
                opacity: .35;
            }

            50% {
                opacity: 1;
            }
        }

        @keyframes logIn {
            from {
                opacity: 0;
                transform: translateX(-10px);
            }

            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes screenShake {
            0% {
                transform: translate(0,0);
            }

            15% {
                transform: translate(-7px,2px);
            }

            30% {
                transform: translate(6px,-3px);
            }

            45% {
                transform: translate(-4px,2px);
            }

            60% {
                transform: translate(7px,-1px);
            }

            75% {
                transform: translate(-3px,-2px);
            }

            100% {
                transform: translate(0,0);
            }
        }

        @keyframes warningBlink {
            0%,
            100% {
                opacity: 0;
            }

            12% {
                opacity: 1;
            }

            20% {
                opacity: .25;
            }

            34% {
                opacity: 1;
            }

            43% {
                opacity: .1;
            }

            58% {
                opacity: 1;
            }

            70% {
                opacity: 0;
            }
        }

        @media (max-width: 600px) {
            #activity {
                padding: 17px;
            }

            #log-area {
                left: 17px;
                right: 17px;
                top: 65px;
            }

            #notifications {
                top: 12px;
                right: 12px;
                width: calc(100vw - 24px);
            }

            .log {
                font-size: 9px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: .01ms !important;
                animation-iteration-count: 1 !important;
            }
        }
    `;

    document.head.appendChild(style);

    document.body.innerHTML = `
        <main id="v2">

            <div id="background-grid"></div>
            <div id="scanlines"></div>
            <div id="noise"></div>

            <section id="activity">

                <header id="activity-header">
                    <div id="live-indicator">
                        <span id="live-dot"></span>
                        <span>LIVE SYSTEM ACTIVITY</span>
                    </div>

                    <span id="runtime">00:00</span>
                </header>

                <div id="log-area">
                    <div id="logs"></div>
                </div>

            </section>

        </main>

        <div id="center-message">
            <div id="center-inner">
                <div id="center-small"></div>
                <div id="center-main"></div>
                <div id="center-sub"></div>
            </div>
        </div>

        <div id="notifications"></div>

        <div id="warning-overlay">
            <div id="warning-box">
                <div id="warning-symbol">!</div>
                <div id="warning-title">UNAUTHORIZED ACCESS</div>
                <div id="warning-sub">
                    Session control has changed
                </div>
            </div>
        </div>

        <div id="flash"></div>
        <div id="red-shift"></div>
        <div id="blue-shift"></div>
        <div id="blackout"></div>

        <div id="browser-failure">
            <div class="browser-failure-title">
                This page isn't responding
            </div>

            <div class="browser-failure-text">
                The page appears to be unresponsive.
                You can wait for the page to respond or close it.
            </div>

            <div class="browser-failure-buttons">
                <div class="fake-button">Close page</div>
                <div class="fake-button">Wait</div>
            </div>
        </div>

        <div id="crash">
            <div class="crash-inner">

                <div class="crash-face">:(</div>

                <div class="crash-title">
                    Something went wrong.
                </div>

                <div class="crash-copy">
                    The current session encountered an unexpected
                    display failure and is attempting to recover.
                </div>

                <div class="progress">
                    <div class="progress-bar"></div>
                </div>

                <div class="crash-status">
                    Initializing recovery...
                </div>

            </div>
        </div>

        <div id="reveal">
            <div class="reveal-inner">

                <div class="reveal-label">
                    Visual Simulation
                </div>

                <div class="reveal-title">
                    Nothing was hacked.
                </div>

                <div class="reveal-copy">
                    This was a browser-local visual security simulation.
                    No cookies, files, accounts, network services, camera,
                    microphone or device data were accessed.
                    Every security event, notification, data message,
                    freeze and crash shown during the sequence was fictional.
                </div>

                <button class="replay">
                    RUN AGAIN
                </button>

            </div>
        </div>
    `;

    const root = document.getElementById("v2");
    const logs = document.getElementById("logs");
    const runtime = document.getElementById("runtime");

    const center = document.getElementById("center-message");
    const centerSmall = document.getElementById("center-small");
    const centerMain = document.getElementById("center-main");
    const centerSub = document.getElementById("center-sub");

    const notifications = document.getElementById("notifications");

    const warningOverlay = document.getElementById("warning-overlay");

    const flash = document.getElementById("flash");
    const redShift = document.getElementById("red-shift");
    const blueShift = document.getElementById("blue-shift");
    const blackout = document.getElementById("blackout");

    const browserFailure = document.getElementById("browser-failure");

    const crash = document.getElementById("crash");
    const progressBar = document.querySelector(".progress-bar");
    const crashStatus = document.querySelector(".crash-status");

    const reveal = document.getElementById("reveal");
    const replay = document.querySelector(".replay");

    let frozen = false;
    let ended = false;
    let startTime = Date.now();

    /* ---------------------------------------------------------
       TIMING
    --------------------------------------------------------- */

    const sleep = ms =>
        new Promise(resolve => setTimeout(resolve, ms));

    /* ---------------------------------------------------------
       RUNTIME COUNTER
    --------------------------------------------------------- */

    const runtimeTimer = setInterval(() => {
        if (ended) return;

        const elapsed = Date.now() - startTime;

        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const remaining = seconds % 60;

        runtime.textContent =
            `${String(minutes).padStart(2, "0")}:` +
            `${String(remaining).padStart(2, "0")}`;
    }, 250);

    /* ---------------------------------------------------------
       RANDOM LOG ENGINE
    --------------------------------------------------------- */

    const normalLogs = [
        "checking session state",
        "verifying active connection",
        "monitoring connection state",
        "checking authentication state",
        "synchronizing session state",
        "validating browser session",
        "checking active state",
        "waiting for verification response",
        "checking session integrity",
        "rebuilding connection state",
        "monitoring active session",
        "checking authorization state",
        "verifying current state",
        "checking connection integrity",
        "updating session state"
    ];

    const greenLogs = [
        "connection acknowledged",
        "session response received",
        "verification request sent",
        "state synchronization started",
        "reconnection attempt started",
        "session monitor active",
        "response received",
        "connection restored",
        "state update received",
        "recovery channel active"
    ];

    const whiteLogs = [
        "session changed",
        "new state detected",
        "active connection changed",
        "verification requested",
        "session response delayed",
        "unexpected state received",
        "access state changed",
        "session event received",
        "connection state changed",
        "recovery request received"
    ];

    const warningLogs = [
        "verification taking longer than expected",
        "unexpected session state",
        "connection response unstable",
        "session verification delayed",
        "state mismatch detected",
        "recovery attempt interrupted",
        "authentication response inconsistent"
    ];

    const dangerLogs = [
        "unrecognized session detected",
        "session verification failed",
        "access state could not be confirmed",
        "session control state changed",
        "recovery state unstable",
        "security event requires attention",
        "active session could not be verified"
    ];

    function timestamp() {
        const now = new Date();

        return now.toLocaleTimeString([], {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    function randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function addLog(text, type = "white") {
        if (ended) return;

        const line = document.createElement("div");

        line.className = `log ${type}`;

        line.innerHTML = `
            <span class="prefix">
                [${timestamp()}]
            </span>
            ${text}
        `;

        logs.appendChild(line);

        while (logs.children.length > 30) {
            logs.firstElementChild.remove();
        }
    }

    async function logBurst(count = 5, delay = 100) {
        for (let i = 0; i < count; i++) {
            const pool = [
                normalLogs,
                greenLogs,
                whiteLogs
            ];

            const selectedPool = randomItem(pool);

            addLog(
                randomItem(selectedPool),
                selectedPool === greenLogs
                    ? "green"
                    : "white"
            );

            await sleep(delay + Math.random() * 80);
        }
    }

    /* ---------------------------------------------------------
       FAKE "DATA" LOGS
       These are purely fictional strings.
    --------------------------------------------------------- */

    const simulatedDataLogs = [
        ["checking session metadata", "white"],
        ["session metadata detected", "green"],
        ["checking browser state", "white"],
        ["browser state response received", "green"],
        ["session token state: present", "green"],
        ["authorization state: changed", "warn"],
        ["local session state: unknown", "warn"],
        ["checking active session", "white"],
        ["additional session detected", "red"],
        ["session verification failed", "red"],
        ["data request interrupted", "warn"],
        ["recovery request started", "green"],
        ["session state could not be restored", "red"]
    ];

    async function simulateDataSequence() {
        for (const [text, type] of simulatedDataLogs) {
            addLog(text, type);
            await sleep(120 + Math.random() * 180);
        }
    }

    /* ---------------------------------------------------------
       CENTER MESSAGES
    --------------------------------------------------------- */

    function showCenter(
        small,
        main,
        sub = "",
        type = ""
    ) {
        center.className = type;
        center.style.opacity = "1";

        centerSmall.textContent = small;
        centerMain.textContent = main;
        centerSub.textContent = sub;
    }

    function hideCenter() {
        center.style.opacity = "0";
    }

    /* ---------------------------------------------------------
       NOTIFICATIONS
    --------------------------------------------------------- */

    function notify({
        source,
        title,
        body,
        type = "",
        icon = "!",
        duration = 1700
    }) {
        if (ended) return;

        const card = document.createElement("div");

        card.className =
            `notification ${type}`;

        card.innerHTML = `
            <div class="notification-head">

                <div class="notification-icon">
                    ${icon}
                </div>

                <div class="notification-source">
                    ${source}
                </div>

                <div class="notification-time">
                    just now
                </div>

            </div>

            <div class="notification-title">
                ${title}
            </div>

            <div class="notification-body">
                ${body}
            </div>
        `;

        notifications.appendChild(card);

        requestAnimationFrame(() => {
            card.classList.add("show");
        });

        setTimeout(() => {
            card.classList.remove("show");
            card.classList.add("hide");

            setTimeout(() => {
                card.remove();
            }, 300);
        }, duration);
    }

    /* ---------------------------------------------------------
       VISUAL EFFECTS
    --------------------------------------------------------- */

    async function flashScreen(
        opacity = .25,
        duration = 80
    ) {
        flash.style.transition = "none";
        flash.style.opacity = opacity;

        await sleep(20);

        flash.style.transition =
            `opacity ${duration}ms ease`;

        flash.style.opacity = "0";

        await sleep(duration);
    }

    async function blackoutFor(duration) {
        blackout.style.opacity = "1";

        await sleep(duration);

        blackout.style.opacity = "0";
    }

    async function glitch(
        intensity = 1,
        duration = 500
    ) {
        root.style.animation =
            `screenShake ${Math.max(
                120,
                210 / intensity
            )}ms steps(2) infinite`;

        root.style.filter = `
            contrast(${1 + intensity * .4})
            brightness(${1 - intensity * .08})
            saturate(${1 + intensity * .35})
        `;

        redShift.style.opacity =
            String(.15 * intensity);

        blueShift.style.opacity =
            String(.11 * intensity);

        await sleep(duration);

        root.style.animation = "";
        root.style.filter = "";

        redShift.style.opacity = "0";
        blueShift.style.opacity = "0";
    }

    async function hardGlitch() {
        await flashScreen(.35, 55);

        root.style.animation =
            "screenShake 95ms steps(2) infinite";

        redShift.style.opacity = ".28";
        blueShift.style.opacity = ".19";

        await sleep(280);

        root.style.animation = "";
        redShift.style.opacity = "0";
        blueShift.style.opacity = "0";
    }

    /* ---------------------------------------------------------
       FULL WARNING BLINK
    --------------------------------------------------------- */

    async function warningBlink(
        title,
        subtitle,
        duration = 1100
    ) {
        const warningTitle =
            document.getElementById("warning-title");

        const warningSub =
            document.getElementById("warning-sub");

        warningTitle.textContent = title;
        warningSub.textContent = subtitle;

        warningOverlay.style.animation =
            `warningBlink ${duration}ms steps(5)`;

        await sleep(duration);

        warningOverlay.style.animation = "";
        warningOverlay.style.opacity = "0";
    }

    /* ---------------------------------------------------------
       VISUAL FREEZE
    --------------------------------------------------------- */

    async function freezeVisual(duration) {
        frozen = true;

        root.style.filter =
            "contrast(1.15) brightness(.78)";

        root.style.transform =
            "scale(1.001)";

        await sleep(duration);

        root.style.filter = "";
        root.style.transform = "";

        frozen = false;
    }

    /*
     * Page-local interaction only.
     *
     * This does NOT intercept browser Refresh/Back.
     */

    document.addEventListener(
        "click",
        event => {
            if (!frozen) return;

            event.preventDefault();
            event.stopPropagation();
        },
        true
    );

    document.addEventListener(
        "keydown",
        event => {
            if (!frozen) return;

            /*
             * Page-local keyboard suppression.
             * Browser navigation remains browser-controlled.
             */
            if (
                event.key !== "F5" &&
                !(event.ctrlKey || event.metaKey)
            ) {
                event.preventDefault();
            }
        },
        true
    );

    /* ---------------------------------------------------------
       CONTINUOUS BACKGROUND ACTIVITY
    --------------------------------------------------------- */

    let activityTimer = null;

    function startActivityEngine() {
        const tick = async () => {
            if (ended) return;

            if (!frozen) {
                const phase =
                    (Date.now() - startTime) / 1000;

                let pool;

                if (phase < 25) {
                    pool = [
                        normalLogs,
                        greenLogs,
                        whiteLogs
                    ];
                } else if (phase < 55) {
                    pool = [
                        normalLogs,
                        whiteLogs,
                        warningLogs
                    ];
                } else {
                    pool = [
                        warningLogs,
                        dangerLogs,
                        whiteLogs
                    ];
                }

                const selected = randomItem(pool);

                let type = "white";

                if (selected === greenLogs) {
                    type = "green";
                }

                if (selected === warningLogs) {
                    type = "warn";
                }

                if (selected === dangerLogs) {
                    type = "red";
                }

                addLog(
                    randomItem(selected),
                    type
                );
            }

            const delay =
                350 + Math.random() * 700;

            activityTimer =
                setTimeout(tick, delay);
        };

        tick();
    }

    /* ---------------------------------------------------------
       MAIN 100–120 SECOND EXPERIENCE
    --------------------------------------------------------- */

    async function run() {
        startTime = Date.now();

        /*
         * -----------------------------------------------------
         * PHASE 1 — SOMETHING IS WRONG
         * 0–10 sec
         * -----------------------------------------------------
         */

        addLog(
            "initializing session monitor",
            "dim"
        );

        await sleep(500);

        addLog(
            "unexpected connection response",
            "warn"
        );

        await flashScreen(.12, 65);

        notify({
            source: "Account Security",
            title: "New sign-in detected",
            body:
                "A new session was just opened.",
            icon: "◉",
            duration: 2100
        });

        await sleep(900);

        showCenter(
            "SECURITY EVENT",
            "NEW SESSION DETECTED",
            "A session change requires verification.",
            "warning"
        );

        await sleep(1000);

        hideCenter();

        /*
         * -----------------------------------------------------
         * PHASE 2 — RAPID ACTIVITY
         * 10–25 sec
         * -----------------------------------------------------
         */

        await logBurst(7, 120);

        notify({
            source: "Session Monitor",
            title: "Session changed",
            body:
                "The current session could not be fully verified.",
            type: "warning",
            icon: "!",
            duration: 1900
        });

        await sleep(700);

        await glitch(.65, 450);

        showCenter(
            "SESSION CHECK",
            "VERIFYING ACCESS...",
            "Please wait while the session state is checked."
        );

        await sleep(1200);

        hideCenter();

        addLog(
            "verification response delayed",
            "warn"
        );

        await sleep(600);

        /*
         * -----------------------------------------------------
         * PHASE 3 — CONNECTION INSTABILITY
         * 25–40 sec
         * -----------------------------------------------------
         */

        showCenter(
            "CONNECTION",
            "CONNECTION LOST",
            "Attempting to restore connection...",
            "danger"
        );

        await flashScreen(.25, 65);

        await sleep(900);

        showCenter(
            "CONNECTION",
            "CONNECTION RESTORED",
            "Session state changed.",
            "green"
        );

        addLog(
            "connection restored",
            "green"
        );

        await sleep(700);

        notify({
            source: "Security Center",
            title: "Unrecognized session detected",
            body:
                "Another active session was detected.",
            type: "danger",
            icon: "!",
            duration: 2100
        });

        await sleep(900);

        /*
         * -----------------------------------------------------
         * PHASE 4 — FAKE DATA / SESSION ACTIVITY
         * 40–55 sec
         * -----------------------------------------------------
         */

        hideCenter();

        await simulateDataSequence();

        notify({
            source: "System Security",
            title: "Access verification failed",
            body:
                "The current session state could not be confirmed.",
            type: "danger",
            icon: "×",
            duration: 2000
        });

        await sleep(850);

        showCenter(
            "SESSION STATE",
            "ACCESS UNKNOWN",
            "Attempting to determine current access state...",
            "danger"
        );

        await glitch(.75, 550);

        hideCenter();

        /*
         * -----------------------------------------------------
         * PHASE 5 — TAKEOVER FEEL
         * 55–70 sec
         * -----------------------------------------------------
         */

        await warningBlink(
            "UNAUTHORIZED ACCESS",
            "SESSION CONTROL HAS CHANGED",
            1250
        );

        await hardGlitch();

        notify({
            source: "Security Alert",
            title: "Session control changed",
            body:
                "User input may be temporarily unavailable.",
            type: "critical",
            icon: "×",
            duration: 1900
        });

        addLog(
            "user input state changed",
            "red"
        );

        addLog(
            "session control state: unknown",
            "red"
        );

        await sleep(800);

        showCenter(
            "SYSTEM STATE",
            "CONTROL INTERRUPTED",
            "Attempting to recover the previous state...",
            "danger"
        );

        await sleep(1300);

        /*
         * -----------------------------------------------------
         * PHASE 6 — FIRST SERIOUS FREEZE
         * 70–77 sec
         * -----------------------------------------------------
         */

        hideCenter();

        addLog(
            "recovery attempt started",
            "green"
        );

        await flashScreen(.32, 55);

        await freezeVisual(3400);

        await blackoutFor(700);

        /*
         * -----------------------------------------------------
         * PHASE 7 — RECOVERY
         * 77–90 sec
         * -----------------------------------------------------
         */

        notify({
            source: "Recovery Service",
            title: "Recovery started",
            body:
                "Attempting to restore the previous session.",
            icon: "↻",
            duration: 2000
        });

        showCenter(
            "RECOVERY",
            "RESTORING SESSION...",
            "Rebuilding previous session state.",
            "green"
        );

        await logBurst(8, 130);

        await sleep(800);

        addLog(
            "previous state unavailable",
            "warn"
        );

        notify({
            source: "Recovery Service",
            title: "Recovery failed",
            body:
                "The previous session state could not be restored.",
            type: "danger",
            icon: "×",
            duration: 2100
        });

        await glitch(.95, 650);

        hideCenter();

        /*
         * -----------------------------------------------------
         * PHASE 8 — CHAOTIC ESCALATION
         * 90–105 sec
         * -----------------------------------------------------
         */

        await warningBlink(
            "SECURITY EVENT DETECTED",
            "ACCESS STATE COULD NOT BE CONFIRMED",
            1300
        );

        await hardGlitch();

        notify({
            source: "Security Center",
            title: "SESSION COMPROMISED",
            body:
                "Authentication state is no longer available.",
            type: "critical",
            icon: "!",
            duration: 2300
        });

        await sleep(600);

        addLog(
            "authentication state unavailable",
            "red"
        );

        addLog(
            "active session verification failed",
            "red"
        );

        await sleep(500);

        showCenter(
            "CRITICAL SECURITY EVENT",
            "SESSION CONTROL LOST",
            "Recovery required.",
            "danger"
        );

        await glitch(1.15, 850);

        hideCenter();

        /*
         * -----------------------------------------------------
         * PHASE 9 — FAKE BROWSER FAILURE
         * 105–112 sec
         * -----------------------------------------------------
         */

        browserFailure.classList.add("show");

        await sleep(2600);

        browserFailure.classList.remove("show");

        await blackoutFor(700);

        /*
         * -----------------------------------------------------
         * PHASE 10 — FINAL FREEZE
         * -----------------------------------------------------
         */

        await freezeVisual(3600);

        /*
         * -----------------------------------------------------
         * PHASE 11 — FAKE CRASH
         * -----------------------------------------------------
         */

        const crashStart =
            document.getElementById("crash");

        crashStart.classList.add("show");

        await sleep(500);

        progressBar.style.width = "32%";

        crashStatus.textContent =
            "Restoring display state...";

        await sleep(1300);

        progressBar.style.width = "66%";

        crashStatus.textContent =
            "Restoring session state...";

        await sleep(1300);

        progressBar.style.width = "89%";

        crashStatus.textContent =
            "Recovery failed — retrying...";

        await sleep(1300);

        progressBar.style.width = "100%";

        crashStatus.textContent =
            "SESSION STATE: UNKNOWN";

        await sleep(2200);

        /*
         * -----------------------------------------------------
         * PHASE 12 — SILENCE
         * -----------------------------------------------------
         */

        crashStart.classList.remove("show");

        await blackoutFor(2200);

        /*
         * -----------------------------------------------------
         * PHASE 13 — REVEAL
         * -----------------------------------------------------
         */

        ended = true;

        if (activityTimer) {
            clearTimeout(activityTimer);
        }

        reveal.classList.add("show");
    }

    /* ---------------------------------------------------------
       REPLAY
    --------------------------------------------------------- */

    replay.addEventListener("click", () => {
        location.reload();
    });

    /* ---------------------------------------------------------
       START
    --------------------------------------------------------- */

    startActivityEngine();

    /*
     * Small initial delay so the first screen isn't instantly
     * overloaded, then the simulation takes over automatically.
     */

    run();
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
