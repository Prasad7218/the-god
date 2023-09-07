import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
interface ImgCardProps {
  hanuman: string;
  title: string;
  imgAudio: string;
}

export default function ImgCard({ hanuman, title, imgAudio }: ImgCardProps) {
  const theme = useTheme();
  const router = useRouter();

  const redirectToSpecificURL = () => {
    router.push("/hanumanchalisa");
  };

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
        </CardContent>
        <audio
          src={imgAudio}
          preload="none"
          style={{
            width: "100%",
            maxWidth: "300px",
            margin: "10px 0",
          }}
          controls
        ></audio>
      </Box>
      <CardMedia
        onClick={redirectToSpecificURL}
        component="img"
        sx={{ width: 151 }}
        image={hanuman}
        alt="Live from space album cover"
      />
    </Card>
  );
}
