import { useState } from "react";

const useButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const updateLoading = (e: any) => {
    e.preventDefault();
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return { loading, updateLoading };
};

export default useButton;
