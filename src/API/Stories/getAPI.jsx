export const getAPI = async () => {
    try {
        return await fetch("https://69749e44265838bbea956cab.mockapi.io/articles").then((result) => result.json())
    } catch(error) {
        return error
    }
}
