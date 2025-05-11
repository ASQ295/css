// Función para verificar si hay sesión activa
function checkSession() {
    fetch('/session-data')
        .then(response => {
            if (response.status === 401) {
                // No hay sesión, redirige al login
                window.location.href = '/login';
            } else {
                return response.json();
            }
        })
        .then(data => {
            if (data && data.success) {
                // Mostrar username y plan en el panel
                document.getElementById('username').innerText = data.username;
                document.getElementById('plan').innerText = data.plan;
            }
        })
        .catch(() => {
            // Error en la conexión, redirige por seguridad
            window.location.href = '/login';
        });
}

// Función para cerrar sesión eliminando cookies manualmente
function logout() {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    document.cookie = 'plan=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    window.location.href = '/login';
}

// Ejecutar al cargar la página
checkSession();
