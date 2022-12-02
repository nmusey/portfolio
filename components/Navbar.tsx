import Link from "next/link";
import {NavbarLink} from "../constants/navbarLinks";
import useWidthQuery from "../hooks/useWidthQuery";
import {DesktopMinWidth} from "../constants/width";

interface Props {
    links: NavbarLink[];
}

export const Navbar = (props: Props) => {
    const isWide = useWidthQuery(`${DesktopMinWidth}px`);

    const renderWideView = () => props.links.map(link => (
            <Link href={link.url} className="mg-md-x">
                {link.title}
            </Link>
        )
    );

    const renderNarrowView = () => {
        const firstLink = props.links?.[0];
        return (
            <>
                <Link href="#" className="mg-md-x">
                    Menu
                </Link>
                <Link href={firstLink?.url || "/"} className="mg-md-x">
                    {firstLink?.title || "Nick Musey"}
                </Link>
            </>
        );
    };

    return (
        <nav className={`full-width primary`}>
            <div className={`horizontal pd-md ${isWide ? "justify-start" : "space-between"}`}>
                {
                    isWide ? renderWideView() : renderNarrowView()
                }
            </div>
        </nav>
    );
}
