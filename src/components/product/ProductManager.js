export const createProduct = (product) => {
    return fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(product)
    })

}
export const getProduct = () => {
    return fetch("http://localhost:8000/products", {

        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
        }
    }).then(response => response.json())

}

