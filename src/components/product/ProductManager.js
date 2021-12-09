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
export const getProduct = (categories) => {
   
    let url='http://localhost:8000/products?'
    for (let category of categories){
        url += `category=${category}&`
    }
    return fetch(url, {

        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
        }
    }).then(response => response.json())

}

