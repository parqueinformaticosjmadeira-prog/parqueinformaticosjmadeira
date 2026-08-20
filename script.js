document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  document.querySelectorAll('a[href*=".html"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href");
      if (!target || target.startsWith("#")) return;
      event.preventDefault();
      document.body.classList.add("page-leaving");
      window.setTimeout(() => {
        window.location.href = target;
      }, 180);
    });
  });
});


// Mostra no formulário o serviço escolhido na página de serviços.
const serviceNotice = document.getElementById("service-notice");
if (serviceNotice) {
  const params = new URLSearchParams(window.location.search);
  const service = params.get("servico");

  const serviceNames = {
    office: "Instalação do Office para Windows",
    adobe: "Instalação do Adobe Creative Cloud",
    fotografia: "Fotografia para Consultores Imobiliários",
    "edicao-fotografia": "Edição e tratamento de fotografias",
    dvd: "Recuperação de filmes em DVD",
    musica: "Recuperação de músicas",
    explicacoes: "Explicações de informática online",
    ssd: "Troca de HDD/HD por SSD"
  };

  if (service && serviceNames[service]) {
    serviceNotice.hidden = false;
    serviceNotice.innerHTML = `<strong>Serviço selecionado:</strong> ${serviceNames[service]}<br><span>Preencha o formulário abaixo e indique este serviço no seu pedido.</span>`;
  }
}
