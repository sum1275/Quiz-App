import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        marginBottom: 2,
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
        marginTop:2
      }}
    >
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
};

export default ErrorMessage;
