import "../styles/glovals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
        <ToastContainer />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
