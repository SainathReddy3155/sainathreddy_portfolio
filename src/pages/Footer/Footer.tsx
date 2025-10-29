import React from 'react'
import { GitHub, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Box, TextField, Button, Typography } from "@mui/material";
function Footer() {
  return (
    <div>
       {/* Footer */}
      <Box
        component="footer"
        sx={{
          mt: 10,
          py: 4,
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <motion.a
            href="https://github.com/SainathReddy3155"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <GitHub sx={{ fontSize: 34, color: "black" }} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sai-nath-56a677191/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <LinkedIn sx={{ fontSize: 34, color: "#0077b5" }} />
          </motion.a>
        </Box>

        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Sainath Reddy. All rights reserved.
        </Typography>
      </Box>
    </div>
  )
}

export default Footer
