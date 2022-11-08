import { getFacilities } from "./database.js";
import { render } from "./main.js"

let governorId = null

document.addEventListener("change",
    (event) => {
        if (event.target.id === "governor") {
            governorId = parseInt(event.target.value)
            render()
            Facilities()
        } 
    }) 


export const Facilities = () => {
    console.log("jsfhgbvlkijhb")
    let facilities = getFacilities()

    let html = "<div>Choose a facility</div>"

    if (governorId) {
        html += `<select id="facilities">
        <option value="0">Select a facility...</option>`
        for (const facility of facilities) {
            html += `
            <option value="${facility.id}">${facility.name}</option>`
        }
    } else {
        html += "Please select a governor"
    }

    html += "</select>"

    return html

}