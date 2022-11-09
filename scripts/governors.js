/* Need getGovernors() function
Need setGovernors() function 
 */

//import governor list 
//import set governor

import { getGovernors } from "./database.js"

let governorId = null

document.addEventListener("change",
    (event) => {
        if (event.target.id === "governor") {
            governorId = parseInt(event.target.value)
        } 
    }) 

export const Governors = () => {
    let governors = getGovernors()

    let html = `<select id="governor">
    <option value="0">Select a governor...</option>`

    for (const governor of governors) {
        html += `
        <option value="${governor.id}">${governor.name}</option>`
    }

    html += "</select>"

    return html
}