import './anime-item.js';

class AnimeList extends HTMLElement {

    constructor() {
        super();
    }

    set animes(animes) {
        this._animes = animes;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._animes.forEach(anime => {
            const animeItemElement = document.createElement("anime-item");
            animeItemElement.anime = anime;
            this.appendChild(animeItemElement);
        })
    }

    renderError(message) {
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("anime-list", AnimeList);