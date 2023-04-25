import { styled } from "../../styles";

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});


export const ContainerCart = styled("div", {
  position: "fixed",
  right: 0,
  top: 0,
  bottom: 0,
  width: 300,
  background: "$gray800",
  zIndex: 9999,
  padding: 50,

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    h2: {
      fontSize: "$md",
    },
  },

  section: {
    display: "flex",
    flexDirection: "column",
    marginTop: "4rem",
  },
});


export const ButtonX = styled('button', {
  padding: 10,
  background: 'transparent',
  cursor: 'pointer',
  border: 0,
  color: '$gray100',
  marginTop: -20
})


export const ButtonCart = styled("button", {
  borderRadius: 6,

  height: 48,
  width: 48,
  transition: "all 0.3s ease",

  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    type: {
      add: {
        backgroundColor: "$green300",
       
        "&:hover": {
          backgroundColor: "$green500",
        },
      },
      view: {
        backgroundColor: "$gray800",
        "&:hover": {
          backgroundColor: "$gray900",
        },
      },
    },
  },
});

