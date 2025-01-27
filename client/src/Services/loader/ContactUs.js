
async function getContacts(){
    const url = ""

    const response = await fetch(url, {
        method: "GET",
    })

    
    return response.data;
}

export default getContacts    