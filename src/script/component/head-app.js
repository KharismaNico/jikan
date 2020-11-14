class HeadApp extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML=`
       <h2>It's kinda like myanimelist.net</h2>
        <h3>using Jikan.moe API I got for 'free'</h3>
        <p>desain kentang, tapi bisa buat cek2 nama anime gitu</p>
       <p>dgn kata lain ini proyek ngasal ngga guna, jgn hujat plis :p</p>`;
    }
}

customElements.define("head-app", HeadApp);
