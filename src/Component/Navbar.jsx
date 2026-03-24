import { Braces, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
    const [links, setLinks] = useState(false)

    return (
        <div className="relative">
            {/* NAVBAR */}
            <nav className="sticky top-2 z-50 flex justify-between items-center px-6 md:px-10 p-4 bg-purple-600 text-white tracking-wide rounded-t-sm">
                {/* Logo */}
                <Link to="/" className="text-2xl font-semibold flex gap-1 items-center">
                    <Braces /> Rest JSON
                </Link>

                {/* Hamburger */}
                <button
                    onClick={() => setLinks(prev => !prev)}
                    className="md:hidden cursor-pointer"
                >
                    <motion.div
                        animate={{ rotate: links ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {links ? <X /> : <Menu />}
                    </motion.div>
                </button>


                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-5 text-lg font-semibold">
                    <NavItem to="/" label="Home" />
                    <NavItem to="/docs" label="Docs" />
                    <NavItem to="/contact" label="Contact" />
                </ul>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {links && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute left-0 right-0 bg-purple-600 text-white px-6 py-4 flex flex-col gap-4 z-40"
                    >
                        <NavItem to="/" label="Home" onClick={() => setLinks(false)} />
                        <NavItem to="/docs" label="Docs" onClick={() => setLinks(false)} />
                        <NavItem to="/contact" label="Contact" onClick={() => setLinks(false)} />
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}

const NavItem = ({ to, label, onClick }) => (
    <li
        onClick={onClick}
        className="relative inline-block after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full after:origin-left after:scale-x-0
    after:bg-white after:transition-transform after:duration-300
    hover:after:scale-x-100"
    >
        <Link to={to}>{label}</Link>
    </li>
)

export default Navbar
