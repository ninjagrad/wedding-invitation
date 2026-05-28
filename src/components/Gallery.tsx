import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryWrapper = styled("div", {
  ".image-gallery-thumbnail-image": {
    height: "80px",
    width: "100%",
    objectFit: "cover",
  },
});

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingTop: "60px",
});

const Title = styled("p", {
  fontSize: "3vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
  letterSpacing: "0.18em",
  fontFamily: '"MaruBuri", serif',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "14px",

  "&::before": {
    content: '"✦"',
    fontSize: "1.6vh",
    opacity: 0.55,
  },

  "&::after": {
    content: '"✦"',
    fontSize: "1.6vh",
    opacity: 0.55,
  },
  marginTop:29
});

const images = [
  {
    original: "./assets/Gallery_Photo_1.png",
    thumbnail: "./assets/Gallery_Photo_1.png",
  },
  {
    original: "./assets/Gallery_Photo_2.png",
    thumbnail: "./assets/Gallery_Photo_2.png",
  },
  {
    original: "./assets/Gallery_Photo_3.png",
    thumbnail: "./assets/Gallery_Photo_3.png",
  },
  {
    original: "./assets/Gallery_Photo_4.png",
    thumbnail: "./assets/Gallery_Photo_4.png",
  },
  {
    original: "./assets/Gallery_Photo_5.png",
    thumbnail: "./assets/Gallery_Photo_5.png",
  },
  {
    original: "./assets/Gallery_Photo_6.png",
    thumbnail: "./assets/Gallery_Photo_6.png",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 순간들</Title>
      </Divider>
      <GalleryWrapper>
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </GalleryWrapper>
    </Wrapper>
  );
}
