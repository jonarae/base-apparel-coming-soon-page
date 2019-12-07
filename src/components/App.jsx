import React from 'react';

import Brand from './Brand';
import Title from './Title';
import Subtitle from './Subtitle';
import Form from './Form';
import Footer from './Footer';

function App() {
    return (
        <div>
            <div className="page-container">
                <div className="left-container">
                    <Brand />
                    <Title />
                    <Subtitle />
                    <Form />
                </div>
                <div className="right-container">

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;