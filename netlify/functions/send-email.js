exports.handler = async (event, context) => {
  console.log("Function triggered"); // Debug log

  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    console.log("Parsing body..."); // Debug log
    const { name, email, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log("Missing required fields"); // Debug log
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "All fields are required" }),
      };
    }

    console.log("Checking environment variables..."); // Debug log

    // Check if environment variables exist
    if (
      !process.env.EMAILJS_SERVICE_ID ||
      !process.env.EMAILJS_TEMPLATE_ID ||
      !process.env.EMAILJS_PUBLIC_KEY
    ) {
      console.error("Missing EmailJS environment variables");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "Email service not configured properly",
        }),
      };
    }

    // For now, let's test without actually sending email
    // This will help us identify if the issue is with the function or EmailJS
    console.log("Would send email with:", { name, email, subject, message });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Test successful - Email function is working!",
      }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to process request",
        details: error.message,
      }),
    };
  }
};
