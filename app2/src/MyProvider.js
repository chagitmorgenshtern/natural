import React, { Component } from 'react';
import MyContext from './context.jsx';
import axios from './axios'

class MyProvider extends Component {
    state = {
        user: {
            email: "",
            password: ""
        },
        serviceAreas: []
    }

    componentDidMount() {
        axios.get('serviceAreas/GetAllServiceAreas')
            .then(res => {
                console.log(res);
                this.setState({ serviceAreas: [...res.data] });
            })
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                //=====================IS IT WORKS?????====================
                setMethod: (id, value) => this.setState({
                    [id]: value
                })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;