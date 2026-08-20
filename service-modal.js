document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("serviceRequestModal");
  const iframe = document.getElementById("serviceRequestForm");
  const loading = document.getElementById("serviceFormLoading");
  const selectedBox = document.getElementById("selectedServiceBox");
  const selectedName = document.getElementById("selectedServiceName");

  if (!modal || !iframe) return;

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe3TSeDoywm17QSOvj3Tx4Vcoh1Xv-tJB6jUr8LsFxjOTy8Ig/viewform?embedded=true";

  function openModal(service) {
    if (service && selectedBox && selectedName) {
      selectedName.textContent = service;
      selectedBox.hidden = false;
    }

    iframe.src = formUrl;
    iframe.hidden = false;
    if (loading) loading.hidden = true;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll("[data-service-request]").forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.getAttribute("data-service-request"));
    });
  });

  modal.querySelectorAll("[data-modal-close]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
