//import colonies for local access
import { getColonies } from "./database.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("change",
    (event) => {
        if (event.target.id === "governors") {
            governorId = parseInt(event.target.value)
        } 
    }) 


export const renderColony = (governorId) => {
//json database -> local variable
const colonies = getColonies()

html+=`${colonies.find(
    (colony) =>{
        return colony.governorId===governorId
    }
)}`

html+="'s Orders</h2>"
}

