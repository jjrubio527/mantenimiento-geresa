// LISTA OFICIAL DE ESTABLECIMIENTOS DE SALUD GERESA LAMBAYEQUE (199 EE.SS.)
const eessLista = [
    // 1. RED DE SALUD CHICLAYO
    "P.S. GUAYAQUIL", "C.S. CAYALTI", "HOSPITAL REGIONAL DOCENTE LAS MERCEDES", "C.S. JOSE QUIÑONEZ GONZALES", "C.S. CRUZ DE LA ESPERANZA",
    "C.S. \"VERONICA STACK DE TOMIS\" - TUPAC AMARU", "EE.SS. Laboratorio Referencial Regional en Salud Pública de Lambayeque", "C.S. SAN ANTONIO",
    "C.S. CERROPON", "EE.SS. ATENCION ESPECIALIZADA A POBLACION EXCLUIDA", "CSMC \"CHICLAYO\"", "C.S. JOSE OLAYA", "C.S. JORGE CHAVEZ",
    "CSMC \"CONEXIÓN INTEGRAL\" - LA VICTORIA", "HOSPITAL REGIONAL LAMBAYEQUE", "EE.SS. SAMU GERESA LAMBAYEQUE", "EE.SS. HOGAR PROTEGIDO DE CHICLAYO",
    "P.S. PAMPA GRANDE", "P.S. LAS COLMENAS", "P.S. HUACA BLANCA", "C.S. VICTOR ENRIQUE TIRADO BONILLA-CHONGOYAPE", "P.S. CIUDAD ETEN",
    "P.S. PUERTO ETEN", "P.S. CULPON", "P.S. VILLA HERMOSA", "C.S. JOSE LEONARDO ORTIZ", "C.S. PAUL HARRIS", "C.S. PEDRO PABLO ATUSPARIAS",
    "CSMC ELOHIM JOSE LEONARDO OPRTIZ", "C.S. SANTA ANA", "P.S. ANTONIO RAYMONDI", "C.S. LA VICTORIA SECTOR I", "C.S. LA VICTORIA SECTOR II - MARIA JESUS",
    "P.S. CHOSICA DEL NORTE", "P.S. EL BOSQUE", "P.S. MOCUPE VIEJO (TRADIC.)", "C.S. MOCUPE NUEVO", "C.S. LAGUNAS", "P.S. PUEBLO LIBRE",
    "C.S. TUPAC AMARU", "P.S. CALLANCA", "C.S. MONSEFU", "P.S. VALLE HERMOSO", "P.S. POMAPE", "C.S. NUEVA ARICA", "C.S. LA VIÑA DE NUEVA ARICA",
    "P.S. EL ESPINAL", "P.S. PAN DE AZUCAR", "P.S. LA COMPUERTA", "C.S. OYOTUN", "C.S. PAMPA LA VICTORIA", "C.S. POSOPE ALTO",
    "P.S. COMUNITARIO JUAN PARDO Y MIGUEL PATAPO", "P.S. CAPOTE", "C.S. COMUNITARIO JUAN JOSE CRUZ VENEGAS- PICSI", "C.S. CLAS PICSI",
    "P.S. LAS FLORES DE LA PRADERA", "C.S. PIMENTEL", "C.S. POMALCA", "P.S. SAN LUIS", "C.S. SAN ANTONIO (POMALCA)", "C.S. PUCALA",
    "P.S. LAS DELICIAS", "C.S. REQUE", "C.S. MENTAL COMUNITARIA \"FRANCO BASAGLIA\" - REQUE", "P.S. MONTEGRANDE", "P.S. SANTA ROSA",
    "C.S. ZAÑA", "P.S. SALTUR", "P.S. COLLIQUE", "P.S. VIRGEN DE LAS MERCEDES LA OTRA BANDA", "P.S. SIPAN", "C.S. TUMAN",

    // 2. RED DE SALUD FERREÑAFE
    "P.S. CHIÑAMA", "P.S. QUIRICHIMA", "P.S. TOTORAS PAMPAVERDE", "P.S. MAMAGPAMPA", "P.S. PANDACHI", "P.S. KAÑARIS", "P.S. HUACAPAMPA",
    "P.S. CHILASQUE", "P.S. HUAYABAMBA", "P.S. HIERBA BUENA", "P.S. LA SUCCHA", "P.S. SEÑOR DE LA JUSTICIA", "P.S. MARAYHUACA", "P.S. LA TRANCA",
    "P.S. KONGACHA", "P.S. LANCHIPAMPA", "C.S. INKAWASI", "P.S. PUCHACA", "P.S. LAQUIPAMPA", "P.S. JANQUE", "P.S. MOYAN", "P.S. HUAYRUL",
    "P.S. UYURPAMPA", "P.S. CRUZ LOMA", "P.S. CANCHACHALA", "P.S. TOTORAS", "C.S. MESONES MURO", "P.S. SIME", "P.S. LA TRAPOSA",
    "P.S. MOTUPILLO", "P.S. CACHINCHE", "P.S. PATIVILCA", "P.S. SANTA CLARA", "C.S. PITIPO", "P.S. LA ZARANDA", "C.S. MOCHUMI VIEJO",
    "P.S. BATANGRANDE", "C.S. PUEBLO NUEVO", "P.S. LAS LOMAS",

    // 3. RED DE SALUD LAMBAYEQUE
    "P.S. CHOCHOPE", "P.S. CHIRIMOYO", "P.S. SAN PEDRO SASAPE", "C.S. ILLIMO", "CSMC TUMI DE ORO", "C.S. LA VIÑA (JAYANCA)", "C.S. JAYANCA",
    "P.S. MUYFINCA-PUNTO 09", "C.S. TORIBIA CASTRO CHIRINOS", "P.S. CAPILLA SANTA ROSA LAMBAYEQUE", "P.S. SIALUPE HUAMANTANGA",
    "CSMC NAYLAMP LAMBAYEQUE", "EE.SS. HOGAR PROTEGIDO LAMBAYEQUE", "C.S. SAN MARTIN-LAMBAYEQUE", "HOSPITAL BELEN - LAMBAYEQUE",
    "P.S. PUNTO CUATRO", "C.S. MOCHUMI", "P.S. MARAVILLAS", "P.S. PAREDONES MUY FINCA", "P.S. ARBOLSOL", "P.S. ANNAPE", "C.S. LAGUNAS (MORROPE)",
    "P.S. TRANCA FANUPE", "P.S. POSITOS", "P.S. SEQUION", "P.S. LA COLORADA", "P.S. EL ROMERO", "P.S. SANTA ROSA LAS PAMPAS",
    "P.S. HUACA TRAPICHE DE BRONCE", "P.S. MONTE HERMOZO", "P.S. CARACUCHO", "P.S. QUEMAZON", "P.S. SANTA ISABEL", "P.S. CRUZ DEL MEDANO",
    "C.S. MORROPE", "P.S. CRUZ DE PAREDONES", "P.S. HUACA DE BARRO", "P.S. FANUPE BARRIO NUEVO", "P.S. LA GARTERA", "P.S. CHEPITO",
    "P.S. EL ARROZAL", "P.S. TONGORRAPE", "C.S. MOTUPE", "P.S. MARRIPON", "P.S. ANCHOVIRA", "P.S. FICUAR", "P.S. CAPILLA CENTRAL",
    "P.S. TRES BATANES", "C.S. SANTA ROSA (OLMOS)", "P.S. CASERIO PLAYA DE CASCAJAL", "P.S. EL PUENTE", "P.S. LA ESTANCIA", "P.S. ANCOL CHICO",
    "P.S. EL PUEBLITO", "P.S. MOCAPE", "P.S. PASABAR ASERRADERO", "P.S. QUERPON", "P.S. LAS NORIAS", "CSMC Cruz de Chalpon-Olmos",
    "P.S. INSCULAS", "P.S. CALERA SANTA ROSA", "P.S. JOSE ELVER MIO TABOADA", "P.S. CORRAL DE ARENA", "C.S. OLMOS", "P.S. ELVIRREY",
    "P.S. HUACA RIVERA", "C.S. PACORA", "P.S. LA RAMADA", "P.S. LAGUNA HUANAMA", "P.S. COLAYA", "P.S. EL SAUCE", "C.S. SALAS",
    "P.S. TALLAPAMPA", "P.S. PENACHI", "P.S. CORRAL DE PIEDRA", "P.S. KERGUER", "P.S. HUMEDADES", "P.S. SAN JOSE", "P.S. BODEGONES",
    "P.S. SAN CARLOS", "P.S. CIUDAD DE DIOS - JUAN TOMIS STACK", "P.S. GRANJA SASAPE", "P.S. LA RAYA", "C.S. TUCUME VIEJO", "P.S. LOS BANCES",
    "P.S. LOS SANCHEZ", "C.S. TUCUME"
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
const scriptURL = 'https://script.google.com/macros/s/AKfycbyX4noanBTBM6kaPZLdaGRp2tO_7QmB4dNdcO0IqbFHKOqf0yoxRHZgedaeKeHJhti-/exec';

// FUNCIÓN PARA COMPRIMIR FOTOGRAFÍAS ANTES DE ENVIAR (EVITA ERRORES DE PESO)
function comprimirImagen(file, callback) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            const maxDimension = 1200; // Redimensiona si la imagen es gigante

            if (width > height) {
                if (width > maxDimension) {
                    height = Math.round((height * maxDimension) / width);
                    width = maxDimension;
                }
            } else {
                if (height > maxDimension) {
                    width = Math.round((width * maxDimension) / height);
                    height = maxDimension;
                }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // Exportar como JPEG comprimido al 70% de calidad
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
            const base64Data = dataUrl.split(',')[1];
            callback({
                base64: base64Data,
                nombre: file.name.replace(/\.[^/.]+$/, "") + ".jpg",
                type: "image/jpeg"
            });
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ENVÍO DIRECTO A GOOGLE SHEETS
document.getElementById('mantenimientoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    loadingOverlay.style.display = 'flex';

    const fileInput = document.getElementById('fotoInput');
    const file = fileInput ? fileInput.files[0] : null;

    function enviarPayload(fotoInfo) {
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
            prioridad: document.getElementById('prioridad').value,
            telefono: document.getElementById('telefono').value,
            archivo: fotoInfo ? fotoInfo.base64 : '',
            nombreArchivo: fotoInfo ? fotoInfo.nombre : '',
            mimeType: fotoInfo ? fotoInfo.type : ''
        };

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
    }

    if (file) {
        comprimirImagen(file, function(fotoInfo) {
            enviarPayload(fotoInfo);
        });
    } else {
        enviarPayload(null);
    }
});

// BOTÓN PARA REGISTRAR OTRO REPORTE
btnNuevoRegistro.addEventListener('click', function() {
    document.getElementById('mantenimientoForm').reset();
    modalExito.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
