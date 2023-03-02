import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  Paper,
  Container,
} from "@mui/material";
import { tokens } from "../../theme";
import axios from 'axios';
import { useEffect, useState } from 'react';


const wpJsonUrl = 'http://localhost:8080/wordpress/wp-json';
const chatsUrl = 'http://localhost:8080/wordpress/wp-json/wp/v2/chats';

const CanalDeTexto = () => {
  // Load Theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Load State
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(chatsUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return "No data!"
  

  
  return (
     <pre> {} </pre>
  );
};

export default CanalDeTexto;
  