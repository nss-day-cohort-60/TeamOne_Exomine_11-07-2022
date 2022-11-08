/* Need getGovernors() function
Need setGovernors() function 
 */

//import governor list 
//import set governor

import { getGovernors } from "./database.js"

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