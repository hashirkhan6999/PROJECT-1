<<<<<<< HEAD
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  

    if (name && email && date && time) {
      
      document.getElementById('confirmationMessage').classList.remove('hidden');
      
     
      document.getElementById('bookingForm').style.display = 'none';
    } else {
      alert('Please fill in all fields.');
    }
  });
=======
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  

    if (name && email && date && time) {
      
      document.getElementById('confirmationMessage').classList.remove('hidden');
      
     
      document.getElementById('bookingForm').style.display = 'none';
    } else {
      alert('Please fill in all fields.');
    }
  });
>>>>>>> 735f96a3aa973d24fc1c14cf94764ff7cadf837d
  