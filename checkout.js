// This is your test publishable API key.
const stripe = Stripe("pk_test_51RmTqr2eR7Ar9niv9K5AAaL7ez73zIil5lZKArHe4rmC1v2mbo5na9rChLHeXC6m8ftg4nFJ13HBIVrPSzKBqdo500AXQuH7IC");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("http://108.253.196.110:4242/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}
