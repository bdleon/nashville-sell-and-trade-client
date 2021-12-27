export const createProduct = (product) => {

    return fetch("https://nashville-sell-and-trade.herokuapp.com/products", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(product)
    })

}
export const getProduct = (categories) => {

    let url = 'https://nashville-sell-and-trade.herokuapp.com/products?'
    for (let category of categories) {
        url += `category=${category}&`
    }
    return fetch(url, {

        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
        }
    }).then(response => response.json())

}

export const getUserProduct = () => {
    return fetch(`https://nashville-sell-and-trade.herokuapp.com/products/my_products`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
        }
    }).then(res => res.json())
}

export const deleteProduct = (id) => {

    return fetch(`https://nashville-sell-and-trade.herokuapp.com/products/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`
        }
    })
}

export const editProduct = (product) => {

    return fetch(`https://nashville-sell-and-trade.herokuapp.com/products/${product.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
            "Content-Type": "application/json"

        },
        body: JSON.stringify(product)
    })
}

export const getSingleProduct = (id) => {
    return fetch(`https://nashville-sell-and-trade.herokuapp.com/products/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
        }
    }).then(response => response.json())
}
