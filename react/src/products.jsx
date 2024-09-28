import React from "react";

function Product() {
    return (
        <>    
            <div id="intro">
                <div id="intro-a">All Products</div>
                <div>Clothing</div>
                <div>Bags</div>
                <div>Shoes</div>
                <div id="intro-acc">Accessories</div>
                <div id="intro-all">ALL PRODUCTS</div>
            </div>

            <div id="prod">
                <div className="prod"></div>
                <div className="prod"></div>
                <div className="prod"></div>
                <div className="prod"></div>
                <div className="prod"></div>
            </div>

            <div id="prod2">
                <div className="prod2"></div>
                <div className="prod2"></div>
                <div className="prod2"></div>
                <div className="prod2"></div>
                <div className="prod2"></div>
            </div>
        </>
    );
}

export default Product;
