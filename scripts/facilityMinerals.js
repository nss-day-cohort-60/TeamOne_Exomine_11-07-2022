import { getFacilityMinerals, getMinerals, getFacilities } from "./database.js"

const facilityId = null

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("change",
    (event) => {
        if (event.target.id === "facilities") {
            facilityId = parseInt(event.target.value)
        } 
    }) 

export const facilityMinerals = (facilityId) => {

    const facilityMinerals = getFacilityMinerals()
    const minerals = getMinerals()
    const facilities = getFacilities()

 //Trying to find the facility name and the facility minerals from the selected facility (id), use facility.id

   const displayInfo = {
    facilityName: "",
    availableMinerals: []    
   }
 
    const facilityName = ""
    
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
                        mineralInventory: inventory
                    }

                    displayInfo.availableMinerals.push(mineralObj)
                }
            }
        }

    return `<h2>Facility Minerals for ${facilityName}</h2>
            ${availableMinerals.map(obj => {
                return `<input type="radio">${obj.mineralInventory} tons of ${obj.mineralName}`
            })}
    `

}

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