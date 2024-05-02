import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
                <li><Link className={`link ${usePathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                </li>
                <li><Link className={`link ${usePathname === '/#services-section' ? 'active' : ''}`} href="#services-section">Servicios</Link>
                </li>
                <li><Link className={`link ${usePathname === '/#products' ? 'active' : ''}`} href="#products">Productos</Link></li>
                <li><Link className={`link ${usePathname === '/#contact' ? 'active' : ''}`} href="#contact">Contacto</Link></li>
            </ul>
        </>
    )
}
