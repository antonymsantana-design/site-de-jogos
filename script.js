let texto = ["Lagartixa vs Morcego", "Galeto's hungry", "Lagartixa vs Orangutango", "Oferenda viva"
];
let imagem = ["Gemini_Generated_Image_yzwv7gyzwv7gyzwv (1).jpg", "galetocru.jpg", "orangu.jpg", "oferendaviva.jpg"];
let preco = ["R$ 150,00", "R$ 80,00", "R$ 120,00", "R$ 500,00"];



function cards() {

    let cards = document.querySelector('#cards');

    for (let i = 0; i < texto.length; i++) {
        cards.innerHTML += ` <div class="primeiro" id="primeiro">

            <img src="${imagem[i]}" alt="qualquercoisa">
             <p class="texto">${texto[i]}</p>
             <p class = "preco">${preco[i]}</p>
        </div>`
    }

}
cards()