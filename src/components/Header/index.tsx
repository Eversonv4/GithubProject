import { Container, LayoutContainer, LogoutIcon } from "./styles";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../shared/store";
import { logOut } from "../../shared/store/Reducers/Auth.store";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useSelector((state: RootState) => state.user);

  function handleLogout() {
    dispatch(logOut());
    localStorage.removeItem("github_user");
    navigate("/login");
  }

  return (
    <Container>
      <LayoutContainer>
        <span>#{login}</span>
        <button onClick={handleLogout}>
          Sair
          <LogoutIcon />
        </button>
      </LayoutContainer>
    </Container>
  );
}
