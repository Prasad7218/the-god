import ImgCard from "@/components/imagecard/ImgCard";
import React from "react";
import ganpatiImg from "../../public/images/ganpati.jpg";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import GanpatiText from "@/components/text/GanpatiText";
const Hanumanchalisa = () => {
  const router = useRouter();
  const redirectToSpecificURL = () => {
    router.push("/");
  };
  return (
    <div>
      <Button onClick={redirectToSpecificURL} variant="contained">
        Back
      </Button>
      <div>
        <ImgCard
          imgAudio="/audio/hanumanchalisa.mp3"
          title="गणपती आरती"
          hanuman={ganpatiImg.src}
        />
        <GanpatiText />
      </div>
    </div>
  );
};

export default Hanumanchalisa;
