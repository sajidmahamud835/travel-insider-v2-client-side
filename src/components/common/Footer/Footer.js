import React from 'react';
import {
    MDBFooter,
} from 'mdb-react-ui-kit';
const Footer = () => {
    return (
        <footer>
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:

                    Travel Insider

                </div>
            </MDBFooter>
        </footer>
    );
};

export default Footer;