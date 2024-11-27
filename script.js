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



// Récupérer les éléments interactifs
const interactiveElements = document.querySelectorAll('.nav-link, #service-options li, .modal');

// Ajouter un gestionnaire d'événements
interactiveElements.forEach(element => {
    element.addEventListener('click', (event) => {
        // Appliquer event.preventDefault() uniquement pour les liens de navigation
        if (element.classList.contains('nav-link')) {
            event.preventDefault(); // Empêche l'action par défaut des liens
        }

        // Retirer la classe 'clicked' de tous les éléments
        interactiveElements.forEach(el => el.classList.remove('clicked'));

        // Ajouter la classe 'clicked' à l'élément cliqué
        element.classList.add('clicked');
    });
});

// Gestion séparée pour les cases à cocher
const serviceCheckboxes = document.querySelectorAll('#service-options input[type="checkbox"]');
const totalDisplay = document.getElementById('total');

serviceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let total = 0;

        // Parcourir toutes les cases à cocher pour calculer le total
        serviceCheckboxes.forEach(cb => {
            if (cb.checked) {
                total += parseInt(cb.value, 10); // Ajouter la valeur de l'élément coché
            }
        });

        // Mettre à jour le total
        totalDisplay.textContent = total;
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



// Récupérer les boutons et le conteneur
const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');
const contentContainer = document.getElementById('content-container');

// Appliquer la vue en grille
gridViewButton.addEventListener('click', () => {
  contentContainer.classList.remove('list-view');
  contentContainer.classList.add('grid-view');
});

// Appliquer la vue en liste
listViewButton.addEventListener('click', () => {
  contentContainer.classList.remove('grid-view');
  contentContainer.classList.add('list-view');
});




// Éditeur intégré
const editorBox = document.getElementById('editorBox');
editorBox.addEventListener('input', () => {
  console.log('Texte édité :', editorBox.value);
});

// Recherche instantanée
const articles = [

  '27 сайтов с заданиями на отточку навыков программирования',
  'Готовимся к собеседованию в Google: 8 месяцев непрерывной работы',
  '15 материалов по разработке игр',
  '10 лучших видеокурсов по изучению Linux',
  'Программа освоения современного JavaScript'

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



