import { getGames } from '../model/gameModel.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.carousel-track');
  const games = getGames();

  games.forEach(game => {
    const div = document.createElement('div');
    div.className = 'game-card';
    div.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <button onclick="comprarJogo('${game.title}')">Comprar</button>
    `;
    container.appendChild(div);
  });
});

// Função para registrar compra do jogo
window.comprarJogo = function(tituloDoJogo) {
  let user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) {
    alert("Você precisa estar logado para comprar jogos.");
    return;
  }

  user.jogosComprados = user.jogosComprados || [];

  if (!user.jogosComprados.includes(tituloDoJogo)) {
    user.jogosComprados.push(tituloDoJogo);
  } else {
    alert("Você já comprou este jogo.");
    return;
  }

  // Atualiza a lista geral de usuários
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users = users.map(u => u.email === user.email ? user : u);

  localStorage.setItem('loggedInUser', JSON.stringify(user));
  localStorage.setItem('users', JSON.stringify(users));
  alert("Jogo comprado com sucesso!");
}
div.innerHTML = `
  <a href="view/jogo.html?jogo=${encodeURIComponent(game.title)}">
    <img src="${game.image}" alt="${game.title}">
    <h3>${game.title}</h3>
  </a>
  <p>${game.description}</p>
`;
