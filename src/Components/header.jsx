

import Home from './home';
import Collapsible from 'react-collapsible';

const Header = () => {
    return (
        <header>

            <h1><a href="#"><b>.</b>MOV </a></h1>

            <div className="searchbar">
                <form onSubmit="return false">
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>


                    <input type="text" onKeyPress={(e) => e.key === 'Enter' && Home.handleSearch(e.target.value)} />

                    <Collapsible trigger="Filter nach Genre">
                        <label htmlFor=""><input type="checkbox" name="" id="" value={28} onChange={(e) => Home.isChecked(e.target)} />Action</label>
                        <label htmlFor=""><input type="checkbox" name="" id="" value={18} onChange={(e) => Home.isChecked(e.target)} />Drama</label>
                        {/* <label htmlFor=""><input type="checkbox" name="" id="" value={10402} onChange={(e) => isChecked(e.target)} />Music</label>
                        <label htmlFor=""><input type="checkbox" name="" id="" value={10751} onChange={(e) => isChecked(e.target)} />Family</label>
                        <label htmlFor=""><input type="checkbox" name="" id="" value={37} onChange={(e) => isChecked(e.target)} />Western</label>
                        <label htmlFor=""><input type="checkbox" name="" id="" value={878} onChange={(e) => isChecked(e.target)} />Science Fiction</label>
                        <label htmlFor=""><input type="checkbox" name="" id="" value={27} onChange={(e) => isChecked(e.target)} />Horror</label> */}
                    </Collapsible>
                </form>
            </div>
        </header>

    );
}

export default Header;