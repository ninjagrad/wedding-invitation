import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    Kakao: any;
  }
}

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

const KakaoTalkShareButton = styled(Button, {
  background: "#fee500",
  borderColor: "#fee500",
  color: "#181600",
  "&:hover": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
  "&:focus": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  useEffect(() => {
    try {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(data?.kakaotalk?.api_token);
      }
    } catch {}
  }, []);

  const handleKakaoShare = () => {
    try {
      window.Kakao.Share.sendDefault({
        objectType: "text",

  text: "태준 & 프란체스카의 작은 결혼식",

  link: {

    mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,

    webUrl: data?.kakaotalk?.wedding_invitation_url,

  },

  buttonTitle: "청첩장 열기",

});

      message.success("카카오톡으로 청첩장을 공유합니다!");
    } catch (error) {
      console.error(error);
      message.error("카카오톡 공유에 실패했습니다.");
    }
  };

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
        <Title>청첩장 공유하기</Title>
      </Divider>
      <KakaoTalkShareButton
        style={{ margin: 8 }}
        icon={<MessageFilled />}
        size="large"
        onClick={handleKakaoShare}
      >
        카카오톡으로 공유하기
      </KakaoTalkShareButton>
      <CopyToClipboard text={data?.kakaotalk?.wedding_invitation_url ?? ""}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
        >
          링크로 공유하기
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
}
