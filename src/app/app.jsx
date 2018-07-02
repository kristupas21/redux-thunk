import React from 'react';
import './app.scss';
import {storeData, displayLoader, getDataAsync} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import loader from 'https://cdn.dribbble.com/users/108390/screenshots/2882839/spinner-loop.gif';

class App extends React.Component {
    
    componentDidMount() {
        this.props.getDataAsync('https://jsonplaceholder.typicode.com/photos');
    }

    render() {
        const { data, loaderOn } = this.props;

        return (
            <div>
                { loaderOn 
                    ? <img src={'https://cdn.dribbble.com/users/108390/screenshots/2882839/spinner-loop.gif'} alt='loader' />
                    :  data && data.map((obj, i) => {
                        return (
                            <div key={i}>
                                <p>{obj.id}</p>
                                <p>{obj.title}</p>
                                <img src={obj.thumbnailUrl} alt={obj.title}/>
                            </div>
                        );
                    }) 
                }
               
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        loaderOn: state.loader
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storeData,
        displayLoader,
        getDataAsync
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);