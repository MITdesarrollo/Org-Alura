import './footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='links'>
                <a href=""><img src="./linkedin.png" alt=''/></a>
                <a href=""><img src="./github.png" alt=''/></a>
                <a href=""><img src="./behance.png" alt=''/></a>
            </div>
            <img className='logo' src='./Logo.png' alt="" />
            <h3>Desarrollado por Mariel Torres</h3>
        </footer>
    )
}