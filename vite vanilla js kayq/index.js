const cottages = [
  { id: 1, title: '«Green Villa» Ծաղկաձորում', region: 'Ծաղկաձոր', price: 65000, rooms: 4, features: ['Լողավազան', 'Մանղալ'], image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Անտառային Տնակ Դիլիջանում', region: 'Դիլիջան', price: 50000, rooms: 3, features: ['Բուխարի'], image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: '«Sun House» Գառնիում', region: 'Գառնի', price: 80000, rooms: 5, features: ['Լողավազան'], image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80' }
];

function createCard(item) {
  const div = document.createElement('div');
  div.className = 'cottage-card';
  div.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="cottage-img">
    <div class="cottage-body">
      <div class="cottage-region">${item.region}</div>
      <h3 class="cottage-title">${item.title}</h3>
      <p class="cottage-features">${item.rooms} սենյակ • ${item.features.join(', ')}</p>
      <div class="cottage-footer">
        <div class="cottage-price">${item.price.toLocaleString()} ֏ / օր</div>
        <button class="btn btn-primary book-btn">Ամրագրել</button>
      </div>
    </div>
  `;
  div.querySelector('.book-btn').addEventListener('click', () => {
    document.getElementById('bookingModal').style.display = 'flex';
  });
  return div;
}

const featuredGrid = document.getElementById('featuredGrid');
if (featuredGrid) {
  cottages.forEach(c => featuredGrid.appendChild(createCard(c)));
}

const closeModal = document.getElementById('closeModal');
if (closeModal) {
  closeModal.addEventListener('click', () => {
    document.getElementById('bookingModal').style.display = 'none';
  });
}