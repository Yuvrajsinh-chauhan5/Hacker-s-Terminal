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
     * Visual browser-local simulation only.
     *
     * No:
     * - real account access
     * - network scanning
     * - file/device access
     * - camera/microphone access
     * - credential collection
     * - browser-control interference
     *
     * Browser refresh/navigation remains controlled by the browser.
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
            background: #050607;
            font-family:
                Inter,
                ui-sans-serif,
                system-ui,
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                sans-serif;
        }

        body {
            color: #e9edf0;
            user-select: none;
            cursor: default;
        }

        #v2-stage {
            position: fixed;
            inset: 0;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at 50% 45%,
                    rgba(70, 75, 80, 0.10),
                    transparent 48%
                ),
                #050607;
            transition:
                filter 120ms linear,
                transform 120ms linear,
                opacity 150ms linear;
        }

        #v2-noise {
            position: absolute;
            inset: -50%;
            pointer-events: none;
            opacity: 0.035;
            background-image:
                repeating-linear-gradient(
                    0deg,
                    rgba(255,255,255,.08) 0px,
                    rgba(255,255,255,.08) 1px,
                    transparent 1px,
                    transparent 3px
                );
            animation: noiseMove .14s steps(2) infinite;
        }

        #v2-scanlines {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0;
            background:
                repeating-linear-gradient(
                    to bottom,
                    transparent 0px,
                    transparent 3px,
                    rgba(255,255,255,.035) 4px
                );
            transition: opacity .2s;
        }

        #v2-flash {
            position: fixed;
            inset: 0;
            z-index: 100;
            background: white;
            opacity: 0;
            pointer-events: none;
        }

        #v2-blackout {
            position: fixed;
            inset: 0;
            z-index: 90;
            background: #000;
            opacity: 0;
            pointer-events: none;
            transition: opacity .12s linear;
        }

        #v2-glitch-red,
        #v2-glitch-blue {
            position: fixed;
            inset: 0;
            z-index: 95;
            pointer-events: none;
            opacity: 0;
            mix-blend-mode: screen;
        }

        #v2-glitch-red {
            background:
                linear-gradient(
                    90deg,
                    rgba(255, 0, 35, .18),
                    transparent 40%,
                    rgba(255, 0, 35, .08)
                );
        }

        #v2-glitch-blue {
            background:
                linear-gradient(
                    90deg,
                    rgba(0, 120, 255, .12),
                    transparent 55%,
                    rgba(0, 180, 255, .08)
                );
        }

        #v2-center {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            opacity: 0;
            transition: opacity .25s;
        }

        #v2-status {
            min-width: min(560px, 86vw);
            text-align: center;
            letter-spacing: .18em;
            text-transform: uppercase;
            font-size: clamp(11px, 1.1vw, 14px);
            color: rgba(235,240,243,.72);
            text-shadow: 0 0 18px rgba(255,255,255,.12);
        }

        #v2-status strong {
            display: block;
            margin-top: 13px;
            font-size: clamp(18px, 2.5vw, 32px);
            letter-spacing: .12em;
            color: #f1f4f5;
        }

        /* Notification system */

        #v2-notifications {
            position: fixed;
            top: 24px;
            right: 24px;
            z-index: 80;
            width: min(390px, calc(100vw - 32px));
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        }

        .v2-notification {
            position: relative;
            width: 100%;
            padding: 14px 16px;
            border: 1px solid rgba(255,255,255,.10);
            border-radius: 12px;
            background:
                linear-gradient(
                    145deg,
                    rgba(24,27,30,.96),
                    rgba(9,11,13,.96)
                );
            box-shadow:
                0 18px 50px rgba(0,0,0,.42),
                inset 0 1px 0 rgba(255,255,255,.05);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            transform: translateX(120%);
            opacity: 0;
            transition:
                transform .28s cubic-bezier(.2,.8,.2,1),
                opacity .25s ease;
        }

        .v2-notification.show {
            transform: translateX(0);
            opacity: 1;
        }

        .v2-notification.hide {
            transform: translateX(115%);
            opacity: 0;
        }

        .v2-notification.warning {
            border-color: rgba(255,190,70,.22);
        }

        .v2-notification.danger {
            border-color: rgba(255,70,70,.28);
            box-shadow:
                0 18px 55px rgba(0,0,0,.5),
                0 0 35px rgba(255,40,40,.08);
        }

        .v2-notification.critical {
            border-color: rgba(255,55,55,.42);
            background:
                linear-gradient(
                    145deg,
                    rgba(42,12,14,.97),
                    rgba(12,8,9,.97)
                );
        }

        .v2-notification-head {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .v2-icon {
            width: 30px;
            height: 30px;
            flex: 0 0 30px;
            display: grid;
            place-items: center;
            border-radius: 8px;
            background: rgba(255,255,255,.06);
            color: #dce2e5;
            font-size: 14px;
        }

        .warning .v2-icon {
            color: #ffc45c;
            background: rgba(255,190,70,.09);
        }

        .danger .v2-icon,
        .critical .v2-icon {
            color: #ff7777;
            background: rgba(255,60,60,.10);
        }

        .v2-source {
            font-size: 10px;
            letter-spacing: .13em;
            text-transform: uppercase;
            color: rgba(235,240,243,.43);
        }

        .v2-time {
            margin-left: auto;
            font-size: 9px;
            color: rgba(235,240,243,.30);
        }

        .v2-title {
            margin-top: 8px;
            font-size: 14px;
            font-weight: 650;
            letter-spacing: .01em;
            color: #f1f4f5;
        }

        .v2-body {
            margin-top: 5px;
            font-size: 11px;
            line-height: 1.5;
            color: rgba(225,231,234,.58);
        }

        .v2-meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 9px;
        }

        .v2-chip {
            padding: 4px 7px;
            border: 1px solid rgba(255,255,255,.07);
            border-radius: 5px;
            background: rgba(255,255,255,.025);
            font-size: 9px;
            color: rgba(225,231,234,.44);
        }

        /* Fake browser warning */

        #v2-browser-warning {
            position: fixed;
            left: 50%;
            top: 50%;
            z-index: 110;
            width: min(440px, calc(100vw - 36px));
            padding: 24px;
            border: 1px solid rgba(255,255,255,.13);
            border-radius: 14px;
            background: rgba(27,29,31,.97);
            box-shadow: 0 30px 100px rgba(0,0,0,.7);
            transform: translate(-50%, -50%) scale(.96);
            opacity: 0;
            pointer-events: none;
            transition: opacity .25s, transform .25s;
        }

        #v2-browser-warning.show {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }

        .browser-title {
            font-size: 17px;
            font-weight: 650;
            color: #f3f4f5;
        }

        .browser-text {
            margin-top: 9px;
            color: rgba(235,240,243,.55);
            font-size: 12px;
            line-height: 1.55;
        }

        .browser-actions {
            display: flex;
            justify-content: flex-end;
            gap: 9px;
            margin-top: 21px;
        }

        .browser-btn {
            padding: 8px 13px;
            border-radius: 7px;
            border: 1px solid rgba(255,255,255,.10);
            background: rgba(255,255,255,.05);
            color: rgba(240,243,244,.75);
            font-size: 11px;
        }

        /* Crash screen */

        #v2-crash {
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

        #v2-crash.show {
            opacity: 1;
        }

        .crash-inner {
            width: min(720px, 84vw);
        }

        .crash-face {
            font-size: clamp(58px, 9vw, 100px);
            font-weight: 200;
            color: #e9edf0;
        }

        .crash-title {
            margin-top: 20px;
            font-size: clamp(19px, 2.4vw, 28px);
            font-weight: 350;
            color: #e9edf0;
        }

        .crash-copy {
            max-width: 620px;
            margin-top: 13px;
            color: rgba(225,230,233,.58);
            font-size: 12px;
            line-height: 1.7;
        }

        .crash-progress {
            width: min(420px, 100%);
            height: 4px;
            margin-top: 25px;
            overflow: hidden;
            border-radius: 10px;
            background: rgba(255,255,255,.08);
        }

        .crash-progress-bar {
            width: 0;
            height: 100%;
            background: rgba(230,235,237,.72);
            transition: width 2.8s linear;
        }

        .crash-status {
            margin-top: 12px;
            font-size: 10px;
            letter-spacing: .13em;
            color: rgba(225,230,233,.36);
            text-transform: uppercase;
        }

        /* Reveal */

        #v2-reveal {
            position: fixed;
            inset: 0;
            z-index: 130;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #07090a;
            opacity: 0;
            pointer-events: none;
            transition: opacity .8s ease;
        }

        #v2-reveal.show {
            opacity: 1;
        }

        .reveal-inner {
            width: min(700px, 84vw);
            text-align: center;
        }

        .reveal-label {
            font-size: 10px;
            letter-spacing: .22em;
            text-transform: uppercase;
            color: rgba(225,230,233,.34);
        }

        .reveal-title {
            margin-top: 16px;
            font-size: clamp(24px, 4vw, 44px);
            letter-spacing: .04em;
            font-weight: 500;
            color: #f1f4f5;
        }

        .reveal-copy {
            max-width: 600px;
            margin: 18px auto 0;
            font-size: 12px;
            line-height: 1.75;
            color: rgba(225,230,233,.52);
        }

        .reveal-btn {
            margin-top: 28px;
            padding: 10px 17px;
            border: 1px solid rgba(255,255,255,.12);
            border-radius: 8px;
            background: rgba(255,255,255,.04);
            color: rgba(240,243,244,.72);
            font-size: 11px;
            cursor: pointer;
            transition: background .2s, border-color .2s;
        }

        .reveal-btn:hover {
            background: rgba(255,255,255,.08);
            border-color: rgba(255,255,255,.2);
        }

        @keyframes noiseMove {
            0% { transform: translate(0,0); }
            25% { transform: translate(2%, -1%); }
            50% { transform: translate(-1%, 2%); }
            75% { transform: translate(1%, 1%); }
            100% { transform: translate(-2%, -1%); }
        }

        @keyframes shake {
            0% { transform: translate(0); }
            15% { transform: translate(-5px, 2px); }
            30% { transform: translate(4px, -2px); }
            45% { transform: translate(-3px, 1px); }
            60% { transform: translate(5px, -1px); }
            75% { transform: translate(-2px, 2px); }
            100% { transform: translate(0); }
        }

        @keyframes tear {
            0% {
                clip-path: inset(0 0 0 0);
                transform: translate(0);
            }
            20% {
                clip-path: inset(15% 0 60% 0);
                transform: translate(-12px);
            }
            40% {
                clip-path: inset(55% 0 20% 0);
                transform: translate(10px);
            }
            60% {
                clip-path: inset(30% 0 40% 0);
                transform: translate(-6px);
            }
            80% {
                clip-path: inset(75% 0 8% 0);
                transform: translate(9px);
            }
            100% {
                clip-path: inset(0 0 0 0);
                transform: translate(0);
            }
        }

        @media (max-width: 600px) {
            #v2-notifications {
                top: 14px;
                right: 14px;
                width: calc(100vw - 28px);
            }

            .v2-notification {
                padding: 12px;
            }

            .v2-title {
                font-size: 13px;
            }

            .v2-body {
                font-size: 10px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: .01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: .01ms !important;
            }
        }
    `;

    document.head.appendChild(style);

    document.body.innerHTML = `
        <main id="v2-stage">

            <div id="v2-noise"></div>
            <div id="v2-scanlines"></div>

            <div id="v2-center">
                <div id="v2-status"></div>
            </div>

        </main>

        <div id="v2-flash"></div>
        <div id="v2-glitch-red"></div>
        <div id="v2-glitch-blue"></div>
        <div id="v2-blackout"></div>

        <section id="v2-notifications"></section>

        <section id="v2-browser-warning">
            <div class="browser-title">This page isn't responding</div>
            <div class="browser-text">
                The page appears to be unresponsive.
                You can wait for the page to respond or close it.
            </div>

            <div class="browser-actions">
                <div class="browser-btn">Close page</div>
                <div class="browser-btn">Wait</div>
            </div>
        </section>

        <section id="v2-crash">
            <div class="crash-inner">
                <div class="crash-face">:(</div>

                <div class="crash-title">
                    Something went wrong.
                </div>

                <div class="crash-copy">
                    The current session encountered an unexpected display
                    failure and is attempting to recover.
                </div>

                <div class="crash-progress">
                    <div class="crash-progress-bar"></div>
                </div>

                <div class="crash-status">
                    Initializing recovery...
                </div>
            </div>
        </section>

        <section id="v2-reveal">
            <div class="reveal-inner">
                <div class="reveal-label">
                    Visual Simulation
                </div>

                <div class="reveal-title">
                    Nothing was hacked.
                </div>

                <div class="reveal-copy">
                    This was a browser-local visual security simulation.
                    No files, accounts, network services, camera, microphone
                    or device data were accessed. Every notification,
                    security event, freeze and crash shown during the
                    sequence was fictional.
                </div>

                <button class="reveal-btn" id="v2-replay">
                    RUN AGAIN
                </button>
            </div>
        </section>
    `;

    const stage = document.getElementById("v2-stage");
    const center = document.getElementById("v2-center");
    const status = document.getElementById("v2-status");

    const notifications = document.getElementById("v2-notifications");

    const flash = document.getElementById("v2-flash");
    const blackout = document.getElementById("v2-blackout");
    const glitchRed = document.getElementById("v2-glitch-red");
    const glitchBlue = document.getElementById("v2-glitch-blue");
    const scanlines = document.getElementById("v2-scanlines");

    const browserWarning = document.getElementById("v2-browser-warning");
    const crash = document.getElementById("v2-crash");
    const crashBar = document.querySelector(".crash-progress-bar");
    const crashStatus = document.querySelector(".crash-status");
    const reveal = document.getElementById("v2-reveal");
    const replay = document.getElementById("v2-replay");

    let frozen = false;
    let destroyed = false;

    /*
     * Notification helper
     */

    function notify({
        source = "Security Center",
        title,
        body,
        type = "normal",
        icon = "◉",
        duration = 1500,
        chips = []
    }) {
        if (destroyed) return;

        const card = document.createElement("article");

        card.className = `v2-notification ${type}`;

        card.innerHTML = `
            <div class="v2-notification-head">
                <div class="v2-icon">${icon}</div>

                <div class="v2-source">${source}</div>

                <div class="v2-time">
                    just now
                </div>
            </div>

            <div class="v2-title">
                ${title}
            </div>

            <div class="v2-body">
                ${body}
            </div>

            ${
                chips.length
                    ? `
                        <div class="v2-meta">
                            ${chips
                                .map(
                                    chip =>
                                        `<span class="v2-chip">${chip}</span>`
                                )
                                .join("")}
                        </div>
                    `
                    : ""
            }
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
            }, 350);
        }, duration);
    }

    /*
     * Center status helper
     */

    function centerStatus(text, strong = "") {
        center.style.opacity = "1";

        status.innerHTML = `
            ${text}
            ${
                strong
                    ? `<strong>${strong}</strong>`
                    : ""
            }
        `;
    }

    function hideCenter() {
        center.style.opacity = "0";
    }

    /*
     * Visual effects
     */

    function microFlash(opacity = 0.18, duration = 70) {
        flash.style.transition = "none";
        flash.style.opacity = opacity;

        requestAnimationFrame(() => {
            flash.style.transition = `opacity ${duration}ms ease`;
            flash.style.opacity = "0";
        });
    }

    function blackoutFor(duration = 700) {
        return new Promise(resolve => {
            blackout.style.opacity = "1";

            setTimeout(() => {
                blackout.style.opacity = "0";
                resolve();
            }, duration);
        });
    }

    function glitch(intensity = 1, duration = 500) {
        return new Promise(resolve => {
            stage.style.filter = `
                contrast(${1 + intensity * .35})
                saturate(${1 + intensity * .25})
                brightness(${1 - intensity * .08})
            `;

            stage.style.animation = `shake ${Math.max(
                100,
                180 / intensity
            )}ms steps(2) infinite`;

            glitchRed.style.opacity = String(.14 * intensity);
            glitchBlue.style.opacity = String(.11 * intensity);

            scanlines.style.opacity = String(.45 * intensity);

            setTimeout(() => {
                stage.style.filter = "";
                stage.style.animation = "";

                glitchRed.style.opacity = "0";
                glitchBlue.style.opacity = "0";
                scanlines.style.opacity = "0";

                resolve();
            }, duration);
        });
    }

    function tear(duration = 400) {
        stage.style.animation = `tear ${duration}ms steps(5)`;

        setTimeout(() => {
            stage.style.animation = "";
        }, duration);
    }

    /*
     * Visual freeze.
     *
     * This does NOT disable browser refresh/navigation.
     * It only makes the page look frozen and suppresses
     * page-local interaction temporarily.
     */

    function freezePage(duration = 3000) {
        return new Promise(resolve => {
            frozen = true;

            stage.style.filter = "contrast(1.18) brightness(.82)";
            stage.style.transform = "scale(1.002)";

            setTimeout(() => {
                stage.style.filter = "";
                stage.style.transform = "";

                frozen = false;
                resolve();
            }, duration);
        });
    }

    document.addEventListener(
        "keydown",
        event => {
            if (!frozen) return;

            /*
             * Suppress only page-local keys.
             * Browser refresh/navigation controls remain browser-owned.
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

    document.addEventListener(
        "click",
        event => {
            if (frozen) {
                event.preventDefault();
                event.stopPropagation();
            }
        },
        true
    );

    /*
     * Main sequence
     */

    async function runSimulation() {
        destroyed = false;

        /*
         * PHASE 1
         * Immediate strange behavior
         */

        await wait(700);

        microFlash(.10, 90);

        await wait(250);

        notify({
            source: "Account Security",
            title: "New sign-in detected",
            body: "A new session was just established.",
            type: "normal",
            icon: "◉",
            duration: 1900,
            chips: [
                "Device: Unrecognized",
                "Location: Unknown"
            ]
        });

        await wait(850);

        centerStatus(
            "Session Monitor",
            "VERIFYING SESSION..."
        );

        await wait(750);

        /*
         * PHASE 2
         * First obvious anomaly
         */

        microFlash(.18, 80);

        await glitch(.65, 420);

        notify({
            source: "Security Center",
            title: "Security verification required",
            body: "A change to the active session was detected.",
            type: "warning",
            icon: "!",
            duration: 1900,
            chips: [
                "Session: Changed",
                "Verification: Required"
            ]
        });

        await wait(1000);

        hideCenter();

        /*
         * PHASE 3
         * Contradictory connection state
         */

        centerStatus(
            "Connection",
            "CONNECTED"
        );

        await wait(650);

        centerStatus(
            "Connection",
            "CONNECTION LOST"
        );

        microFlash(.22, 60);

        await wait(500);

        centerStatus(
            "Connection",
            "CONNECTION RESTORED"
        );

        notify({
            source: "Session Monitor",
            title: "Additional session detected",
            body: "Another active session appears to be associated with this state.",
            type: "warning",
            icon: "◌",
            duration: 1700,
            chips: [
                "State: Unknown"
            ]
        });

        await wait(850);

        /*
         * PHASE 4
         * First hard freeze
         */

        hideCenter();

        microFlash(.30, 55);

        await freezePage(3200);

        /*
         * PHASE 5
         * Blackout + recovery
         */

        await blackoutFor(850);

        notify({
            source: "Browser Security",
            title: "Session recovery in progress",
            body: "Attempting to restore the previous session state.",
            type: "warning",
            icon: "↻",
            duration: 1900
        });

        centerStatus(
            "Recovery Service",
            "RESTORING SESSION..."
        );

        await wait(950);

        await glitch(.75, 520);

        /*
         * PHASE 6
         * Escalation
         */

        notify({
            source: "Account Security",
            title: "Unrecognized session detected",
            body: "The current session could not be verified.",
            type: "danger",
            icon: "!",
            duration: 1900,
            chips: [
                "Verification: Failed"
            ]
        });

        await wait(850);

        notify({
            source: "Security Center",
            title: "Session integrity check failed",
            body: "The active session state is no longer consistent.",
            type: "danger",
            icon: "×",
            duration: 1900
        });

        await wait(850);

        centerStatus(
            "Authentication",
            "VERIFICATION FAILED"
        );

        await tear(600);

        notify({
            source: "System Notice",
            title: "SECURITY EVENT DETECTED",
            body: "Access state could not be determined.",
            type: "critical",
            icon: "!",
            duration: 2100,
            chips: [
                "Access: Unknown",
                "Recovery: Required"
            ]
        });

        await wait(900);

        /*
         * PHASE 7
         * More aggressive instability
         */

        await glitch(1.15, 850);

        microFlash(.32, 65);

        await wait(250);

        notify({
            source: "Session Monitor",
            title: "SESSION COMPROMISED",
            body: "Authentication state is no longer available.",
            type: "critical",
            icon: "×",
            duration: 2200
        });

        await wait(900);

        /*
         * PHASE 8
         * Fake browser unresponsive state
         */

        hideCenter();

        await glitch(.85, 450);

        browserWarning.classList.add("show");

        await wait(2500);

        browserWarning.classList.remove("show");

        /*
         * PHASE 9
         * Hard visual freeze
         */

        await blackoutFor(650);

        await freezePage(3600);

        /*
         * PHASE 10
         * Fake crash screen
         */

        crash.classList.add("show");

        await wait(500);

        crashBar.style.width = "37%";
        crashStatus.textContent = "Recovering display state...";

        await wait(1600);

        crashBar.style.width = "73%";
        crashStatus.textContent = "Restoring session state...";

        await wait(1500);

        crashBar.style.width = "91%";
        crashStatus.textContent = "SESSION RECOVERY FAILED — RETRYING";

        await wait(1200);

        crashBar.style.width = "100%";
        crashStatus.textContent = "SESSION STATE: UNKNOWN";

        await wait(2300);

        /*
         * PHASE 11
         * Silence
         */

        crash.classList.remove("show");

        await blackoutFor(1800);

        /*
         * PHASE 12
         * Reveal
         */

        reveal.classList.add("show");
    }

    /*
     * Small timing helper
     */

    function wait(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

    /*
     * Replay
     */

    replay.addEventListener("click", () => {
        location.reload();
    });

    /*
     * Start automatically.
     *
     * No button.
     * No workspace.
     * No terminal.
     */

    runSimulation();
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
