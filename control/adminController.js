document.addEventListener("DOMContentLoaded", function () {
  const user = localStorage.getItem("loggedUser");
  const adminUsers = ["admin@example.com", "joao@example.com"];
  const panel = document.getElementById("admin-panel");

  if (!adminUsers.includes(user)) {
    document.body.innerHTML = "<h1>Acesso negado</h1>";
    return;
  }

  panel.innerHTML = "<h3>Bem-vindo ao painel admin, " + user + "</h3>";

  const compras = JSON.parse(localStorage.getItem('compras')) || [];

  if (compras.length === 0) {
    panel.innerHTML += "<p>Nenhuma compra realizada ainda.</p>";
  } else {
    let tabela = '<table border="1" style="width:100%;color:#0f0;background:#000;">';
    tabela += '<tr><th>Usuário</th><th>Jogo</th><th>Preço</th><th>Data</th></tr>';

    compras.forEach(c => {
      tabela += `<tr>
        <td>${c.usuario}</td>
        <td>${c.jogo}</td>
        <td>R$ ${c.preco}</td>
        <td>${c.data}</td>
      </tr>`;
    });

    tabela += '</table>';
    panel.innerHTML += tabela;
  }
});
