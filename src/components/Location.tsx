import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
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
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

const Description = styled("p", {
  fontSize: "2vh",
  opacity: 0.7,
  marginTop: 8,
  marginBottom: 24,
  lineHeight: 1.8,
});

export default function Location() {
  return (
    <Wrapper>
      <Divider
        style={{
          marginTop: 0,
          marginBottom: 32,
          borderColor: "rgba(120,120,120,0.18)",
        }}
        plain
      >
        <Title>예식 장소</Title>
      </Divider>
      <Description>
덴마크 코펜하겐 시청사 Rådhuspladsen 1, 1553 København, Denmark
      </Description>
      <Image src="./assets/LocationMap.png" />
    </Wrapper>
  );
}
