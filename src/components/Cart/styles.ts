import { styled } from "../../styles";



export const BackgroundImage = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
});

export const ButtonRemove = styled("button", {
  cursor: "pointer",
  color: "$green300",
  backgroundColor: "transparent",
  display: "flex",
});

export const WrapperCart = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
  gap: 16,
});

export const InfoProduct = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "1rem",

  span: {
    fontSize: "0.85rem",
  },
});

export const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1rem",
});

export const ButtonFinishPurchase = styled("button", {
  width: "100%",
  padding: 20,
  borderRadius: 8,
  backgroundColor: "$green500",
  color: "$white",
  cursor: "pointer",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "$green300",
  },

  '&:disabled': {
    background: '$gray100',
    cursor: 'not-allowed'
  }
});
