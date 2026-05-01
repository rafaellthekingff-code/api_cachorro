let imagens = [];

function buscar() {
  const termo = document.getElementById("busca").value.toLowerCase();

  const filtrados = imagens.filter(url => {
    const raca = url.split("/")[4];
    return raca.toLowerCase().includes(termo);
  });

  mostrar(filtrados);
}

const container = document.getElementById("container");

fetch("api.php")
  .then(res => res.json())
  .then(data => {

    imagens = data.message;

    mostrar(imagens);
  });

function mostrar(lista) {
  container.innerHTML = "";

  lista.forEach(url => {

    const partes = url.split("/");
    const raca = partes[4]
      .replace("-", " ")
      .replace(/\b\w/g, l => l.toUpperCase());

    const descricao = `O ${raca} é uma raça de cachorro muito popular.`;

    container.innerHTML += `
      <div class="card">
        <img src="${url}">
        <h2>${raca}</h2>
        <p>${descricao}</p>
      </div>
    `;
  });
}
function carregarMais() {
  fetch("api.php")
    .then(res => res.json())
    .then(data => {
      const novas = data.message;
      imagens = imagens.concat(novas); // junta com as antigas
      mostrar(imagens);
    });
}