export enum OutKind {console, html}

export const settings = {
    out  : OutKind.html
}
const Loggers = {
    "console" : (logEntry : string) => console.log(logEntry),
    "html" : (logEntry : string) => document.getElementById("console").innerHTML += `\n${logEntry}`
}
export function Log(logEntry : string){
    Loggers[OutKind[settings.out]](logEntry);
}