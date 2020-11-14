class SearchBar extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
       <div id="search-container" class="search-container">
           <input placeholder="Search anime" id="searchElement" type="search">
            <span class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                    search
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" data-filter="all" id="searchButtonAll" type="button">All</button></li>
                    <li><button class="dropdown-item" data-filter="TV" id="searchButtonTV" type="button">TV</button></li>
                    <li><button class="dropdown-item" data-filter="Movie"type="button">Movie</button></li>
                    <li><button class="dropdown-item" data-filter="Special" type="button">Special</button></li>
                    <li><button class="dropdown-item" data-filter="OVA" type="button">OVA</button></li>
                </ul>
            </span>
       </div>
       `;
        const dropdown = this.querySelectorAll(".dropdown-item");
        for(let i=0; i<dropdown.length; i++){
            dropdown[i].addEventListener("click", this._clickEvent)
        }
    }
}

customElements.define("search-bar", SearchBar);