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

export const ContainerCart = styled('div', {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  width: 300,
  background: '$gray800',
  zIndex: 9999,
  padding: 50,

  header: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',


    h2: {
      fontSize: '$md'
    },
  },


  section: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '4rem'
  }
})

export const BackgroundImage = styled('div', {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8
})

export const ButtonX = styled('button', {
  padding: 10,
  background: 'transparent',
  cursor: 'pointer',
  border: 0,
  color: '$gray100',
  marginTop: -20
})

export const ButtonRemove = styled('button', {
  cursor: 'pointer',
  color: '$green300',
  backgroundColor: 'transparent',
  display: 'flex',
})


export const WrapperCart = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2rem',
  gap: 16
})

export const InfoProduct = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '1rem',

  span: {
    fontSize: '0.85rem'
  }
})


export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1rem',
})


export const ButtonFinishPurchase = styled('button', {
  width: '100%',
  padding: 20,
  borderRadius: 8,
  backgroundColor: '$green500',
  color: '$white',
  cursor: 'pointer',
  transition: 'all 0.3s ease',


  '&:hover': {
    backgroundColor: '$green300'
  }
})