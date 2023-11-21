import styled from 'styled-components';





export const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled.div`
width: 80%;
padding: 0 6px;
display: flex;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width: 640px) {
    padding: 0;
}
`
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const GithubButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  text-decoration: none; /* Add this line */
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const MobileLinkGithubButton = styled.a`
background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 8%;
  text-decoration: none; /* Add this line */
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;


export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  top: 0px; 
  right: 0;
  width: 80%;
  padding: 50px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light +99};
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "2" : "-1")};
`;

export const MobileMenuLinks = styled.a`
color: ${({ theme }) => theme.primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
&:hover {
    color: ${({ theme }) => theme.primary};
}
&.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
}
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;