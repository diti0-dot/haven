const today = new Date().toISOString().split('T')[0]; 
document.getElementById("check-in").setAttribute("min", today);
document.getElementById("check-out").setAttribute("min", today);

// Open 
function openBookingForm() {
  document.getElementById("bookingModal").style.display = "block";
}

// Close 
function closeBookingForm() {
  document.getElementById("bookingModal").style.display = "none";
}

//form submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const checkInDate = document.getElementById("check-in").value;
  const checkOutDate = document.getElementById("check-out").value;

  // Validate 
  function validateDates() {
    const checkInDate = document.getElementById("check-in").value;
    const checkOutDate = document.getElementById("check-out").value;
  
    if (checkInDate && checkOutDate && checkOutDate <= checkInDate) {
      alert("Check-Out date must be later than Check-In date.");
      return false;
    }
    return true;
  }

  // animation
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.add("show");

  
  setTimeout(function() {
    closeBookingForm();
    successMessage.classList.remove("show");
  }, 3000); 
});
