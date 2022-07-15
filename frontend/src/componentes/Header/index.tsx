import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logo-dsmeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://github.com/jeffleonardo" target="_blank">@jefferson</a></p>
            </div>
        </header>
    )
}

export default Header;
