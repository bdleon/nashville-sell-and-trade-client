export const getCategory = () => {
    return fetch("http://localhost:8000/categories", {

        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
        }
    }).then(response => response.json())

}

