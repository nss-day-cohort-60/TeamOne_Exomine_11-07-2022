const applicationState = {
    governors: [],
    colonies: [],
    facilities: [], 
    minerals: [],
    facilityMinerals: [],
    orders: [],
    colonyInventory: []
}

const API = "http://localhost:8088"

export const fetchGovernors = () => {
    return fetch(`${API}/governors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.governors = data
            }
        )
}

export const getGovernors = () => {
    return applicationState.governors.map(gov => ({...gov}))
}

export const fetchColonies = () => {
    return fetch(`${API}/colonies`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.colonies = data
            }
        )
}

export const getColonies = () => {
    return applicationState.colonies.map(col => ({...col}))
}

export const fetchFacilities = () => {
    return fetch(`${API}/facilities`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.facilities = data
            }
        )
}

export const getFacilities = () => {
    return applicationState.facilities.map(fac => ({...fac}))
}

export const fetchMinerals = () => {
    return fetch(`${API}/minerals`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.minerals = data
            }
        )
}

export const getMinerals = () => {
    return applicationState.minerals.map(min => ({...min}))
}

export const fetchFacilityMinerals = () => {
    return fetch(`${API}/facilityMinerals`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.facilityMinerals = data
            }
        )
}

export const getFacilityMinerals = () => {
    return applicationState.facilityMinerals.map(facMin => ({...facMin}))
}

export const fetchColonyGovernors = () => {
    return fetch(`${API}/colonyGovernors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.colonyGovernors = data
            }
        )
}

export const getColonyGovernors = () => {
    return applicationState.colonyGovernors.map(colGov => ({...colGov}))
}

export const fetchOrders = () => {
    return fetch(`${API}/orders`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.orders = data
            }
        )
}

export const getOrders = () => {
    return applicationState.orders.map(ord => ({...ord}))
}

export const updateColonyInventory = (orderObj) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderObj)
    }

    return fetch(`${API}/colonyInventory/${orderObj.id}`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const fetchColonyInventory = () => {
    return fetch(`${API}/colonyInventory`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.colonyInventory = data
            }
        )
}

export const getColonyInventory = () => {
    return applicationState.colonyInventory.map(colInv => ({...colInv}))
}

export const updateFacilityInventory = (orderObj) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderObj)
    }

    return fetch(`${API}/facilityMinerals/${orderObj.id}`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
        })
}