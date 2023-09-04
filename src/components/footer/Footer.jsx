import './footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='links'>
                <a href=""><img src="public/linkedin.png" alt=''/></a>
                <a href=""><img src="public/github.png" alt=''/></a>
                <a href=""><img src="public/behance.png" alt=''/></a>
            </div>
            <img className='logo' src='public/Logo.png' alt="" />
            <h3>Desarrollado por Mariel Torres</h3>
        </footer>
    )
}