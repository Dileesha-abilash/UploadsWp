
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');


const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageNumber = document.getElementById('page-number');

let currentPage = 1;

function updateContainers() {
 if (currentPage === 1) {
  container1.classList.remove('hidden');
  container2.classList.add('hidden');
 } else if (currentPage === 2) {
  container1.classList.add('hidden');
  container2.classList.remove('hidden');
 }
 pageNumber.textContent = currentPage;
}

nextButton.addEventListener('click', () => {
 if (currentPage < 2) {
  currentPage++;
  updateContainers();
 }
});

prevButton.addEventListener('click', () => {
 if (currentPage > 1) {
  currentPage--;
  updateContainers();
 }
});

updateContainers();
