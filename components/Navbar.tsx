import Link from "next/link";
import {NavbarLink} from "../constants/navbarLinks";

interface Props {
    links: NavbarLink[];
}

export const Navbar = (props: Props) => {
    return (
        <div className={`full-width primary pd-md`}>
            {
               props.links.map(link => (
                   <Link href={link.url}>
                       {link.title}
                   </Link>
               ))
            }
        </div>
    );
}