class CardNews extends HTMLElement {
    constructor() {
        super();
        console.log("CardNews constructor chamado");

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = "<h1>Matheus Azevedo</h1>";
    }
}

customElements.define("card-news", CardNews);
