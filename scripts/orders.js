import { completeOrder, getFacilities, getOrders } from "./database.js"
import {renderColony} from "./colonies.js"
import {selectedFacilityName} from "./facilities.js"
import { render } from "./main.js"
import { getFacilityMinerals } from "./database.js"
import { getColonyInventory } from "./database.js"
import { getColonies } from "./database.js"
import { getMinerals, updateColonyInventory } from "./database.js"

let objectInCart = false
let mineral = null

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id==="mineral"){
        objectInCart = true
        console.log("click event in orders.js")
        mineral = document.querySelector('input[name="mineral"]').value
        render()
    }
})




export const addToCart = () => {
    let cart=""
    if(objectInCart){
        cart = `1 ton of ${mineral}<br>`
    }
    return cart
}




document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "orderButton"){
        
    }
})

const incColonyInventory = () => {

/*
id: 1,
colonyId: 1,
mineralId: 1,
inventory: 3
*/
    let inventory = getColonyInventory()
    const colony = renderColony()
    let colonies =  getColonies()
    let minerals = getMinerals()
    let colonyId = null
    let mineralId = null

    for (const col of colonies ) {
            if (col.name === colony) {
                colonyId = col.id
        }

    }
    for ( const thing of minerals) {
        if (thing.name === mineral) {
             mineralId = thing.id
        }
    }

    let colonyInventory = null
    let colonyJSONId = null

    for (const object of inventory) {
        if (object.colonyId === colonyId){
            if (object.mineralId === mineralId){
                colonyInventory = object.inventory++
                 colonyJSONId = object.id
            } 
        }
    }

    const colonyObject = {
        colonyJSONId: colonyJSONId,
        colonyId: colonyId,
        mineralId: mineralId,
        inventory: colonyInventory
    }

        updateColonyInventory(colonyObject)



        
    }
    
    const decFacilityInventory = () => {
    let inventory = getFacilityMinerals()
    const facility = selectedFacilityName()
    let facilities =  getFacilities()
    let minerals = getMinerals()
    let facilityId = null
    let mineralId = null

    for (const fac of facilities ) {
            if (fac.name === facility) {
                facilityId = fac.id
        }

    }
    for ( const thing of minerals) {
        if (thing.name === mineral) {
             mineralId = thing.id
        }
    }

    let facilityInventory = null

    for (const object of inventory) {
        if (object.facilityId === facilityId){
            
            if (object.mineralId === mineralId){
                if (object.inventory === 0){
                    return
                } else {

                facilityInventory = object.inventory--

                }
            

            }
        }
    }

    const facilityObject = {
        facilityId: facilityId,
        mineralId: mineralId,
        inventory: facilityInventory
    }

        updateColonyInventory(colonyObject)


    }