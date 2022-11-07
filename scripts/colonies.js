//import colonies for local access
import { getColonies } from "./database.js";

export const renderColony = (governor) => {
//json database -> local variable
const colonies = getColonies()

html=+`${colonies.find(
    (colony) =>{
        return colony.governorId===governor.id
    }
)}`


html+="'s Orders</h2>"
}

