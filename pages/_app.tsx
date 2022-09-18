import '../styles/styles.css'
import {AppProps} from "next/app";
import {Navbar} from "../components/Navbar";
import {navbarLinks} from "../constants/navbarLinks";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar links={navbarLinks}/>
            <Component {...pageProps} />
        </>
    );
}