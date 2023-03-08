import mockData from "../data/mockData.json"

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, 2000)
    })
}

export const pedirProductoPorId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData.find(prod => prod.id === id))
        }, 1500)
    })
}