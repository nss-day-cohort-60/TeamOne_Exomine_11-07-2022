/* Need getGovernors() function
Need setGovernors() function 
 */

//import governor list 
//import set governor
import { getGovernors } from "./database.js"

let governors = getGovernors()


export const Governors = () => {
    let html = "<p>Choose a governor</p>"

    html += '<select id="governors">'
    html += '<option value="0">Choose a governor...</option>'

    for (const governor of governors) {
        html += `
        <option value="${governor.id}">${governor.name}</option>`
    }

    html += "</select>"
}
