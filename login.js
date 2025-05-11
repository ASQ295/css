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
            // Guardar datos en sessionStorage
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('plan', data.plan);

            alert(`Logged in successfully as: ${data.username} (${data.plan})`);
            window.location.href = '/panel/home'; // Redirigir al panel
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error al hacer login:', error);
        alert('Error al conectar con el servidor.');
    });
}
