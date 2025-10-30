import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, TextField, Button, Typography } from "@mui/material";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "5ca36658-3dcd-4667-8a29-38912485e9bf", 
        ...formData,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "90vh",
        py: 10,
        px: { xs: 4, md: 12 },
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: "text.primary" }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 6, color: "text.secondary", maxWidth: "600px", mx: "auto" }}
        >
          Feel free to reach out for collaborations, freelance projects, or just
          a friendly chat. I’d love to connect!
          Please contact me directly at reddy.sainath3155@gmail.com

            +1 (571) 576-4270 or through this form below.
        </Typography>
      </motion.div>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "white",
            padding: "2rem",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Your Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: "1.5rem" }}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #3b82f6, #6366f1)",
                color: "#fff",
                px: 5,
                py: 1.5,
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  background: "linear-gradient(90deg, #2563eb, #4f46e5)",
                },
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10"
        >
          <Typography variant="h6" sx={{ color: "green", fontWeight: "bold" }}>
            ✅ Thank you! Your message has been sent successfully.
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default Contact;
