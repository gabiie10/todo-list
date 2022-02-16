import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
            <header>
                <div className="content">
                   
                        <Link to="/" className="voltar">
                            Voltar para o menu
                        </Link>
                    
                </div>
            </header>
    );
}
export default Header