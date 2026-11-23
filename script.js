const form = document.getElementById('contactForm');
const list = document.getElementById('contactList');
const count = document.getElementById('contactCount');
const KEY = 'safeher-trusted-contacts-v1';
let contacts = [];
try { contacts = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { contacts = []; }

function save() { localStorage.setItem(KEY, JSON.stringify(contacts)); render(); }
function render() {
  count.textContent = `${contacts.length} saved`;
  if (!contacts.length) { list.innerHTML = '<p class="empty">No contacts added yet. Add someone you trust.</p>'; return; }
  list.innerHTML = '';
  contacts.forEach((c, i) => {
    const row = document.createElement('div'); row.className = 'contact-row';
    const info = document.createElement('div');
    const name = document.createElement('b'); name.textContent = c.name;
    const phone = document.createElement('small'); phone.textContent = c.phone;
    info.append(name, phone);
    const actions = document.createElement('div'); actions.className = 'contact-actions';
    const call = document.createElement('a'); call.href = `tel:${c.phone.replace(/[^+\d]/g,'')}`; call.textContent = 'Call';
    const remove = document.createElement('button'); remove.className = 'remove'; remove.textContent = 'Remove';
    remove.addEventListener('click', () => { contacts.splice(i, 1); save(); });
    actions.append(call, remove); row.append(info, actions); list.append(row);
  });
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  if (!name || phone.replace(/\D/g, '').length < 7) { alert('Please enter a name and a valid phone number.'); return; }
  contacts.push({name, phone}); save(); form.reset();
});

function locate() {
  const out = document.getElementById('locationResult');
  if (!navigator.geolocation) { out.textContent = 'Geolocation is not supported by this browser.'; return; }
  out.textContent = 'Requesting location permission…';
  navigator.geolocation.getCurrentPosition(
    p => {
      const lat = p.coords.latitude.toFixed(5), lon = p.coords.longitude.toFixed(5);
      out.replaceChildren();
      const line = document.createElement('p'); line.textContent = `Latitude: ${lat} · Longitude: ${lon}`;
      const link = document.createElement('a'); link.href = `https://www.google.com/maps?q=${lat},${lon}`; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'Open on map';
      out.append(line, link);
    },
    err => { out.textContent = err.code === 1 ? 'Location permission was denied. You can enable it in browser settings.' : 'Could not get your location. Check GPS and try again.'; },
    {enableHighAccuracy:true, timeout:10000}
  );
}
document.getElementById('locationBtn').addEventListener('click', locate);
document.getElementById('locationBtn2').addEventListener('click', locate);
render();
