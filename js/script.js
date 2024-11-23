document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há um hash na URL
    if(window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if(element) {
            // Pequeno delay para garantir que o scroll aconteça
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
