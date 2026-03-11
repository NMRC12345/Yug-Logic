// enquiry success modal
const enquiryBtn = document.getElementById('enquiryBtn');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');

if (enquiryBtn && successModal && closeModalBtn) {
  enquiryBtn.addEventListener('click', () => {
    // yahan future me form validation / actual submit laga sakte ho
    successModal.classList.add('active');
  });

  const closeModal = () => successModal.classList.remove('active');

  closeModalBtn.addEventListener('click', closeModal);
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) closeModal(); // backdrop click to close
  });
}
