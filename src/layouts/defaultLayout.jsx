import React, { Suspense } from 'react'; 
import NavBar from './navbar/navbar.jsx';
import Footer from './footer/footer'

const loading = () => <div className=''>loading...</div>


const DefaultLayout = (props) => {
    console.log("default layout props------>", props);

    return (
        <Suspense fallback={loading()}>
            <div className='default-layout'>
                <NavBar />
                {props.children}
                <Footer />
            </div>
        </Suspense>
    );
};

export default DefaultLayout;