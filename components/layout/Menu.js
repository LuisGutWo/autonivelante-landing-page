import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link>
                </li>
                <li><Link href="#services-section">Servicios</Link>
                </li>
                <li><Link href="#products">Productos</Link></li>
                <li><Link href="#contact">Contacto</Link></li>
            </ul>
        </>
    )
}
