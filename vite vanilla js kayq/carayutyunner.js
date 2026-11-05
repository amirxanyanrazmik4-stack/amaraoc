const defaultCottages = [
  { 
    id: 1, 
    title: '«Green Villa» Ծաղկաձորում', 
    region: 'Ծաղկաձոր', 
    price: 65000, 
    rooms: 4, 
    features: ['Լողավազան', 'Մանղալ'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1762686772282--0.7753343924665224image.webp&w=1920&q=75' 
  },
  { 
    id: 2, 
    title: 'Անտառային Տնակ Դիլիջանում', 
    region: 'Դիլիջան', 
    price: 50000, 
    rooms: 3, 
    features: ['Բուխարի'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1759149473223--0.33907271602966693image.webp&w=1920&q=75' 
  },
  { 
    id: 3, 
    title: '«Sun House» Գառնիում', 
    region: 'Գառնի', 
    price: 80000, 
    rooms: 5, 
    features: ['Լողավազան'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792584497439--0.8586904647695983image.webp&w=1920&q=75' 
  },
  { 
    id: 4, 
    title: 'Ափնյա Առանձնատուն Սևանում', 
    region: 'Սևան', 
    price: 95000, 
    rooms: 6, 
    features: ['Սաունա'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1772031870801--0.4223948999945075image.webp&w=1920&q=75' 
  },
  { 
    id: 5, 
    title: '«Alps View» Ծաղկաձորում', 
    region: 'Ծաղկաձոր', 
    price: 70000, 
    rooms: 4, 
    features: ['Բուխարի', 'Մանղալ'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1760001713184--0.39324297563530597image.webp&w=1920&q=75' 
  },
  { 
    id: 6, 
    title: '«Eco Lodge» Դիլիջանում', 
    region: 'Դիլիջան', 
    price: 45000, 
    rooms: 2, 
    features: ['Բնություն'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1763196873802--0.32875657677659165image.webp&w=1920&q=75' 
  },
  { 
    id: 7, 
    title: '«Panorama House» Գառնիում', 
    region: 'Գառնի', 
    price: 85000, 
    rooms: 5, 
    features: ['Լողավազան'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792135295311--0.5062816674800377image.webp&w=1920&q=75' 
  },
  { 
    id: 8, 
    title: '«Sevan Blue» Առանձնատուն', 
    region: 'Սևան', 
    price: 110000, 
    rooms: 7, 
    features: ['Լողավազան', 'Սաունա'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1746091956940--0.06433901863412572image.webp&w=1920&q=75' 
  },
  { 
    id: 9, 
    title: '«Alpine Resort» Ծաղկաձորում', 
    region: 'Ծաղկաձոր', 
    price: 90000, 
    rooms: 6, 
    features: ['Սաունա'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793703361369--0.5095088858706045image.webp&w=1920&q=75' 
  },
  { 
    id: 10, 
    title: '«Forest Haven» Դիլիջանում', 
    region: 'Դիլիջան', 
    price: 55000, 
    rooms: 3, 
    features: ['Մանղալ'], 
    image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793532484151--0.36006300157044246image.webp&w=1920&q=75' 
  }
];

let savedCottages = JSON.parse(localStorage.getItem('cottages'));
let cottages = (savedCottages && savedCottages.length > 0) ? savedCottages : defaultCottages;

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
    const modal = document.getElementById('bookingModal');
    if (modal) modal.style.display = 'flex';
  });
  return div;
}

function renderList(items) {
  const grid = document.getElementById('allListingsGrid');
  if (grid) {
    grid.innerHTML = '';
    items.forEach(c => grid.appendChild(createCard(c)));
  }
}

function applyFilters() {
  const regions = Array.from(document.querySelectorAll('.filter-region:checked')).map(cb => cb.value);
  const maxPrice = Number(document.getElementById('priceRange').value);
  const rooms = document.getElementById('roomsSelect').value;
  const features = Array.from(document.querySelectorAll('.filter-feature:checked')).map(cb => cb.value);

  const filtered = cottages.filter(item => {
    const matchReg = regions.length === 0 || regions.includes(item.region);
    const matchPrice = item.price <= maxPrice;
    const matchRooms = rooms === 'all' || item.rooms >= Number(rooms);
    const matchFeat = features.every(f => item.features.includes(f));
    return matchReg && matchPrice && matchRooms && matchFeat;
  });

  renderList(filtered);
}

document.querySelectorAll('.filter-region, .filter-feature').forEach(el => el.addEventListener('change', applyFilters));
document.getElementById('roomsSelect')?.addEventListener('change', applyFilters);

const priceRange = document.getElementById('priceRange');
if (priceRange) {
  priceRange.addEventListener('input', (e) => {
    document.getElementById('priceVal').textContent = Number(e.target.value).toLocaleString();
    applyFilters();
  });
}

document.getElementById('resetFilters')?.addEventListener('click', () => {
  document.querySelectorAll('.sidebar-filter input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.getElementById('roomsSelect').value = 'all';
  document.getElementById('priceRange').value = 150000;
  document.getElementById('priceVal').textContent = '150,000';
  renderList(cottages);
});

document.getElementById('newListingForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = {
    id: Date.now(),
    title: document.getElementById('newTitle').value,
    region: document.getElementById('newRegion').value,
    price: Number(document.getElementById('newPrice').value),
    rooms: Number(document.getElementById('newRooms').value),
    features: document.getElementById('newFeatures').value.split(',').map(s => s.trim()),
    image: document.getElementById('newImage').value
  };
  cottages.unshift(newItem);
  localStorage.setItem('cottages', JSON.stringify(cottages));
  renderList(cottages);
  e.target.reset();
});

const closeModal = document.getElementById('closeModal');
if (closeModal) {
  closeModal.addEventListener('click', () => {
    document.getElementById('bookingModal').style.display = 'none';
  });
}

renderList(cottages);