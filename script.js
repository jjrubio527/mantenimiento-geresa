// LISTA COMPLETA DE ESTABLECIMIENTOS (RED CHICLAYO, FERREÑAFE Y LAMBAYEQUE)
const eessLista = [
    "C.S. Chiclayo", "C.S. José Olaya", "C.S. San Antonio", "C.S. Jorge Chávez", "C.S. Verónica Stack de Tomis (Túpac Amaru)",
    "C.S. José Quiñones Gonzales", "P.S. Cruz de la Esperanza", "C.S. Cerropón", "C.S. José Leonardo Ortiz", "C.S. Pedro Pablo Atusparias",
    "C.S. Paul Harris", "P.S. Culpón", "P.S. Santa Ana", "P.S. Villa Hermosa", "C.S. Elohim JLO", "C.S. La Victoria",
    "P.S. La Victoria Sector II - María Jesús", "P.S. Antonio Raymondi", "C.S. Víctor Enrique Tirado Bonilla (Chongoyape)",
    "P.S. Pampa Grande", "P.S. Las Colmenas", "P.S. Huaca Blanca", "C.S. Pomalca", "P.S. San Luis", "P.S. San Antonio (Pomalca)",
    "C.S. Picsi", "P.S. Capote", "C.S. Juan José Cruz Venegas", "C.S. Pimentel", "P.S. Santa Rosa", "C.S. Monsefú", "C.S. Ciudad Eten",
    "P.S. Puerto Eten", "C.S. Reque", "P.S. Montegrande", "P.S. Las Delicias", "P.S. Franco Basaglia - Reque", "C.S. Oyotún",
    "P.S. El Espinal", "P.S. Pan de Azúcar", "P.S. La Compuerta", "P.S. Nueva Arica", "C.S. Cayaltí", "P.S. Sipán", "C.S. Zaña",
    "P.S. Collique", "P.S. Guayaquil", "P.S. Virgen de las Mercedes (La Otra Banda)", "P.S. Saltur", "C.S. Pósope Alto", "C.S. Tumán",
    "P.S. Pampa La Victoria", "C.S. Lagunas - Mocupe Nuevo", "P.S. Mocupe Viejo", "P.S. Lagunas", "P.S. Pueblo Libre",
    "Hospital Referencial Ferreñafe", "C.S. Francisco Muro Pacheco (Pueblo Nuevo)", "C.S. Señor de la Justicia", "C.S. Pítipo",
    "P.S. Batangrande", "P.S. Cachinche", "C.S. Manuel Antonio Mesones Muro", "C.S. Inkawasi", "C.S. Moyán", "P.S. Laquipampa",
    "P.S. Cruz Loma", "P.S. Huayrul", "P.S. Lanchipampa", "P.S. Uyurpampa", "P.S. Canchachalá", "P.S. Kongacha", "P.S. Marayhuaca",
    "P.S. Totoras", "P.S. Cañaris", "P.S. Huacapampa", "C.S. Toribia Castro Chirinos", "C.S. San José", "P.S. Bodegones",
    "P.S. Ciudad de Dios (Juan Tomis Stack)", "C.S. Mórrope", "P.S. El Romero", "P.S. Cruz de Paredones", "P.S. Arbolsol",
    "P.S. Annape", "C.S. Íllimo", "P.S. Chirimoyo", "P.S. Granja Sasape", "P.S. Los Bances", "P.S. Los Sánchez", "C.S. Pacora",
    "C.S. Jayanca", "P.S. La Viña - Jayanca", "C.S. Motupe", "P.S. Anchovira", "P.S. Marripón", "P.S. El Arrozal", "P.S. Chochope",
    "C.S. Salas", "C.S. Colaya", "P.S. Kerguer", "P.S. El Sauce", "C.S. Olmos", "P.S. Calera Santa Rosa", "P.S. El Puente",
    "P.S. Ancol Chico", "P.S. Insculás", "P.S. Querpón", "P.S. Tres Batanes", "P.S. Capilla Central", "P.S. Ñaupe", "P.S. El Virrey",
    "P.S. Las Norias", "P.S. Corral de Arena", "P.S. Mocape"
];

const input = document.getElementById('eessInput');
const results = document.getElementById('searchResults');
const loadingOverlay = document.getElementById('loadingOverlay');
const modalExito = document.getElementById('modalExito');
const btnNuevoRegistro = document.getElementById('btnNuevoRegistro');

// QUITAR TILDES
function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// BUSCADOR EN TIEMPO REAL
input.addEventListener('input', function() {
    const rawVal = this.value;
    const val = quitarTildes(rawVal.toLowerCase().trim());
    results.innerHTML = '';
    
    if (!val) {
        results.style.display = 'none';
        return;
    }

    const filtered = eessLista.filter(item => 
        quitarTildes(item.toLowerCase()).includes(val)
    );

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            div.onclick = function() {
                input.value = item;
                results.style.display = 'none';
            };
            results.appendChild(div);
        });
    } else {
        const div = document.createElement('div');
        div.innerHTML = `➕ Usar: <strong>"${rawVal}"</strong> (No figura en la lista)`;
        div.style.color = '#2563eb';
        div.style.fontWeight = 'bold';
        div.onclick = function() {
            input.value = rawVal;
            results.style.display = 'none';
        };
        results.appendChild(div);
    }
    
    results.style.display = 'block';
});

// OCULTAR AL HACER CLIC FUERA
document.addEventListener('click', function(e) {
    if (e.target !== input) {
        results.style.display = 'none';
    }
});

// URL DE TU GOOGLE APPS SCRIPT
const scriptURL = 'AQUI_VA_TU_URL_DE_GOOGLE_APPS_SCRIPT';

// ENVÍO CON PANTALLA TRANSPARENTE DE CARGA Y MODAL
document.getElementById('mantenimientoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Muestra pantalla de carga transparente con el círculo girando
    loadingOverlay.style.display = 'flex';

    const formData = {
        eess: document.getElementById('eessInput').value,
        sisgedo: document.getElementById('sisgedo').value,
        categoria: document.getElementById('categoria').value,
        equipo: document.getElementById('equipo').value,
        marca: document.getElementById('marca').value || 'N/A',
        modelo: document.getElementById('modelo').value || 'N/A',
        codigo: document.getElementById('codigo').value || 'N/A',
        condicion: document.getElementById('condicion').value,
        descripcion: document.getElementById('descripcion').value,
        prioridad: document.getElementById('prioridad').value
    };

    if (scriptURL === 'AQUI_VA_TU_URL_DE_GOOGLE_APPS_SCRIPT') {
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
            modalExito.style.display = 'flex';
        }, 1200);
        return;
    }

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(() => {
        loadingOverlay.style.display = 'none';
        modalExito.style.display = 'flex';
    })
    .catch(error => {
        loadingOverlay.style.display = 'none';
        alert('Ocurrió un error al enviar el reporte. Por favor reintente.');
    });
});

// BOTÓN PARA REGISTRAR OTRO REPORTE / NUEVA SOLICITUD
btnNuevoRegistro.addEventListener('click', function() {
    document.getElementById('mantenimientoForm').reset();
    modalExito.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});