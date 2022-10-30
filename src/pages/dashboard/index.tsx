import { useEffect } from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../shared/store";
import { LoadAnimation } from "../../components/loadAnimation";

export function Dashboard() {
  const navigate = useNavigate();
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
    if (!isUser) {
      navigate("/login");
    }
  }, []);

  if (!dataUser) {
    return <LoadAnimation />;
  }

  return (
    <>
      <Header />
      <Container>
        <img src={avatar_url} alt={name} />
        <h2 style={{ color: "white" }}>{login}</h2>
        <h3 style={{ color: "white" }}>{email || ""}</h3>
        <h3 style={{ color: "white" }}>{location || ""}</h3>

        <span>
          seguidores: <span style={{ color: "white" }}>{followers}</span>
        </span>
        <span>
          seguindo: <span style={{ color: "white" }}>{following}</span>
        </span>
        <span>
          repositórios: <span style={{ color: "white" }}>{public_repos}</span>
        </span>
        <h2>BIO</h2>
        <p>{bio || ""}</p>
      </Container>
    </>
  );
}
