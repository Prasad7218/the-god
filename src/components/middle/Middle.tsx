import React from "react";
import AvatarImg from "../avatar/AvatarImg";
import hanuman from "../../../public/images/hanuman.jpg";

const Middle = () => {
  return (
    <div>
      <AvatarImg
        alt="hanuman"
        img={hanuman.src}
        url="/hanumanchalisa"
        imgText="हनुमान चालीसा"
      />
    </div>
  );
};

export default Middle;
