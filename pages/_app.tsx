import '../styles/styles.css'
import {AppProps} from "next/app";
import {Navbar} from "../components/Navbar";
import {navbarLinks} from "../constants/navbarLinks";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <Navbar links={navbarLinks}/>
            <Component {...pageProps} />
        </>
    );
}
