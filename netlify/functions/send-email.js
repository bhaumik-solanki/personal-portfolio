const emailjs = require("@emailjs/nodejs");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the form data
    const { name, email, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "All fields are required" }),
      };
    }

    // Initialize EmailJS with private key (server-side only)
    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY, // New - needed for server-side
    });

    // Send the main contact email
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        name,
        email,
        subject,
        message,
        to_email: process.env.TO_EMAIL, // Your email
      }
    );

    // Optionally send auto-reply
    if (process.env.EMAILJS_AUTOREPLY_TEMPLATE_ID) {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
        }
      );
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send email",
        details: error.message,
      }),
    };
  }
};
