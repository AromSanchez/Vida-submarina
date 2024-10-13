document.getElementById('anecdoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('image').value || 'https://via.placeholder.com/300x200'; // Imagen predeterminada si no se ingresa una URL

    const newCard = document.createElement('div');
    newCard.classList.add('experience-card');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('card-img');

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    newCard.appendChild(img);
    newCard.appendChild(h3);
    newCard.appendChild(p);

    document.getElementById('experienceGrid').appendChild(newCard);

    document.getElementById('anecdoteForm').reset();

    newCard.scrollIntoView({ behavior: 'smooth' });
});
