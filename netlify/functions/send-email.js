exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    // Validate
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "All fields are required" }),
      };
    }

    // Use EmailJS REST API directly
    const emailJSResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          accessToken: process.env.EMAILJS_PRIVATE_KEY,
          template_params: {
            name: name,
            email: email,
            subject: subject,
            message: message,
            to_email: process.env.TO_EMAIL || "bhaumik.solanki@gmail.com",
          },
        }),
      }
    );

    if (!emailJSResponse.ok) {
      const errorText = await emailJSResponse.text();
      console.error("EmailJS API error:", errorText);
      throw new Error(`EmailJS API error: ${emailJSResponse.status}`);
    }

    console.log("Email sent successfully");

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to send email",
        details: error.message,
      }),
    };
  }
};
