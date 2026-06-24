import './Header.css'

const Header = () => {
    return ( 
        <div className="justify-between flex items-center mx-auto max-w-300 w-full px-4 py-2">
            <img src="./Logo.png" alt="" className="logo-img"/>
            <p className="btn-premium">Premium</p>
        </div>
    );
}

export default Header;