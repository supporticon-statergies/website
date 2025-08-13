import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/legal?section=privacy", { replace: true });
  }, [navigate]);

  return null;
};

export default Privacy;
