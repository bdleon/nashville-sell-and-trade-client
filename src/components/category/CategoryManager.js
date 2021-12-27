export const getCategory = () => {
    return fetch("https://nashville-sell-and-trade.herokuapp.com/categories", {

        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
        }
    }).then(response => response.json())

}

