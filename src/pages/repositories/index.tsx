import { Header } from "components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "shared/store";
import { useNavigate } from "react-router";
import { getUserData } from "shared/store/Reducers/Auth.store";

import {
  MainTitle,
  Container,
  ConterStars,
  StarIcon,
  LockIcon,
  ItemList,
} from "./styles";

interface IReposProps {
  name: string;
  description: string;
  private: boolean;
  starred: number;
}

export function RepositoriesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const githubUser = useSelector((state: RootState) => state.user.login);

  const [repositories, setRepositories] = useState<IReposProps[]>([]);

  async function GetData() {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?page=1&per_page=1000`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => data)
      .catch((error) => console.log(error.status));

    const filteredRepos = response.map((item: any) => {
      return {
        name: item.name,
        description: item.description,
        private: item.private,
        starred: item.stargazers_count,
      };
    });

    setRepositories(filteredRepos);
  }

  //

  useEffect(() => {
    const isUser = localStorage.getItem("github_user");

    if (isUser) {
      dispatch(getUserData(isUser));
    }

    if (!isUser) {
      navigate("/login");
    }

    GetData();
  }, []);

  return (
    <div>
      <Header />
      <MainTitle>Repositórios {repositories.length}</MainTitle>
      <Container>
        {repositories &&
          repositories.map((item) => (
            <ItemList key={item.name}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div>
                <StarIcon />
                <ConterStars>{item.starred}</ConterStars>
                {!item.private && <LockIcon />}
              </div>
            </ItemList>
          ))}
      </Container>
    </div>
  );
}
