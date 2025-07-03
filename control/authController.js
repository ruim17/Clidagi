function register(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  
  // Checar se já existe usuário
  if (localStorage.getItem('user_' + username)) {
    alert('Usuário já cadastrado.');
    return;
  }
  
  localStorage.setItem('user_' + username, password, email);
  alert('Usuário cadastrado com sucesso!');
}

function login(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const storedPass = localStorage.getItem('user_' + username);
  if (storedPass === password) {
    alert('Login bem-sucedido!');
    localStorage.setItem('loggedUser', username);
    window.location.href = 'index.html';
  } else {
    alert('Usuário ou senha incorretos!');
  }
}
