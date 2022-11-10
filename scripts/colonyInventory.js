import { getColonies, getColonyInventory, getMinerals } from "./database.js"
import { renderColony } from "./colonies.js"
import { render } from "./main.js"

let purchase = false

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "orderButton"){
        purchase = true
        render()
        console.log("colony")
    }
})

/*{
      "id": 1,
      "colonyId" : 1,
      "mineralId": 1,
      "inventory": 0
    }, 
*/

let colonyId = null
let html = ""

export const colonyInventoryHTML = () => {

    const colony = renderColony() //colony name 
    const minerals = getMinerals()
    const colonies = getColonies()


    if (purchase) {
    const colonyInventory = getColonyInventory()

    for (const col of colonies ) {
        if (col.name === colony) {
            colonyId = col.id
    }
    }

    html = "<section>"

        for (const colony of colonyInventory) {
            if (colony.colonyId === colonyId) {
                for (const mineralObj of minerals) {
                    if (mineralObj.id === colony.mineralId && colony.inventory > 0) {
                        html += `<div>${colony.inventory} tons of ${mineralObj.name}</div>`
                    }
                }
        }
    }

    html += "</section>"

    console.log(html)

    return html
    } else {
        return html = ""
    }
}