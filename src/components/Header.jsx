import logoImg from '../assets/logo.jng';
export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1>Tasty Orders</h1>
            </div>
            <nav>
                <button> Cart (0)</button>
            </nav>
        </header>
    )
}