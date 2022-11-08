//import colonies for local access
import { getColonies, getColonyGovernors } from "./database.js";
import {render} from "./main.js"

let governorId = null

document.addEventListener("change",
    (event) => {
        if (event.target.id === "governor") {
            governorId = parseInt(event.target.value)
            render()
        } 
    }) 


export const renderColony = () => {
//json database -> local variable


if (governorId) {
    const colonyGovernors = getColonyGovernors()
    const colonies = getColonies()

    let colonyObj = null

   for (const obj of colonyGovernors) {
    if (obj.governorId === governorId) {
        for (const colony of colonies) {
            if (colony.id === obj.colonyId) {
                colonyObj = colony
            }
        }
    }
   }

    const html = `<h2>${colonyObj.name}'s Orders</h2>`
    return html
} else {
    return "<h2>Colony Minerals</h2>"
}
}

