import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Home from './pages/home';
import Add from './pages/add';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/add' exact component={Add}></Route>
                    </div>
                </BrowserRouter>
            </Provider>

        )
    }
}

export default App;