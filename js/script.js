// preloader
document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        const preloader = document.getElementById('preloader');
        const content = document.getElementById('content');

        // Add fade-out effect and then hide the preloader
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
                content.style.display = 'block';
            }, 1000); // Matches the transition duration in CSS
        }, 4000); // Adjust this delay to match the typewriter effect duration
    };
});


// to move to section-below
$('#scroll-btn').on('click', function () {
    $('#section-below').addClass('cube-rotate');
    setTimeout(function () {
        window.scrollTo({ top: $('#section-below').offset().top, behavior: 'smooth' });
    }, 1000);
});


// document.getElementById("submitBtn").addEventListener("click", function() {
//     const password = document.getElementById("password").value;
//     const correctPassword = "kamiye-is-a-fine-boy";
//     if (password === correctPassword) {
//         const correctModal = new bootstrap.Modal(document.getElementById('correctModal'));
//         correctModal.show();

//         document.getElementById('correctModal').addEventListener('hidden.bs.modal', function () {
//             document.body.style.transition = "opacity 0.5s ease-in-out";
//             document.body.style.opacity = "0";
//             setTimeout(() => {
//                 window.location.href = "main.html";  // Replace with the actual URL
//             }, 500);
//         });
//     } else {
//         alert("Incorrect password. Please try again.");
//     }
// });

$('#submit-btn').on('click', function () {
    const password = $('#password').val();
    if (password === 'Kamiye-is-a-fine-boy') {
        $('#passwordModal').modal('show');
    } else {
        alert('Incorrect password');
    }
});

// Redirect to the next page after closing the modal
$('#continue-btn').on('click', function () {
    window.location.href = 'nextpage.html'; // Replace 'nextpage.html' with your actual URL
});

 // This script checks if the user navigates back to the page
 window.onpageshow = function(event) {
    if (event.persisted || window.performance && window.performance.navigation.type === 2) {
        // Redirect to index.html if the page was accessed via the back button
        window.location.href = 'index.html';
    }
};



// Load the Lottie animation
lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'successfully-done-4503214.json' // Replace with the path to your JSON file
});