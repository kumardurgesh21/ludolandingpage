  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }



















document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle dropdown content visibility when the button is clicked
    dropdownButton.addEventListener('click', function() {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Hide dropdown content when mouse leaves dropdown content
    dropdownContent.addEventListener('mouseleave', function() {
        dropdownContent.style.display = 'none';
    });
});














  function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var question = document.querySelector("#" + id).previousElementSibling;
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      question.classList.remove("collapsed");
    } else {
      answer.style.display = "none";
      question.classList.add("collapsed");
    }
  }