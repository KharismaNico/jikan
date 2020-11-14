class HeadApp extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML=`
       <h2>It's kinda like MyAnimeList using Jikan.moe API I got for free</h2>
       <p>dgn kata lain ini proyek ngasal ngga guna, jgn hujat plis</p>`;
    }
}

customElements.define("head-app", HeadApp);
