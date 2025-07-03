export function getGames() {
  return JSON.parse(localStorage.getItem('games')) || [];
}

export function addGame(game) {
  let games = JSON.parse(localStorage.getItem('games')) || [];
  games.push(game);
  localStorage.setItem('games', JSON.stringify(games));
}
