document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    const totalAmountElement = document.getElementById('total-amount');
    
    let totalItems = 0;
    let totalPrice = 0;

    // Add Functionality
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const price = parseFloat(card.querySelector('.price-value').innerText);

            totalItems++;
            totalPrice += price;
            updateDisplay();
        });
    });

    // Remove Functionality
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const price = parseFloat(card.querySelector('.price-value').innerText);

            // শুধু তখনই কমবে যখন আইটেম সংখ্যা ০ এর বেশি থাকবে
            if (totalItems > 0) {
                totalItems--;
                totalPrice -= price;
                
                // নেতিবাচক মান (যেমন -০.০১) বা ফ্লোটিং এরর রোধ করতে চেক
                if (totalItems === 0 || totalPrice < 0) {
                    totalItems = 0;
                    totalPrice = 0;
                }
                
                updateDisplay();
            }
        });
    });

    function updateDisplay() {
        cartCountElement.innerText = totalItems;
        // toFixed(2) নিশ্চিত করে যে ০ হলে ০.০০ ই দেখাবে
        totalAmountElement.innerText = totalPrice.toFixed(2);
    }
});



  