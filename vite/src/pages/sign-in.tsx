import { FC } from "react";
import { useOutletContext } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabaseClient } from "../lib/supabaseClient";
import { OutletContext } from "../components/Layout";

const SignIn: FC = () => {
  const { session } = useOutletContext<OutletContext>();

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} />
  );
};

export default SignIn;
