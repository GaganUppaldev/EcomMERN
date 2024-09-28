import React from "react";
function Footer(){
    return(
        <>
        <div id="end">
    <div className="contact-section">
        <h2>Be in touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>

        <div className="email-section">
            <label htmlFor="email">Your Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="links-section">
            <div className="link-group">
                <h4>Shop</h4>
                <ul>
                    <li>For Women</li>
                    <li>For Men</li>
                    <li>Stores</li>
                    <li>Our Blog</li>
                </ul>
            </div>

            <div className="link-group">
                <h4>Company</h4>
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Wishlist</li>
                    <li>Our Products</li>
                    <li>Checkouts</li>
                </ul>
            </div>

            <div className="link-group">
                <h4>Your Account</h4>
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Wishlist</li>
                    <li>Our Products</li>
                    <li>Checkouts</li>
                </ul>
            </div>
        </div>
    </div>
</div>

        </>
        
    )
    
}

export default Footer;
