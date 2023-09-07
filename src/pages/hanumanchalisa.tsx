import ImgCard from "@/components/imagecard/ImgCard";
import Text from "@/components/text/Text";
import React from "react";
import hanumanImg from "../../public/images/hanuman.jpg";

const hanumanchalisa = () => {
  return (
    <div>
      <ImgCard
        imgAudio="/audio/hanumanchalisa.mp3"
        title="हनुमान चालीसा"
        hanuman={hanumanImg.src}
      />
      <Text />
    </div>
  );
};

export default hanumanchalisa;
