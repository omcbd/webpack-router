import React, { PropTypes } from 'react'
import {Link} from 'react-router'
class App extends React.Component {
  render () {
        return (
          <div>
            <div>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" ><Link to="/"activeStyle={{color:'white',backgroundColor:'#03A9F4'}}onlyActiveOnIndex={true}>Home</Link></li>                                                            {/*onlyActiveOnIndex 只在主页激活activeStyle activeClassName*/}
                <li role="presentation"><Link            to="/about"activeStyle={{color:'white',backgroundColor:'#03A9F4'}}>About</Link></li>
                <li role="presentation"><Link to="/work"activeStyle={{color:'white',backgroundColor:'#03A9F4'}}>Work</Link></li>
              </ul>
            </div>

            {this.props.children}
          </div>
        )
  }
}

export default App;
