import { styled } from "@stitches/react";
import { Divider } from "antd";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  "-moz-animation": "fadein 3s" /* Firefox */,
  "-webkit-animation": "fadein 3s" /* Safari and Chrome */,
  "-o-animation": "fadein 3s" /* Opera */,
});

const VideoBackground = styled("video", {
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const WeddingInvitation = styled("p", {
  fontSize: "1.5vh",
  opacity: 0.45,
  marginBottom: 16,
});

const EnglishSubtitle = styled("p", {
  fontSize: "1.8vh",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  fontWeight: 300,
  opacity: 0.75,
  marginBottom: 20,
  fontFamily:
    '"Helvetica Neue", "Futura", "Avenir Next", sans-serif',
});

const SignatureTitle = styled("p", {
  fontSize: "7.5vh",
  fontStyle: "italic",
  fontWeight: 400,
  letterSpacing: "0.04em",
  marginTop: 0,
  marginBottom: 0,
  opacity: 1,
  fontFamily:
    '"Snell Roundhand", "Brush Script MT", "Cormorant Garamond", cursive',
});

const GroomBride = styled("p", {
  fontSize: "3.5vh",
  fontWeight: 400,
  fontFamily: '"MaruBuri", serif !important',
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "2vh",
  opacity: 0.65,
  marginBottom: 24,
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  return (
    <Layout>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src="./assets/BackgroundVideo.mp4" type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
                <EnglishSubtitle>
          Celebrating Love in Copenhagen
        </EnglishSubtitle>
                <SignatureTitle>
          Taejun & Francesca
        </SignatureTitle>
        <GroomBride>
          {data?.groom?.name} &#38; {data?.bride?.name}
        </GroomBride>
        <Schedule>
          {data?.date}
          <br />
          {data?.location}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
}
