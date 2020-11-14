import "../component/anime-list.js"
import "../component/search-bar.js"

const main = ()=>{
    const searchElement = document.querySelector("search-bar");
    const animeListElement = document.querySelector("anime-list");
    
    function getAnimes(keyword){
        return fetch("https://api.jikan.moe/v3/search/anime?q=" + keyword)
            .then(response => response.json())
            .then(response => {
                return response.results})   
    }

    const onButtonSearchClicked = async (e) => {
        try{
            const result = await getAnimes(searchElement.value);
            // const resultFiltered = await filter_function(result);
            const filter = e.target.dataset.filter;
            if(filter==="TV"){
                const results = filter_function(result, "TV")
                renderResult(results);
            }else if(filter=="Movie"){
                const results = filter_function(result, "Movie")
                renderResult(results);
            }else if(filter=="Special"){
                const results = filter_function(result, "Special")
                renderResult(results);
            }else if(filter=="OVA"){
                const results = filter_function(result, "OVA")
                renderResult(results);
            } else{
                renderResult(result)
            }
        } catch (message) {
            fallbackResult(message)
        }
    };


    document.addEventListener("click", function(e){

        if(e.target.classList.contains('open-modal')){
            const malID = e.target.dataset.id;
            fetch("https://api.jikan.moe/v3/anime/"+malID)
            .then(response => response.json())
            .then(response =>{
                const details = showAnimeDetail(response);
                const modalBody = document.querySelector('.modal-body')
                modalBody.innerHTML = details
            }).catch(e =>{
                alert(e)
            })
        }
    })
    function showAnimeDetail(response){
        return `<div class="container-fluid">
                        <div class="row">
                        <div class="col-md-3">
                            <img src="${response.image_url}" alt="" class="img-fluid">
                            <h6>Status: ${response.status}</h6>
                            <h6>Rating: ${response.rating}</h6>
                            <!-- <h6>hhhh</h6> -->
                        </div>
                        <div class="col-md">
                          <ul class="list-group">
                              <li class="list-group-item"><h4>${response.title} (${response.title_synonyms})</h4></li>
                              <li class="list-group-item"><strong>Source: </strong> ${response.source}</li>
                              <li class="list-group-item"><strong>Episodes: </strong>${response.episodes}</li>
                              <li class="list-group-item"><strong>Score: </strong>${response.score}</li>
                              <li class="list-group-item"><strong>Synopsis: </strong>${response.synopsis}</li>
                            </ul>
                        </div>
                    </div>
                    </div>`;
    }
    const renderResult =  results => {
        animeListElement.animes = results;
    };

    const fallbackResult = message => {
        animeListElement.renderError(message);
    };
    function filter_function(objs, filter){

        let arr = []
        objs.forEach( obj =>{
            if(obj.type === filter){
                arr.push(obj)
            }
        } 
        )
        return arr
    }
    searchElement.clickEvent = onButtonSearchClicked;
}
export default main 