import React from 'react'
import styled from 'styled-components'

function Dfooter() {
    return (
        <div>
            <FooterContainer className = "main-footer">
               <div className = "footer-middle">    
                <div className= "container">
                <div className="row">
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
export default Dfooter; 

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainLightGrey);
    padding-top: 1rem;
    color: var(--mainGreen);

}

.footer-bottom {
    padding-top: 0rem;
    padding-bottom: 1rem;
}

`;
