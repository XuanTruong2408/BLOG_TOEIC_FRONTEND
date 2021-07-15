import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Headers = function() {
    return (
        <Fragment>
            <div className={styles['header']}>
                <img href="#!"></img>
                <h1><center>đây là trang web</center></h1>
            </div>
            <div className="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" class="nav-link px-2 link-secondary">Trang chủ</Link></li>
                    <li><Link to="/exam" class="nav-link px-2 link-dark">Đề thi</Link></li>
                    <li><Link to="/practice" class="nav-link px-2 link-dark">Đề luyện tập</Link></li>
                    <li><Link to="/courses" class="nav-link px-2 link-dark">Khóa học</Link></li>
                    <li><Link to="/contact" class="nav-link px-2 link-dark">liên hệ</Link></li>
                    <li><Link to="/quest" class="nav-link px-2 link-dark">hỏi đáp</Link></li>
                </ul>

                <div class="col-md-3 text-end">
                    <Link className={styles['Login']} to ="/login">
                        <button type="button" class="btn btn-outline-primary me-2">
                            Đăng nhập
                        </button>
                    </Link>
                </div>
            </header>
            </div>
        </Fragment>
      )
}

export default Headers;
