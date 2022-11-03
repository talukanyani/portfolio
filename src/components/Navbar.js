function Navbar() {
    return (
        <div>
            <Header />
            <Navigations />
        </div>
    )
}

function Header() {
    return (
        <header>
            <h1>Talukanyani Mutshaeni</h1>
        </header>
    )
}

function Navigations() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;