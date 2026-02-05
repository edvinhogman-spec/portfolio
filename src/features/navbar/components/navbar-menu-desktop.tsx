import { NAV_LINKS } from "../constants"
import { NavbarLink } from "./navbar-link"

export function NavbarMenuDesktop() {
    return (
        <div className="hidden lg:block">
            <div className="ml-3 flex space-x-1.5">
                {NAV_LINKS.map((props) => (
                    <NavbarLink variant="desktop" key={props.path} {...props} />
                ))}
            </div>
        </div>
    )
}
