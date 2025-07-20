import SignInView from "@/sections/auth/SignInView";
import { Navigate } from "react-router-dom";
import { HOME } from "@/routes/routes.d";
import { useEffect, useState } from "react";

const Page = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      setRedirect(true);
    }
  }, []);

  if (redirect) {
    return <Navigate to={HOME} replace />;
  }

  return (
    <>
      <title>Sign In</title>
      <div className="page-sign-in w-full">
        <SignInView />
      </div>
    </>
  );
};

export default Page;
