async function enviaDados(){
    event.preventDefault()            
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    
    let response =  await fetch('/dados', {
        method:'POST',
        headers: {
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'nome': nome, 'email': email})
    })
    response = response.json()
    console.log(response)
}