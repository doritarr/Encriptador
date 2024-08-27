// --------Códigos para la Selección de Elementos--------
const btnEncriptar = document.getElementById('encrypt-btn');
const btnDesencriptar = document.getElementById('decrypt-btn');
const btnCopiar = document.getElementById('copy-btn');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

// Función para validar el texto ingresado
function validarTexto(texto) {
    const textoNormalizado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const tieneAcentos = texto !== textoNormalizado;
    const tieneMayusculas = texto !== texto.toLowerCase();
    const tieneCaracteresEspeciales = /[^a-z\s]/.test(textoNormalizado);

    if (tieneAcentos || tieneMayusculas || tieneCaracteresEspeciales) {
        alert("Solo se aceptan textos en minúscula y sin acentos");
        return false;
    }
    return true;
}

// Función para encriptar el texto
function encryptText(text) {
    const replacements = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, function(match) {
        return replacements[match];
    });
}

// Función para desencriptar el texto
function decryptText(text) {
    const replacements = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        return replacements[match];
    });
}

// Event Listener para el botón de encriptar
btnEncriptar.addEventListener('click', function() {
    const text = inputText.value.trim();

    if (text === "") {
        alert("El campo del texto no debe estar vacío");
        return;
    }

    if (!validarTexto(text)) {
        return;
    }

    const encryptedText = encryptText(text);
    outputText.value = encryptedText;
    btnCopiar.style.visibility = "visible";
});

// Event Listener para el botón de desencriptar
btnDesencriptar.addEventListener('click', function() {
    const text = inputText.value.trim();

    if (text === "") {
        alert("El campo del texto no debe estar vacío");
        return;
    }

    if (!validarTexto(text)) {
        return;
    }

    const decryptedText = decryptText(text);
    outputText.value = decryptedText;
    btnCopiar.style.visibility = "visible";
});
// Event Listener para el botón de copiar
btnCopiar.addEventListener('click', function() {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});


