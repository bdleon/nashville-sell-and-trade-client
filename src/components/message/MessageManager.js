export const createMessage= (message) => {

    return fetch("https://nashville-sell-and-trade.herokuapp.com/messages", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(message)
    })

}


export const getMessages = ()=>{
return fetch("https://nashville-sell-and-trade.herokuapp.com/messages",{
    headers:{
        "Authorization": `Token ${localStorage.getItem("nst_token")}`,
    }
}).then(res => res.json())


}