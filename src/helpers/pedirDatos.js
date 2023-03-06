import mockData from "../data/mockData.json"

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, 2000)
    })
}