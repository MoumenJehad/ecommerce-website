const socialButton = document.getElementById('socialButton');
const popup = document.getElementById('popup');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

popup.style.display = 'none'; 

let isPopupVisible = false;

socialButton.addEventListener('click', function() {
  isPopupVisible = !isPopupVisible;
  if (isPopupVisible) {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
});

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    alert('قمت بالبحث عن: ' + searchTerm);
  }
});

document.addEventListener('click', function(event) {
  const target = event.target;
  if (!target.closest('.social-icons') && !target.closest('.popup') && isPopupVisible) {
    popup.style.display = 'none';
    isPopupVisible = false;
  }
});
