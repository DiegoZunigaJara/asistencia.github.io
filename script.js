// Datos de usuario (en un entorno real, esto debería estar en un servidor)
const users = {
    'user': 'admin',
    'usuario2': 'contraseña2'
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (users[username] === password) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('attendance-section').style.display = 'block';
        document.getElementById('login-error').textContent = '';
    } else {
        document.getElementById('login-error').textContent = 'Credenciales incorrectas.';
    }
});

document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    
    // Validación para permitir solo letras (espacios opcionales)
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (nameRegex.test(name)) {
        const list = document.getElementById('list');
        const listItem = document.createElement('li');

        // Obtener fecha y hora actuales
        const now = new Date();
        const date = now.toLocaleDateString('es-ES');
        const time = now.toLocaleTimeString('es-ES');

        listItem.textContent = `${name} - Fecha: ${date}, Hora: ${time}`;
        list.appendChild(listItem);

        nameInput.value = '';
    } else {
        alert('Por favor, ingrese solo letras.');
    }
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('auth-section').style.display = 'block';
    document.getElementById('attendance-section').style.display = 'none';
});
