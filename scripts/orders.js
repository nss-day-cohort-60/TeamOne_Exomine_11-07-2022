import { completeOrder, getOrders } from "./database.js"
import {renderColony} from "./colonies.js"
import {selectedFacilityName} from "./facilities.js"
import { render } from "./main.js"

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

const setOrders = () => {   
    const colony = renderColony()
    const facility = selectedFacilityName()

    const order = {
        receivingColony: colony,
        dispatchingFacility: facility,
        mineralOrdered: mineral
    }

    completeOrder(order)

}

export const addToCart = () => {
    let cart=""
    if(objectInCart){
        cart = `1 ton of ${mineral}<br>`
    }
    return cart
}