import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page/Page";
import { useAuth } from "../../contexts/auth.context";

function LogInPage() {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogIn = () => {
    logIn({ id, password });
    navigate("/");
  };

  return (
    <Page>
      <div className="text-black">
        <input value={id} onChange={(e) => setID(e.target.value)} type="text" />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button
          className="text-black bg-white border border-black"
          onClick={handleClickLogIn}
        >
          로그인
        </button>
      </div>
    </Page>
  );
}

export default LogInPage;
