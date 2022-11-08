import {Governors} from "./governors.js"
import {renderColony} from "./colonies.js"
import {facilityMinerals} from "./facilityMinerals.js"

export const Exomine = () => {
    let html =  `
    <div class="governorColonies">
        <h1>Solar System Mining Marketplace</h1>
            <section class="governors">
            ${Governors()}
            </section>
            <section class="colonies">
            ${renderColony()}
            </section>
            <section class="colonyInventory">

            </section>
            </div>

    <div class="shop">
    <section class="facilityDropdown">

    </section>
    <section class="facilityMinerals">
    ${facilityMinerals()}
    </section>
    <section class="Space Cart">
            <button id="orderButton">Add to Space Cart</button>
    </section>
    </div>
    `
    return html
}
