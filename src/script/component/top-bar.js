
class TopBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML += `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-image: url("https://image.freepik.com/free-photo/junk-food-black-slate-with-copy-space_23-2148273109.jpg");
               background-size: cover;
               background-position: center;
               background-repeat: no-repeat;
               position: relative;
               color: black;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
               height:700px;
               max-height:700px;
           }
           h2 {
               padding: 16px;
               overflow: hidden;
               background-color: #333;
               color: white;
               opacity:0.8;
           }
           .judul{
            min-height: 520px;
            width: 100%;
            font-size: 25px;
             padding: 100px;
             text-align: center;
             color: white;
           }
           .makan{
            font-family: 'Times New Roman';
          }
          
          .sub_makan{
            font-family: 'calibri';
          }
          .tombol{
            width: 200px;
            cursor: pointer;
            margin-left: auto;
            padding: 22px;
            background-color: red;
            border: 0;
            text-transform: uppercase;
            border-radius: 10px;
          }
          
       </style>
           <h2>Makan Besar</h2>
           <div class="judul">
           <h1 class="makan">MAKAN BESAR</h1>
           <p class="sub_makan">Cari Tahu Informasi Seputar Makanan Kesukaan Anda</p>
           <p class="sub_makan">Resep nya dan juga cara membuatnya</p>
           <br>
           <p class="sub_makan">Yuk Makan!</p>
           <button class="tombol"><a href="#searchbar" style="color:white;">Cari Makanan</a></button>
           </div>
       `;
    }
}

customElements.define("top-bar", TopBar);