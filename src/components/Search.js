const Search = () => {
    return (
        <form className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
                <li><a href="src/layouts/Navbar#" data-toggle="sidebar" className="nav-link nav-link-lg"><i
                    className="fas fa-bars"></i></a></li>
                <li><a href="src/layouts/Navbar#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i
                    className="fas fa-search"></i></a></li>
            </ul>
            <div className="search-element">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                       data-width="250"/>
                <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                {/*<div className="search-backdrop"></div>*/}
                {/*<div className="search-result">*/}

                {/*</div>*/}
            </div>
        </form>
    );
}

export default Search;