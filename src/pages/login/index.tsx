import { useState } from "react";
import {
  Container,
  LayoutContainer,
  ErrorMessage,
  GithubIcon,
  ArrowRight,
} from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { getUserData } from "shared/store/Reducers/Auth.store";

import { useNavigate } from "react-router-dom";

interface IUserGithub {
  githubUser: string;
}

const schema = yup
  .object({
    githubUser: yup.string().required("Usuário é obrigatório"),
  })
  .required();

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [clicou, setClicou] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserGithub>({
    resolver: yupResolver(schema),
  });

  async function UserSubmit({ githubUser }: IUserGithub) {
    setClicou(true);
    const response = await dispatch(getUserData(githubUser));
    if (!response) {
      alert("usuário inválido!");
      setClicou(false);
      return;
    }
    localStorage.setItem("github_user", response.login);
    navigate("/dashboard");
    return;
  }

  return (
    <Container>
      <LayoutContainer>
        <GithubIcon />
        <form onSubmit={handleSubmit(UserSubmit)}>
          <input
            type="text"
            placeholder="Usuário Github"
            {...register("githubUser")}
          />
          {errors.githubUser && <ErrorMessage>Campo obrigatório</ErrorMessage>}

          <button type="submit">
            {clicou ? "Aguarde ..." : "ENTRAR"}
            {!clicou && <ArrowRight />}
          </button>
        </form>
      </LayoutContainer>
    </Container>
  );
}
