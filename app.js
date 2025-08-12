'use strict'
const imagens = [ 
    {   
        nome: 'Imagem 1', 
        url: './img/max-and-ell.jpg'
    
    }, 
    
    { 
        nome: 'Imagem 2', 
        url: './img/Mind-Flayer.jpg' 
    
    }, 
    { 
        nome: 'Imagem 3', 
        url: './img/Nancy-Wheller.jpg' 
    
    }, 

    {
        nome: 'Imagem 4', 
        url: './img/Robin.jpg'
    
    },
  
    {
        nome: 'Imagem 5', 
        url: './img/Steve-and-Eddie.jpg' 
    
    }, 
    
    {
         nome:'Imagem 6', 
         url: './img/Steve-Harrington.jpg'
 
    }, 
 
    { 
        nome:'Imagem 7', 
        url: 'img/Stranger-Things-5.jpg' 

    },
  
    { 
    
        nome:'Imagem 8', 
        url: './img/Stranger-Things.jpg'
    
    }

]


function crearImagem (srcImagem) { 
    const galeria = document.getElementById ('galeria') 
    const imagem = document.createElement('img') 
    const label = document.createElement('div')
    const nome = document.createElement('p')

    imagem.src = srcImagem.url 
    nome.textContent = srcImagem.nome

    galeria.appendChild(imagem)
    galeria.appendChild(label)
    label.appendChild(nome)

}

function carregarImagens () { 
    
    const galeria = document.getElementById('galeria')

 imagens.forEach(crearImagem) 
 
 
 // let contador = 0 
 // const limite = imagens.length -1 
 //  while(contador <= 7 ){ 
 //  const imagem = document.createElement('img') 
 //  imagem.src = imagens[contador] 
 //  galeria.appendChild(imagem)
 // contador++
 // }


}

carregarImagens()