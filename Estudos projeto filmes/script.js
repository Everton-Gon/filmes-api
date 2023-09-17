const base_url = "https://api.themoviedb.org/3/"
const apiKey = "?api_key=7d14869f82ca6dee1750249a3ab5f398"
const language = "&language=pt-BR"
const pagUrl = "&page="
const img_url = "https://image.tmdb.org/t/p/w500"

async function buscarItens(tipo, categoria, pagina){
    try{
       
        const request = await fetch(`${base_url}${tipo}/${categoria}${apiKey}${language}${pagUrl}${pagina}`)
        const response = await request.json()
        const resultado = await response.results

        

        // resultado.forEach((filmes) => {
        //     if(tipo === "movie"){
        //         console.log(filmes.title, filmes.release_date)
        //     }else{
        //         console.log(filmes.name)
        //     }
        //     })

        resultado.forEach((item) => {
            if(tipo === "movie"){
                console.log(item.title, img_url + item.poster_path)
            }else{
                console.log(item.name, img_url + item.poster_path)
            }
            })

        // const body = document.body
        const div_lista_itens = document.querySelector(".lista_itens")
        resultado.forEach((item)=>{
            const titulo_item = document.createElement("h1")
            titulo_item.textContent = item.title
            // div_lista_itens.appendChild(titulo_item)

            const titulo_itens = document.createElement("h1")
            titulo_itens.textContent = item.name
            // div_lista_itens.appendChild(titulo_itens)

            const imagem_criada = document.createElement("img")
            imagem_criada.src = img_url+item.poster_path
            // div_lista_itens.appendChild(imagem_criada)

            const div = document.createElement("div")
            div.appendChild(titulo_itens)
            div.appendChild(titulo_item)
            div.appendChild(imagem_criada)

            div_lista_itens
        })



    }catch(error){
        throw new Error(error.message)
    }
}

const categoria_filme = {
    now_playing: "now_playing",
    popular:"popular",
    top_rated:"top_rated",
    upcoming:"upcoming"
}

const categoria_serie = {
    airing_today: "airing_today",
    on_the_air:"on_the_air",
    popular:"popular",
    top_rated:"top_rated"
}
const tipos = {
    movie:"movie",
    tv: "tv"
} 
buscarItens("movie","popular", "2")
buscarItens("tv","top_rated", "3")
buscarItens("tv",categoria_serie.airing_today,"1")
buscarItens(tipos.movie, categoria_filme.now_playing, "5")