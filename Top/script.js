const VALID_LOGIN = 'pcuser';
const VALID_PASSWORD = '2026';

let currentBuildForPurchase = null;
let isLoggedIn = false;

const authModal = document.getElementById('auth-modal');
const buyModal = document.getElementById('buy-modal');
const authStatusDiv = document.getElementById('auth-status');
const selectedBuildInfo = document.getElementById('selected-build-info');

const buildsData = [
  {
    price: "30 000",
    title: "ОФИС / КИБЕРСПОРТ",
    cpuNew: "Ryzen 5 5600G",
    gpuNew: "Встроенная Vega",
    mbNew: "MSI B450M PRO-VDH MAX",
    cpuUsed: "Ryzen 5 3600",
    gpuUsed: "RX 570 8GB",
    mbUsed: "Gigabyte B450M DS3H",
    type: "dual"
  },
  {
    price: "40 000",
    title: "FULL HD LOW/MEDIUM",
    cpuNew: "Ryzen 5 5500",
    gpuNew: "RX 6600 (б/у)",
    mbNew: "ASRock B450M-HDV R4.0",
    cpuUsed: "Ryzen 5 3600",
    gpuUsed: "GTX 1660 Super",
    mbUsed: "MSI B450M-A PRO MAX",
    type: "dual"
  },
  {
    price: "50 000",
    title: "ЛУЧШИЙ БЮДЖЕТНЫЙ GAMING",
    cpuNew: "Ryzen 5 5600",
    gpuNew: "RX 6600",
    mbNew: "Gigabyte B550M DS3H",
    cpuUsed: "Ryzen 5 5600",
    gpuUsed: "RTX 2060 Super",
    mbUsed: "MSI B550M PRO-VDH WIFI",
    type: "dual"
  },
  {
    price: "60 000",
    title: "FULL HD ULTRA",
    cpuNew: "Ryzen 5 5600",
    gpuNew: "RTX 3060 12GB",
    mbNew: "MSI B550 Tomahawk",
    cpuUsed: "Ryzen 5 5600",
    gpuUsed: "RTX 3070",
    mbUsed: "ASUS TUF Gaming B550-PLUS",
    type: "dual"
  },
  {
    price: "70 000",
    title: "ВХОД В AM5",
    cpuNew: "Ryzen 5 7500F",
    gpuNew: "RTX 4060",
    mbNew: "Gigabyte B650M Gaming X AX",
    cpuUsed: "Ryzen 7 5700X",
    gpuUsed: "RTX 3070",
    mbUsed: "MSI MAG B550 Tomahawk",
    type: "dual"
  },
  {
    price: "80 000",
    title: "НАРОДНЫЙ ТОП",
    cpuNew: "Ryzen 5 7500F",
    gpuNew: "RTX 4060 Ti",
    mbNew: "MSI PRO B650-S WIFI",
    cpuUsed: "Ryzen 7 5800X",
    gpuUsed: "RTX 3080",
    mbUsed: "ASUS ROG STRIX B550-F Gaming",
    type: "dual"
  },
  {
    price: "90 000",
    title: "МОЩНЫЙ 1440P",
    cpuNew: "Ryzen 7 7700",
    gpuNew: "RTX 4070",
    mbNew: "Gigabyte B650 AORUS Elite AX",
    cpuUsed: "Ryzen 7 5800X3D",
    gpuUsed: "RTX 3080 Ti",
    mbUsed: "MSI MPG B550 Gaming Plus",
    type: "dual"
  },
  {
    price: "100 000",
    title: "ПОЧТИ HIGH-END",
    cpuNew: "Ryzen 7 7700X",
    gpuNew: "RTX 4070 Super",
    mbNew: "MSI MAG B650 Tomahawk WIFI",
    cpuUsed: "i7-12700K",
    gpuUsed: "RTX 3090",
    mbUsed: "ASUS PRIME Z690-P",
    type: "dual"
  },
  {
    price: "120 000",
    title: "ЛУЧШИЙ GAMING ПК",
    cpuNew: "Ryzen 7 7800X3D",
    gpuNew: "RTX 4070 Super",
    mbNew: "ASUS TUF Gaming B650-PLUS WIFI",
    cpuUsed: "i7-12700K",
    gpuUsed: "RTX 4080",
    mbUsed: "MSI Z690 Tomahawk WIFI",
    type: "dual"
  },
  {
    price: "150 000",
    title: "4K GAMING",
    cpuNew: "Ryzen 7 7800X3D",
    gpuNew: "RTX 4080 Super",
    mbNew: "Gigabyte X670 AORUS Elite AX",
    cpuUsed: "Ryzen 9 7900X",
    gpuUsed: "RTX 4090",
    mbUsed: "ASUS ROG STRIX X670E-F Gaming",
    type: "dual"
  },
  {
    price: "180 000",
    title: "СТРИМИНГ + AAA",
    cpuNew: "Ryzen 9 7900",
    gpuNew: "RTX 5080 / RTX 4090",
    mbNew: "MSI MPG X670E Carbon WIFI",
    cpuUsed: "Ryzen 9 7950X",
    gpuUsed: "RTX 4090",
    mbUsed: "ASRock X670E Steel Legend",
    type: "dual"
  },
  {
    price: "220 000",
    title: "ЭНТУЗИАСТ",
    cpuNew: "Ryzen 7 9800X3D",
    gpuNew: "RTX 5080",
    mbNew: "ASUS ROG STRIX X870E-E Gaming WIFI",
    cpuUsed: null,
    gpuUsed: null,
    mbUsed: null,
    type: "only-new"
  },
  {
    price: "300 000",
    title: "УЛЬТИМАТИВНЫЙ GAMING",
    cpuNew: "Ryzen 9 9950X3D",
    gpuNew: "RTX 5090",
    mbNew: "MSI MEG X870E ACE",
    cpuUsed: null,
    gpuUsed: null,
    mbUsed: null,
    type: "only-new"
  },
  {
    price: "400 000",
    title: "WORKSTATION + GAMING",
    cpuNew: "Threadripper PRO / 9950X",
    gpuNew: "RTX 5090",
    mbNew: "ASUS Pro WS TRX50-SAGE WIFI",
    cpuUsed: null,
    gpuUsed: null,
    mbUsed: null,
    type: "only-new"
  },
  {
    price: "500 000",
    title: "МАКСИМУМ БЕЗ КОМПРОМИССОВ",
    cpuNew: "Ryzen 9 9950X3D",
    gpuNew: "RTX 5090",
    mbNew: "Gigabyte X870E AORUS Xtreme AI TOP",
    cpuUsed: null,
    gpuUsed: null,
    mbUsed: null,
    type: "only-new"
  }
];

function renderBuilds() {
  const container = document.getElementById('builds-container');
  if (!container) return;
  container.innerHTML = '';

  buildsData.forEach((build, idx) => {
    const card = document.createElement('div');
    card.className = 'build-card open';

    let componentsHtml = '';
    if (build.type === 'dual') {
      componentsHtml = `
        <div class="components-grid">
          <div class="col-new">
            <div class="col-header"><span class="badge badge-new">NEW</span></div>
            <div class="component-row"><div class="comp-type">CPU</div><div class="comp-name">${build.cpuNew}</div></div>
            <div class="component-row"><div class="comp-type">GPU</div><div class="comp-name">${build.gpuNew}</div></div>
            <div class="component-row"><div class="comp-type">MB</div><div class="comp-name">${build.mbNew}</div></div>
          </div>
          <div class="col-used">
            <div class="col-header"><span class="badge badge-used">B/У</span></div>
            <div class="component-row"><div class="comp-type">CPU</div><div class="comp-name">${build.cpuUsed}</div></div>
            <div class="component-row"><div class="comp-type">GPU</div><div class="comp-name">${build.gpuUsed}</div></div>
            <div class="component-row"><div class="comp-type">MB</div><div class="comp-name">${build.mbUsed}</div></div>
          </div>
        </div>
      `;
    } else {
      componentsHtml = `
        <div class="build-only-new">
          <div class="col-header" style="margin-bottom:12px"><span class="badge badge-new">NEW</span> только новые</div>
          <div class="only-new-grid">
            <div class="component-row"><div class="comp-type">CPU</div><div class="comp-name">${build.cpuNew}</div></div>
            <div class="component-row"><div class="comp-type">GPU</div><div class="comp-name">${build.gpuNew}</div></div>
            <div class="component-row"><div class="comp-type">MB</div><div class="comp-name">${build.mbNew}</div></div>
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="build-header">
        <div class="build-num">${idx + 1}</div>
        <div class="build-info">
          <div class="build-price">${build.price} ₽</div>
          <div class="build-title">// ${build.title}</div>
        </div>
        <div class="build-toggle">▾</div>
      </div>
      <div class="build-body">
        ${componentsHtml}
        <button class="buy-btn" data-build-index="${idx}">КУПИТЬ</button>
      </div>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-build-index'));
      const build = buildsData[idx];
      openBuyModal(build);
    });
  });

  document.querySelectorAll('.build-header').forEach(header => {
    header.addEventListener('click', function(e) {
      if (e.target.classList && e.target.classList.contains('buy-btn')) return;
      const card = this.closest('.build-card');
      if (card) card.classList.toggle('open');
    });
  });
}

function updateAuthUI() {
  if (isLoggedIn) {
    authStatusDiv.innerHTML = `<span style="color:var(--accent)">✓ ${VALID_LOGIN}</span> <button id="logout-btn" class="logout-btn">Выйти</button>`;
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.onclick = logout;
  } else {
    authStatusDiv.innerHTML = `<span style="color:var(--muted)">Не авторизован</span>`;
  }
}

function logout() {
  isLoggedIn = false;
  sessionStorage.removeItem('pc_auth');
  updateAuthUI();
  alert('Вы вышли из аккаунта. Для покупки войдите снова.');
}

function checkSession() {
  const saved = sessionStorage.getItem('pc_auth');
  if (saved === 'true') {
    isLoggedIn = true;
  }
  updateAuthUI();
}

function attemptLogin(login, pwd) {
  if (login === VALID_LOGIN && pwd === VALID_PASSWORD) {
    isLoggedIn = true;
    sessionStorage.setItem('pc_auth', 'true');
    updateAuthUI();
    closeAuthModal();
    if (currentBuildForPurchase) {
      openBuyModal(currentBuildForPurchase);
      currentBuildForPurchase = null;
    }
    return true;
  }
  return false;
}

function showAuthModal(buildData = null) {
  if (buildData) currentBuildForPurchase = buildData;
  document.getElementById('modal-login').value = '';
  document.getElementById('modal-password').value = '';
  document.getElementById('modal-error').style.display = 'none';
  authModal.style.display = 'flex';
}

function closeAuthModal() {
  authModal.style.display = 'none';
}

function openBuyModal(build) {
  if (!isLoggedIn) {
    showAuthModal(build);
    return;
  }
  let details = `<strong>${build.title}</strong><br>Цена: ${build.price} ₽<br>`;
  if (build.type === 'dual') {
    details += `CPU: ${build.cpuNew} / GPU: ${build.gpuNew}`;
  } else {
    details += `CPU: ${build.cpuNew} / GPU: ${build.gpuNew}`;
  }
  selectedBuildInfo.innerHTML = details;
  document.getElementById('customer-name').value = '';
  document.getElementById('customer-email').value = '';
  document.getElementById('customer-phone').value = '';
  document.getElementById('payment-method').value = 'card';
  buyModal.style.display = 'flex';
}

function closeBuyModal() {
  buyModal.style.display = 'none';
  currentBuildForPurchase = null;
}

function confirmOrder() {
  const name = document.getElementById('customer-name').value.trim();
  const email = document.getElementById('customer-email').value.trim();
  if (!name || !email) {
    alert('Пожалуйста, укажите имя и email');
    return;
  }
  alert(`Спасибо, ${name}! Ваш заказ оформлен.\nДетали отправлены на ${email}`);
  closeBuyModal();
}

renderBuilds();
checkSession();

document.getElementById('close-auth').onclick = closeAuthModal;
document.getElementById('close-buy').onclick = closeBuyModal;
window.onclick = (e) => {
  if (e.target === authModal) closeAuthModal();
  if (e.target === buyModal) closeBuyModal();
};
document.getElementById('modal-auth-btn').onclick = () => {
  const login = document.getElementById('modal-login').value;
  const pwd = document.getElementById('modal-password').value;
  const success = attemptLogin(login, pwd);
  if (!success) {
    document.getElementById('modal-error').style.display = 'block';
  }
};
document.getElementById('confirm-order').onclick = confirmOrder;