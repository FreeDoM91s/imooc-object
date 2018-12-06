import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';

//App = connect(mapStatetoProps, actionCreator)(App);
@connect(
    //第一个参数：需要state中的什么属性放到props里
    state => ({ num:state.counter }),

    //第二个参数：需要什么方法放到props里，会自动dispatch
    { addGun, removeGun, addGunAsync }
)

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现在有机枪{ this.props.num }把</h1>
                <button onClick={ this.props.addGun }>申请武器</button>
                <button onClick={ this.props.removeGun }>上交武器</button>
                <button onClick={ this.props.addGunAsync }>过两天再给</button>
            </div>
        )
    }
}

export default App;