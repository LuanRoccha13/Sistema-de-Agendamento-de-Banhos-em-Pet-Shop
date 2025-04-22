
async function carregarAgendamentos() {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/agendamentos", {
      headers: { Authorization: "Bearer " + token }
    });
    const lista = await res.json();
    const div = document.getElementById("listaAgendamentos");
    div.innerHTML = "";
    lista.forEach(item => {
      div.innerHTML += `
        <div style="border:1px solid #ccc;padding:10px;margin:10px 0;">
          <p><strong>Pet:</strong> ${item.nome_pet}</p>
          <p><strong>Raça:</strong> ${item.raca}</p>
          <p><strong>Data:</strong> ${item.data}</p>
          <p><strong>Horário:</strong> ${item.horario}</p>
          <p><strong>Observações:</strong> ${item.observacoes}</p>
          <img src="http://localhost:3000/uploads/${item.imagem}" style="max-width:100px;">
        </div>
      `;
    });
  }
  carregarAgendamentos();
  