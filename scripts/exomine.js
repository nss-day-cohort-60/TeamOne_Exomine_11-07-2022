import {Governors} from "./governors.js"
import {renderColonyHTML} from "./colonies.js"
import { facilityMinerals } from "./facilityMinerals.js"
import { Facilities } from "./facilities.js"
import { addToCart } from "./orders.js"
import { colonyInventoryHTML } from "./colonyInventory.js"

export const Exomine = () => {
    let html =  `
    <div class="governorColonies">
        <h1>Solar System Mining Marketplace</h1>
            <div class="dropdown_colinventory">
                <div class="dropdown">
                <section class="governors">
                    ${Governors()}
                </section>
                <section class="facilityDropdown">
                ${Facilities()}
                </section>
                </div>
                <section class="colonies">
                ${renderColonyHTML()}
                ${colonyInventoryHTML()}
                </section>
            </div>
            <section class="colonyInventory">
            </section>
            </div>

    <div class="shop">
        <section class="facilityMinerals">
        ${facilityMinerals()}
        </section>
        <section class="Space_Cart">
            <h2>Space Cart</h2>
            ${addToCart()}
            <button id="orderButton">Purchase Minerals</button>
        </section>
    </div>
    `
    return html
}
