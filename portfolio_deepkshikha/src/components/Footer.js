

function NavbarBottom() {
    return ( 
        <div className='footer'>
                <span className="contact">Contact me @</span>
                <a href="">
                <span className='footer-link email'>deepshikha.pegu97@gmail.com</span>
                </a>
                
                <a href="">
                <span className="twitter footer-link">
                    <span className='sm-text'>Twitter</span>
                    <span className="iconify-inline" id="twitter"data-icon="ant-design:twitter-circle-filled" data-width="20" data-height="20"></span>
                </span>
                </a>
                <a href="">
                <span className="linkedin footer-link">
                    <span className='sm-text'>LinkedIn</span>
                    
                    <span className="iconify-inline " data-icon="akar-icons:linkedin-box-fill" data-width="20" data-height="20"></span>
                </span>
                <span className="resume footer-link">
                    <span className='sm-text'>Resume</span>
                </span>

                </a>
        </div>
     );
}

export default NavbarBottom;