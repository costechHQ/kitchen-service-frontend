import type { AppProps } from "next/app";
import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/hooks/useAuth";

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useAuth();
  
  return (
    <>
    <Navbar />
     <Component {...pageProps} />
    </>
  );
}
