import { styled } from "@stitches/react";
import { Divider } from "antd";

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
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "2vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontSize: "1.8vh",
  lineHeight: 1.9,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

const Name = styled("span", {
  fontSize: "2.5vh",
  fontWeight: "bold",
});

const ParentName = styled("span", {
  fontSize: "2.1vh",
  fontWeight: "bold",
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
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
        <Title>결혼합니다</Title>
      </Divider>
      <Content>
        {data?.gretting?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </Content>
      <GroomBride>
        <ParentName>{data?.groom?.parents?.father?.name}</ParentName> ·{" "}
        <ParentName>{data?.groom?.parents?.mother?.name}</ParentName>의 장남 <Name>{data?.groom?.name}</Name>
        <br />
        <ParentName>{data?.bride?.parents?.father?.name}</ParentName> ·{" "}
        <ParentName>{data?.bride?.parents?.mother?.name}</ParentName>의 장녀 <Name>{data?.bride?.name}</Name>
      </GroomBride>
    </Wrapper>
  );
}
