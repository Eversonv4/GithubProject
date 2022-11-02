import { useEffect } from "react";
import {
  Container,
  LocationTItle,
  UsernameTitle,
  EmailTitle,
  InfoContainer,
  BioTitle,
  Description,
} from "./styles";

import { Header } from "components/Header";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "shared/store";
import { LoadAnimation } from "components/loadAnimation";
import { getUserData } from "shared/store/Reducers/Auth.store";

export function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataUser = useSelector((state: RootState) => state.user);

  const {
    login,
    avatar_url,
    name,
    email,
    location,
    followers,
    following,
    bio,
    public_repos,
  } = dataUser;

  useEffect(() => {
    const isUser = localStorage.getItem("github_user");

    if (isUser) {
      dispatch(getUserData(isUser));
    }

    if (!isUser) {
      navigate("/login");
    }
  }, []);

  if (!dataUser) {
    return <LoadAnimation />;
  }

  function handleUserDetails(navigateToPage: string) {
    navigate(navigateToPage);
  }

  return (
    <>
      <Header titleHeader={`#${login}`} />
      <Container>
        <img src={avatar_url} alt={name} />
        <UsernameTitle>{name}</UsernameTitle>

        <EmailTitle>{email || ""}</EmailTitle>

        <LocationTItle>{location || ""}</LocationTItle>

        <BioTitle>BIO</BioTitle>
        <Description>{bio || ""}</Description>

        <InfoContainer>
          <button onClick={() => handleUserDetails("/seguidores")}>
            <span>{followers}</span>
            <h2>Seguidores</h2>
          </button>
          <button onClick={() => handleUserDetails("/seguindo")}>
            <span>{following}</span>
            <h2>Seguindo</h2>
          </button>
          <button onClick={() => handleUserDetails("/repositorios")}>
            <span>{public_repos}</span>
            <h2>Repositórios</h2>
          </button>
        </InfoContainer>
      </Container>
    </>
  );
}
