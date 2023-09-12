import ImgCard from "@/components/imagecard/ImgCard";
import Text from "@/components/text/Text";
import React from "react";
import hanumanImg from "../../public/images/hanuman.jpg";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
const Balaji = () => {
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
          title="हनुमान चालीसा"
          hanuman={hanumanImg.src}
        />
        <Text />
      </div>
    </div>
  );
};

export default Balaji;
