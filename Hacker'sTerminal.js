// Hacker's Terminal

const randomDelay = () => {
   return new Promise((resolve) => {
     let timeout = 1 + 2 * Math.random();
     setTimeout(() => {
       resolve();
     }, timeout * 1000);
   });
 };
 
 alert("System Hacked!!!!!!!!!!!!!!!!");
 
 const terminal = document.createElement("div");
 terminal.style.color = "lime";
 terminal.style.backgroundColor = "black";
 terminal.style.padding = "10px";
 terminal.style.height = "auto";
 terminal.style.width = "auto";
 terminal.style.overflow = "auto";
 document.body.appendChild(terminal);
 
 function addMessage(message) {
   const p = document.createElement("p");
   const spanmessage = document.createElement("span");
   const spandots = document.createElement("span");
 
   spanmessage.textContent = message;
   spandots.textContent = "...";
 
   p.appendChild(spanmessage);
   p.appendChild(spandots);
   terminal.appendChild(p);
 
   const interval = setInterval(() => {
     if (spandots.textContent === "...") {
       spandots.textContent = "";
     } else {
       spandots.textContent = spandots.textContent + ".";
     }
   }, 700);
 
   setTimeout(() => clearInterval(interval), 15000);
 }
 
 setTimeout(() => {
   document.body.style.backgroundColor = "green";
 }, 0);
 
 randomDelay()
   .then(() => {
     addMessage("Initializing system scan...");
     return randomDelay();
   })
   .then(() => {
     addMessage("------------------------------------------------");
     addMessage("Target Device: CONNECTED");
     addMessage("Fetching IP Configuration...");
     return randomDelay();
   })
   .then(() => {
     addMessage("------------------------------------------------");
     addMessage("IP Address Detected: 192.168.1.103");
     addMessage("Subnet Mask: 255.255.255.0");
     addMessage("Default Gateway: 192.168.1.1");
     addMessage("MAC Address: 00:1A:2B:3C:4D:5E");
     return randomDelay();
   })
   .then(() => {
     addMessage("------------------------------------------------");
     addMessage("Starting Data Retrieval...");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Scanning Active Directories...");
     addMessage("/System/Root/");
     addMessage("/System/Apps/");
     addMessage("/User/Documents/");
     addMessage("/User/Downloads/");
     addMessage("/User/Desktop/");
     addMessage("/Network/Cache/");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Extracting Sensitive Data...");
     addMessage("-> Found encrypted file: **userdata.enc**");
     addMessage("-> Found config file: **sysconfig.ini**");
     addMessage("-> Found password dump: **passdump.txt**");
     return randomDelay();
   })
   .then(() => {
     addMessage("------------------------------------------------");
     addMessage("Initiating Device Connection...");
     addMessage("PING 192.168.1.103: Success (32ms)");
     addMessage("Establishing secure connection... SUCCESS");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Fetching Active Device Logs:");
     addMessage("[00:01] Device activity detected");
     addMessage("[00:02] Unauthorized access attempt logged");
     addMessage("[00:05] Firewall bypass initiated...");
     addMessage("[00:06] Access granted.");
     return randomDelay();
   })
   .then(() => {
     addMessage("------------------------------------------------");
     addMessage("Deploying Scripts...");
     addMessage("- Extracting browser cookies... [SUCCESS]");
     addMessage("- Fetching Wi-Fi credentials... [SUCCESS]");
     addMessage("- Dumping local storage... [SUCCESS]");
     return randomDelay();
   })
   .then(() => {
     addMessage("------------------------------------------------");
     addMessage("[WARNING] Security trace detected.");
     addMessage("[INFO] Activating cloaking mode... [SUCCESS]");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Disabling system firewalls...");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Accessing device camera...");
     addMessage("[INFO] Camera feed detected. Streaming...");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Searching for financial records...");
     addMessage("-> Found file: **bankdetails.csv**");
     addMessage("-> Found file: **creditcard-info.txt**");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Searching for social media accounts...");
     addMessage("-> Facebook: Connected");
     addMessage("-> Instagram: Connected");
     addMessage("-> Twitter: Connected");
     addMessage("Fetching login tokens...");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Encrypting user data for transmission...");
     return randomDelay();
   })
   .then(() => {
     addMessage("[INFO] Uploading sensitive files to the server...");
     addMessage("-> Uploading bankdetails.csv [COMPLETE]");
     addMessage("-> Uploading creditcard-info.txt [COMPLETE]");
     addMessage("-> Uploading password dump [COMPLETE]");
     return randomDelay();
   })
   .then(() => {
     addMessage("------------------------------------------------");
     addMessage("Finalizing...");
     addMessage("[INFO] Removing activity logs...");
     addMessage("[INFO] Hiding malware traces...");
     return randomDelay();
   })
   .then(() => {
     addMessage("Hacking Complete.");
     addMessage("------------------------------------------------");
     addMessage("Goodbye.");
   });
 





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
