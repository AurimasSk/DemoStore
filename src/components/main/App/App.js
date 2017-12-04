import React from 'react';
import PropTypes from 'prop-types';
import Header from '../.././shared/Header';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header
                    loading={this.props.loading}
                />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
