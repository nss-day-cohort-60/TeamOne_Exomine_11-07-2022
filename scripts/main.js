import * as getData from "./database.js"
import { Exomine } from "./exomine.js"

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
                mainContainer.innerHTML = Exomine();
            }
        )
}

render()

mainContainer.addEventListener("stateChanged", 
    customEvent => {
        render()
    })
