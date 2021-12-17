export const createMessage= (message) => {

    return fetch("http://localhost:8000/messages", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("nst_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(message)
    })

}


export const getMessages = ()=>{
return fetch("http://localhost:8000/messages",{
    headers:{
        "Authorization": `Token ${localStorage.getItem("nst_token")}`,
    }
}).then(res => res.json())


}