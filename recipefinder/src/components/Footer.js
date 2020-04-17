import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <div>
            <FooterContainer className = "main-footer">
               <div className = "footer-middle">    
                <div className= "container">
                <div className="row">
                {/*Col 1 */}
                    <div className = "col-md-4 col-sm-6">
                    <h4>Maha Alrashed</h4>
                        <ul className="list-unstyled">
                            <li> mahar@bu.edu </li>
                            <li> Github </li>
                            <li> Linkedin </li>
                            <li> ? </li>
                        </ul>
                    </div>
                {/*Col 2 */}
                    <div className = "col-md-4 col-sm-6">
                    <h4>ho</h4>
                        <ul className="list-unstyled">
                            <li> h1 </li>
                            <li> h2 </li>
                            <li> h4 </li>
                            <li> h5 </li>
                        </ul>
                    </div>
                {/*Col 3 */}
                    <div className = "col-md-4 col-sm-6">
                    <h4>ho</h4>
                        <ul className="list-unstyled">
                            <li> h1 </li>
                            <li> h2 </li>
                            <li> h4 </li>
                            <li> h5 </li>
                        </ul>
                    </div>
                </div>
                
                </div>
                            {/* Footer Bottom */}
                    <div className = "footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} RecipeFinder - a CS411 Project
                    </p>
                    </div>
            </div>
          </FooterContainer> 
        </div>
    )
}
export default Footer; 

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainLightGrey);
    padding-top: 3rem;
    color: var(--mainGreen);

}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 1rem;
}

`;
