import React from "react";
import { Link } from "react-router-dom";
import "./headerm.css"
const HeaderMain=()=>{
    return(
            <header>
                <div className="content">
                    <div className="logo">
                        <h1>SuperCrude!</h1>
                    </div>
                    <div className="btn-newPost">
                        <Link to="/post">
                            <button className="button">Add new Post</button>
                        </Link>
                    </div>
                </div>
            </header>
    );
}
export default HeaderMain