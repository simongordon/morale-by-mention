export const getRandomUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 123, name: "John"})
        }, 3000)
    })
}

export const postMessage = (userId, message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
}