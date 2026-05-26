import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/legal?section=terms", { replace: true });
  }, [navigate]);

  return null;
};

export default Terms;
