class HeadApp extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML=`
       <h2>MyAnimeList using Jikan.moe API</h2>
       <p>submission dicoding</p>`;
    }
}

customElements.define("head-app", HeadApp);