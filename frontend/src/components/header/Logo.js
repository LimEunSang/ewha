import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate("/")}>
      ewha
    </div>
  );
};

export default Logo;
