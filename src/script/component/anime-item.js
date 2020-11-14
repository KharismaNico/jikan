class AnimeItem extends HTMLElement {

    constructor() {
        super();
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }
    render() {
        this.innerHTML = `
           <img class="anime-image" src="${this._anime.image_url}" alt="Fan Art">
           <div class="container-anime">
           <div class="anime-info">
               <h2>${this._anime.title}</h2>
               <p>${this._anime.type}</p>
           </div>
           <div class="more-info">
                <a class="open-modal" data-toggle="modal" data-target="#animeDetailModal" data-id="${this._anime.mal_id}">See details</a>
                <a class="open-link" href="${this._anime.url}" target="_blank">Go to MAL</a>
           </div>
           </div>`;
    }
}

customElements.define("anime-item", AnimeItem);