function toggleMod() {
  const html = document.documentElement
  html.classList.toggle("dark")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("dark")) {
    img.src = "./assets/avatar-dark.png"
    img.img
    alt =
      "foto de Ana Paula Simeão usando óculos, com cabelo solto cobrindo todo o fundo"
  } else {
    img.src = "./assets/avatar.png"
    img.alt =
      "foto de Ana Paula Simeão usando óculos, camiseta preta e fundo branco"
  }
}

//if(html.classList.contains('dark'))
//{html.classList.remove('dark')}
//else{html.classList.add('dark')}

//pegar a tag img substituir a imagem.
//se tiver light mode adicionar a imagem light se tiver dark, manter a imagem normal.
