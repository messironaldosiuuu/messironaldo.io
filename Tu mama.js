document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('birthdayCard');
    const butterfly = document.querySelector('.butterfly');
    let clicked = false ;
  
    card.addEventListener('click', function() {
      if(!clicked){
        showMessage();
        clicked = true;
      }
      
    });
  
    function showMessage() {
      const message = document.createElement('p');
      message.textContent = "Que este día esté lleno de amor, felicidad y sonrisas. ¡Feliz Cumpleaños! hija mia ";
      card.appendChild(message);
    }
  });