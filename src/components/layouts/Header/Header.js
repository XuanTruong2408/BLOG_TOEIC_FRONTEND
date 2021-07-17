import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import NavItems from './NavItem/NavItem';

const Headers = function() {
    return (
        <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-success">
                                <NavItems route ="/" name="Trang chủ" subnav="0"/>
                                <NavItems route ="/exam" name="Đề thi" subnav="0" />
                                <NavItems route ="/practice" name="Bài tập" subnav="0" />
                                <NavItems route ="/courses" name="Khoá học" subnav="1" />
                                <NavItems route ="/contact" name="liên hệ" subnav="0" />                                
                                <NavItems route ="/quest" name="Hỏi đáp" subnav="0" />
                            </ul>
                            <div className="col-md-3 text-end ">
                                <Link to ="/login">
                                    <button type="button" className="btn btn-outline-secondary text-light rounded-pill border border-white">
                                        Đăng nhập
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </nav>
        </Fragment>
      )
}

export default Headers;
