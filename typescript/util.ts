const console = document.getElementById("console");
export function Log(logEntry : string){
    window.console.log(`logging: ${logEntry}`)    
    console.innerHTML += `\n${logEntry}`;
}