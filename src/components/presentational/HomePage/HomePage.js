import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">

                <section className="row">
                    <div className="fill-screen"
                        style={{ backgroundImage: 'url(../../resources/images/background.jpg)' }}>

                        <div className="down-button">
                            <a className="btn">
                                <i className="fa fa-arrow-circle-down fa-4x" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="row content-filler"/>

                <section className="row">
                    <div className="fill-screen fixed-attachment"
                        style={{ backgroundImage: 'url(../../resources/images/background.jpg)' }} />
                </section>

                <section className="row content-filler"/>

                <section className="row">
                    <div className="fill-screen fixed-attachment"
                        style={{ backgroundImage: 'url(../../resources/images/background.jpg)' }} />
                </section>

                <section className="row content-filler"/>
            </div>
        );
    }
}

export default HomePage;
