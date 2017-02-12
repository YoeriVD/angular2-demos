export const settings = {
    out  : "console"
}

const Loggers = {
    "console" : (logEntry : string) => console.log(logEntry),
    "html" : (logEntry : string) => document.getElementById("console").innerHTML += `\n${logEntry}`
}
export function Log(logEntry : string){
    Loggers[settings.out](logEntry);
}