
// Hacker's Terminal


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
