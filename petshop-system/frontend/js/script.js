
document.getElementById("imagem").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("preview");
    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    }
  });
  
  document.getElementById("formAgendamento").addEventListener("submit", async function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/agendamentos", {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
      body: formData,
    });
    const data = await res.json();
    alert(data.mensagem || "Erro ao agendar.");
    if (res.ok) location.href = "dashboard.html";
  });
  