import Logo from './Logo'

function Header() {
    return (
        <div className="header">
            <div className="title">
                <Logo/>
            </div>
            <div className="subtitle">
                Smart Keyboard for Arabic
            </div>
        </div>
    )
}

export default Header;