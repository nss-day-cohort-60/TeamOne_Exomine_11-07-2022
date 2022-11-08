import * as getData from "./database.js"
<<<<<<< HEAD
import { exomine } from "./exomine.js"
=======
import { Exomine } from "./exomine.js"
>>>>>>> main

const mainContainer = document.querySelector("#container")

export const render = () => {
    getData.fetchGovernors()
        .then(() => getData.fetchFacilities())
        .then(() => getData.fetchColonyGovernors())
        .then(() => getData.fetchColonies())
        .then(() => getData.fetchFacilityMinerals())
        .then(() => getData.fetchMinerals())
        .then(() => getData.fetchOrders())
        .then( 
            () => {
<<<<<<< HEAD
                mainContainer.innerHTML = exomine();
=======
                mainContainer.innerHTML = Exomine();
>>>>>>> main
            }
        )
}

render()

mainContainer.addEventListener("stateChanged", 
    customEvent => {
        render()
    })