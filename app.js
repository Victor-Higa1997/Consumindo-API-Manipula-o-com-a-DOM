

let troca_imagem = async () =>{
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        var resp = await response.json() 

        var div = document.getElementById('container')
        
        div.textContent = ''

        var elemento_img = document.createElement('img')

        elemento_img.src = resp[0].url
        //elemento_img.width = 
        //elemento_img.alt = 'gatos'
    
        div.appendChild(elemento_img)
    } catch (error) {
        console.log(error)
    }
}

