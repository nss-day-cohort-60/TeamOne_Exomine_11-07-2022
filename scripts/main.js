import * as getData from "./database.js"
//import { exomine.js } from "./database.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    getData.fetchGovernors()
        .then(() => getData.fetchFacilities)
        .then(() => getData.fetchColonyGovernors)
        .then(() => getData.fetchColonies)
        .then(() => getData.fetchFacilityMinerals)
        .then(() => getData.fetchMinerals)
        .then(() => getData.fetchOrders)
        .then( 
            () => {
                //mainContainer.innerHTML = exomine.js();
            }
        )
}

render()

mainContainer.addEventListener("stateChanged", 
    customEvent => {
        render()
    })