import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Form from './Form';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Title text="We're coming soon" />
            <Subtitle text="Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals." />
            <Form />
            <Footer />
        </div>
    );
}

export default App;