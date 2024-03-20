const payBtn = document.querySelector(".btn-buy");

payBtn.addEventListener("click", () => {
    fetch("/stripe-checkout" , {
        method: "POST",
        headers: {
            "Content-Type": "application/Json" // Corrected header value
        },
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem("cartItems")),
        }),
    })
    .then((res) => res.json())
    .then((url) => {
        location.href = url;
        clearCart();
    })
    .catch((err) => console.log(err));
});