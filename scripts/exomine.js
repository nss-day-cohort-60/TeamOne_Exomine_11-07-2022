import {Governors} from "./governors.js"
import {renderColonyHTML} from "./colonies.js"
import { facilityMinerals } from "./facilityMinerals.js"
import { Facilities } from "./facilities.js"
import { addToCart } from "./orders.js"

export const Exomine = () => {
    let html =  `
    <div class="governorColonies">
        <h1>Solar System Mining Marketplace</h1>
            <section class="governors">
                ${Governors()}
            </section>
            <section class="colonies">
            ${renderColonyHTML()}
            </section>
            <section class="colonyInventory">
            </section>
            </div>

    <div class="shop">
    <section class="facilityDropdown">
    ${Facilities()}
    </section>
    <section class="facilityMinerals">
    ${facilityMinerals()}
    </section>
    <section class="Space Cart">
    ${addToCart()}
            <button id="orderButton">Purchase Minerals</button>
    </section>
    </div>
    `
    return html
}
