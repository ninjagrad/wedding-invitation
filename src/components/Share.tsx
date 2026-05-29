import { LinkOutlined, QrcodeOutlined } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

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

const QrCard = styled("div", {
  width: "min(78vw, 280px)",
  margin: "0 auto 24px",
  padding: "18px 18px 16px",
  borderRadius: 28,
  background: "rgba(255, 252, 248, 0.82)",
  boxShadow: "0 14px 32px rgba(92, 64, 51, 0.13)",
  border: "1px solid rgba(160, 120, 105, 0.18)",
});

const QrFrame = styled("div", {
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  borderRadius: 24,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(145deg, #fff8f3, #ead8cf)",
  boxShadow: "inset 0 0 0 1px rgba(120, 90, 80, 0.12)",
});

const QrImage = styled("img", {
  width: "calc(100% - 24px)",
  height: "calc(100% - 24px)",
  display: "block",
  borderRadius: 18,
  background: "#fff",
});

const QrCaption = styled("p", {
  margin: "14px 0 0",
  fontFamily: '"MaruBuri", serif',
  fontSize: 14,
  lineHeight: 1.7,
  color: "rgba(60, 45, 40, 0.72)",
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const invitationUrl = data?.kakaotalk?.wedding_invitation_url ?? "";
  const qrCodeUrl = invitationUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=420x420&margin=18&color=5f4a45&bgcolor=fffaf6&data=${encodeURIComponent(invitationUrl)}`
    : "";

  const handleKakaoShare = async () => {
    if (!invitationUrl) {
      message.error("청첩장 주소를 찾을 수 없습니다.");
      return;
    }

    try {
      if (navigator.share) {
        await navigator.share({
          title: "태준 & 프란체스카의 작은 결혼식",
          text: "코펜하겐에서 전하는 작은 결혼 소식",
          url: invitationUrl,
        });
      } else {
        await navigator.clipboard.writeText(invitationUrl);
        message.success("공유를 지원하지 않는 브라우저입니다. 링크를 복사했습니다.");
      }
    } catch (error) {
      console.error(error);
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
      {qrCodeUrl && (
        <QrCard>
          <QrFrame>
            <QrImage src={qrCodeUrl} alt="청첩장 QR 코드" />
          </QrFrame>
          <QrCaption>
            <QrcodeOutlined /> QR 코드로 청첩장을 열어보세요
          </QrCaption>
        </QrCard>
      )}
      <KakaoTalkShareButton
        style={{ margin: 8 }}
        icon={<LinkOutlined />}
        size="large"
        onClick={handleKakaoShare}
      >
        공유하기
      </KakaoTalkShareButton>
      <CopyToClipboard text={invitationUrl}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
        >
          링크 복사하기
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
}
