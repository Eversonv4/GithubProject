import { Header } from "components/Header";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getUserData } from "shared/store/Reducers/Auth.store";

export function FollowersPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isUser = localStorage.getItem("github_user");

    if (isUser) {
      dispatch(getUserData(isUser));
    }

    if (!isUser) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header titleHeader="seguidores" />
      <h1>Seguidores</h1>
    </div>
  );
}
