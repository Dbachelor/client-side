export const url = "http://mfc-demo.us-east-1.elasticbeanstalk.com/public/"
export const doPost = (setter, data, endpoint) => {
    fetch(`${url}${endpoint}`, {

    method: "POST",
    body: data,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json()).then(data => setter(data))
//setter(response)
}

export const storeData = (data) => {
    localStorage.setItem("mfc", JSON.stringify({data:data}))
}

export const handleRequest = (setLogin,data,endpoint) => {
    return doPost(setLogin,data,endpoint)
}

export const handleLogout = (url) => {
    localStorage.removeItem("mfc")
    window.location = url
    
}

export const getData = () => {
    let data = JSON.parse(localStorage.getItem("mfc"))
    return JSON.stringify(data.data.user);
}