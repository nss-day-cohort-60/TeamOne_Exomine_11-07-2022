import { getFacilities } from "./database.js";
import { render } from "./main.js"

let governorId = null

document.addEventListener("change",
    (event) => {
        if (event.target.id === "governor") {
            governorId = parseInt(event.target.value) 
            Facilities()
        } 
    }) 

let facilityId = null

document.addEventListener("change",
    (event) => {
        if (event.target.id === "facilities") {
            facilityId = parseInt(event.target.value)
        } 
    }) 


export const Facilities = () => {
    let facilities = getFacilities()

    let html = ""

    if (governorId) {
        if (facilityId) {
            return selectedFacility()
        } else {
        html += `<div>Choose a facility</div><select id="facilities">
        <option value="0">Select a facility...</option>`
        for (const facility of facilities) {
            html += `
            <option value="${facility.id}">${facility.name}</option>`
        }
        }
    } else {
        html += "Please select a governor"
    }

    html += "</select>"

    return html

}

const selectedFacility = () => {
    let facilities = getFacilities()

    let html = `<div>Choose a facility</div><select id="facility">
    <option value="0">Select a facility...</option>`

    for (const facility of facilities) {
        if (facility.id === facilityId) {
            html += `
            <option selected value="${facility.id}">${facility.name}</option>`
        } else {
        html += `
        <option value="${facility.id}">${facility.name}</option>`
        }
    }

    html += "</select>"

    return html
}

export const selectedFacilityName = () => {
    let facilities = getFacilities()

    let facilityName = null

    for (const facility of facilities) {
        if (facility.id === facilityId) {
            facilityName = `${facility.name}`
        }
    }
    return facilityName
}