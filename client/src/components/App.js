import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './header.jsx'
import * as actions from '../actions'
import Landing from './landing'
import Dashboard from './dashboard'
import SurveyNew from './surveys/survey_new'

class App extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />     
                        <Route path="/surveys/new" component={SurveyNew} />                                            
                    </div>    
                </BrowserRouter>
            </div>    
        )
    }
        
}

export default connect(null, actions)(App)