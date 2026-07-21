const phone = "919727729624"; // Replace with your number

const message = encodeURIComponent(
  `Hi Ash It Team 👋

I'm interested in ordering the Ash It Pack of 3 (₹75).

Please share the payment details.

Thank you!`
);

export const whatsappLink = `https://wa.me/${phone}?text=${message}`;