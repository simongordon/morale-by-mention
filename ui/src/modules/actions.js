export const getRandomUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 123, name: "John"})
        }, 1000)
    })
}

export const postMessage = (userId, message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}