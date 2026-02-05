import { NAV_LINKS } from "../constants"
import { NavbarLink } from "./navbar-link"

export function NavbarMenuDesktop() {
    return (
        <div className="ml-4 hidden h-full items-center justify-center space-x-1.5 lg:flex">
            {NAV_LINKS.map((props) => (
                <NavbarLink variant="desktop" key={props.path} {...props} />
            ))}
        </div>
    )
}
