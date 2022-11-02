import {
  ArrowLeft,
  BackButton,
  Container,
  LayoutContainer,
  LogoutIcon,
} from "./styles";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { logOut } from "shared/store/Reducers/Auth.store";
import { useState } from "react";
import { useEffect } from "react";

interface IHeaderProps {
  titleHeader?: string;
}

export function Header({ titleHeader }: IHeaderProps) {
  const [goBackButton, setGoBackButton] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/seguidores" ||
      location.pathname === "/seguindo" ||
      location.pathname === "/repositorios"
    ) {
      setGoBackButton(true);
    }
  }, []);

  function handleLogout() {
    dispatch(logOut());
    localStorage.removeItem("github_user");
    navigate("/login");
  }

  return (
    <Container>
      <LayoutContainer>
        <span>{titleHeader}</span>
        {goBackButton && (
          <BackButton onClick={() => navigate("/dashboard")}>
            <ArrowLeft />
            Voltar
          </BackButton>
        )}

        <button onClick={handleLogout}>
          Sair
          <LogoutIcon />
        </button>
      </LayoutContainer>
    </Container>
  );
}
