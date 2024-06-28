document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById('logout-btn');
    const logoutModal = document.getElementById('logout-modal');
    const confirmLogoutBtn = document.getElementById('confirm-logout');
    const cancelLogoutBtn = document.getElementById('cancel-logout');

    logoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        logoutModal.style.display = 'block';
    });

    confirmLogoutBtn.addEventListener('click', function() {
        // Perform the actual logout action here, e.g., redirect to logout endpoint
        window.location.href = 'login.html';
    });

    cancelLogoutBtn.addEventListener('click', function() {
        logoutModal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == logoutModal) {
            logoutModal.style.display = 'none';
        }
    };
});
