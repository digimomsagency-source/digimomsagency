// admin-guard.js
(function() {
    // যদি অ্যাডমিন ভেরিফাইড না থাকে, তবে তাকে সাথে সাথে বের করে দাও
    if (sessionStorage.getItem('admin_verified') !== 'true') {
        window.location.href = 'admin-login.html';
    }
})();