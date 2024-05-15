import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Session } from "@supabase/supabase-js";
import { supabaseClient } from "../lib/supabaseClient";

export interface OutletContext {
  session: Session | null;
}

const Layout: FC = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;

    // test
    console.log(session);
  }, [session]);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ session }} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
