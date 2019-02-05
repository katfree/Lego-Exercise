// Some starter code
document.querySelector("#submit").addEventListener('click', event => {

    const creator = document.querySelector("#lego__creator").value
    const creation = document.querySelector("#creationName").value
    const color = document.querySelector("#creationColor").value
    const shape = document.querySelector("#creationShape").value


    const legoToSave = {
        creator: creator,
        creation: creation,
        color: color,
        shape: shape

    }

    


    fetch("http://localhost:8088/LegoCreations", {
        method: "POST",

        headers: {
            // 'Accept': 'application/json',
            "Content-Type": "application/json"
        },

        body: JSON.stringify(legoToSave)

    })

    
})





