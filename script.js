document.addEventListener('DOMContentLoaded', function() {
    // You can add functionality here like:
    // - Fetching the student's data from an API
    // - Calculating totals dynamically
    // - Adding payment reminder functionality
    
    console.log("Student materials page loaded");
    
    // Example: Add a payment reminder button
    const reminderBtn = document.createElement('button');
    reminderBtn.className = 'btn btn-outline-primary mt-3';
    reminderBtn.textContent = 'Set Payment Reminder';
    document.querySelector('.card-body').appendChild(reminderBtn);
    
    reminderBtn.addEventListener('click', function() {
        alert('Payment reminder set for 3 days before due date!');
    });
});