// Manejar el envío del formulario sin recargar la página
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Evitar recarga
            login(); // Llama a la función de login
        });
    }
});

// Función para manejar el proceso de login
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert("Por favor, ingresa tanto el nombre de usuario como la contraseña.");
        return;
    }

    fetch(`/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Guardar datos temporalmente (opcional)
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('plan', data.plan);

            alert(`Logged in successfully as: ${data.username} (${data.plan})`);
            window.location.href = '/panel/home'; // Redirige al panel
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error al hacer login:', error);
        alert('Error al conectar con el servidor.');
    });
}
