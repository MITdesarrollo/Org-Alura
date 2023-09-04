import './footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='links'>
                <a href=""><img src="src/assets/linkedin.png" alt=''/></a>
                <a href=""><img src="src/assets/github.png" alt=''/></a>
                <a href=""><img src="src/assets/behance.png" alt=''/></a>
            </div>
            <img className='logo' src='src/assets/Logo.png' alt="" />
            <h3>Desarrollado por Mariel Torres</h3>
        </footer>
    )
}