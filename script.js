// script.js

// Gestion du total pour les services sélectionnés
const serviceOptions = document.querySelectorAll('#service-options input');
const totalElement = document.getElementById('total');

serviceOptions.forEach(option => {
  option.addEventListener('change', () => {
    let total = 0;
    serviceOptions.forEach(opt => {
      if (opt.checked) total += parseInt(opt.value);
    });
    totalElement.textContent = total;
  });
});





// Récupérer tous les liens de navigation
const navLinks = document.querySelectorAll('.nav-link');
// Récupérer toutes les modals
const modals = document.querySelectorAll('.modal');
// Récupérer tous les boutons de fermeture
const closeButtons = document.querySelectorAll('.close');

// Fonction pour ouvrir une modal
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const modalId = link.getAttribute('data-modal'); // Récupérer l'ID de la modal
        const modal = document.getElementById(modalId); // Trouver la modal correspondante
        modal.style.display = 'flex'; // Afficher la modal
    });
});

// Fonction pour fermer une modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-close'); // Récupérer l'ID de la modal
        const modal = document.getElementById(modalId); // Trouver la modal correspondante
        modal.style.display = 'none'; // Masquer la modal
    });
});

// Fermer la modal si on clique en dehors de son contenu
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});







// Éditeur intégré
const editorBox = document.getElementById('editorBox');
editorBox.addEventListener('input', () => {
  console.log('Texte édité :', editorBox.value);
});

// Recherche instantanée
const articles = [
  '27 sites avec des tâches à aiguiser compétences en programmation',
  'Nous nous préparons pour un entretien sur Google: 8 mois de travail continu',
  '15 matériaux de développement de jeux',
  'Les 10 meilleurs cours vidéo pour apprendre Linux',
  'Programme de maîtrise JavaScript moderne'
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  const filtered = articles.filter(article =>
    article.toLowerCase().includes(query)
  );
  filtered.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    searchResults.appendChild(li);
  });
});
