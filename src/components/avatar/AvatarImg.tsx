import React from "react";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";

interface AvatarImgProps {
  img: string;
  url: string;
  alt: string;
  imgText: string;
}

const AvatarImg = ({ img, url, alt, imgText }: AvatarImgProps) => {
  const router = useRouter();
  const redirectToSpecificURL = () => {
    router.push(url);
  };
  return (
    <div>
      <Avatar
        onClick={redirectToSpecificURL}
        alt={alt}
        src={img}
        sx={{ width: 80, height: 80 }}
      />
      <h4>{imgText}</h4>
    </div>
  );
};

export default AvatarImg;
