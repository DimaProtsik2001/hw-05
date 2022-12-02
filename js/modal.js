(() => {
    const refs = {
      openModalBtn: document.getElementById('openmodal'),
      closeModalBtn: document.getElementById('closemodal'),
      modal: document.getElementById('modal'),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
  