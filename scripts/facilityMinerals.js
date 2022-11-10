import { getFacilityMinerals, getMinerals, getFacilities } from "./database.js"
import { render } from "./main.js"

let facilityId = null
let mineralName = null

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("change",
    (event) => {
        if (event.target.id === "facilities") {
            facilityId = parseInt(event.target.value)
            facilityMinerals()
            render()
            console.log("rendered in facilityMinerals")
        } 
    }) 



export const facilityMinerals = () => {

    const facilityMinerals = getFacilityMinerals()
    const minerals = getMinerals()
    const facilities = getFacilities()

 //Trying to find the facility name and the facility minerals from the selected facility (id), use facility.id

   const displayInfo = {
    facilityName: "",
    availableMinerals: []    
   }
    
    for (const facility of facilities) {
        if (facility.id === facilityId) {
            displayInfo.facilityName = facility.name
        }
    }

    for (const item of facilityMinerals)
        if (item.facilityId === facilityId) {
            const inventory = item.inventory
            for (const mineral of minerals) {
                if (mineral.id === item.mineralId) {
                    const name = mineral.name

                    const mineralObj = {
                        mineralName: name,
                        mineralInventory: inventory,
                        id: mineral.id
                    }

                    displayInfo.availableMinerals.push(mineralObj)
                }
            }
        }
        

            let html = `<h2>Facility Minerals for ${displayInfo.facilityName}</h2>
        ${displayInfo.availableMinerals.map(obj => {
            return `<input type="radio" name="mineral" value='${obj.mineralName}' id="mineral--${obj.id}"}>${obj.mineralInventory} tons of ${obj.mineralName}</input>`
        })}`
    
        return html

         


        

}

/* const selectedMineral = () => {
    let minerals = getMinerals()

    let html = `<h2>Facility Minerals for ${displayInfo.facilityName}</h2>`

        for (const mineral of minerals) {
            if (mineral.id === minId) {
                html += `<input type="radio" name="mineral" value='${mineral.name}' id="mineral" checked>${mineral.mineralInventory} tons of ${mineral.name}</input>`
            } else {
                html += `<input type="radio" name="mineral" value='${mineral.name}' id="mineral">${mineral.mineralInventory} tons of ${mineral.name}</input>`
            }
        }

    return html        
    
} */






















/*
"minerals":[{
        "id":1,
        "name": "uranium"
    }

"facilityMinerals":[{
        "id":1,
        "facilityId":1,
        "mineralId":4,
        "inventory": 5
    }

"facilities":[{
        "id":1,
        "name":"Smith Garage",
        "colonyId": 1,
        "active":true
    }
 "colonies":[{
        "id":1,
        "name": "Earth",
        "governorId":1,
        "facilityId":1
    }
*/