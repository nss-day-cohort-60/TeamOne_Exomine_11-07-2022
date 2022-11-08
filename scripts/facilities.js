import { getFacilities } from "./database.js";

export const Facilities = () => {
    console.log("jsfhgbvlkijhb")
    let facilities = getFacilities()

    let html = `<select id="facilities" disabled="">
    <option value="0">Select a facility...</option>`

    for (const facility of facilities) {
        html += `
        <option value="${facility.id}">${facility.name}</option>`
    }

    html += "</select>"

    return html

}