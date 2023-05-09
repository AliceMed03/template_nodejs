/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
    return knex("livros").del()
    .then(function() {
        return knex("livros").insert([
    {
      titulo:"Web Design Responsivo", autor: "Mauricio Silva", ano: 2014, preco: 73.0, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/4e37aef84e7eb21870481f92721651377842bc42.jpg"
    },
    {
      titulo:"Café Com Deus Pai", autor: "Júnior Rostirola", ano:2022, preco:52.06, foto: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0tUkdNVpBBH1C3j1CRbiv4si5XiXc8P_OWuXTEfo0OcGMcPVR4lm925aokYGA1wV4EPYcCEQSjo67tiL0J7HOHfhVHP5ZmMynVy7_6sjiit-v_9pBy6VzXw&usqp=CAE"
    },
    {
      titulo:"É Assim Que Acaba", autor: "Colleen Hoover", ano:2016, preco:28.71, foto: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFK2g6mfHz3Y6imdoDO3-B7ebFo7pgHYN4hkgKxPUg-bnjvedV7TnhcBwW6qSFe2_5jOrnxOOUbTXXuVRMiK74IGjMAkaoCHkPU8Anp6tB&usqp=CAE"
    },
    {
      titulo:"O Poder da Autorresponsabilidade", autor: "Paulo Vieira", ano:2018, preco:7.86, foto: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRUoZzdy1Z7dhP-dK315TSsOLE1h3Km6TFSR03FNZISi6ghIXY9wEjN1PDQZim-110CKbU2T3bCzjYhuZOXAUxu1rbUwhhTh2-RAKi1EcdmhXvkD1BUQUMr&usqp=CAE"
    },
    {
      titulo:"A Mandíbula de Caim", autor: "Edward Powys Mathers", ano:1934, preco:39.90, foto: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_-xD1Illx-IvH6bAGGecAW2TuMffs_7_wzKz9foEPkqT6te62lCJQb7ix9m9W-EdS55nouF8_JYqnDZk31jJVDEtQVprs7Ll90aJtIdWqQR59FnnL3C1R_A&usqp=CAE"
    },
  ]);
    });
}
