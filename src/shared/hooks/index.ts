import { useSelector } from "react-redux";
import { RootState } from "shared/store";

export async function GetDataRespos() {
  const { login } = useSelector((state: RootState) => state.user);

  const response = await fetch(`https://api.github.com/users/${login}/repos`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => data)
    .catch((error) => console.log(error.status));

  return response;
}
