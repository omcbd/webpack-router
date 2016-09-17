import React, { PropTypes } from 'react'
import {cardData} from './data.js'
import Card from './components/card.js'
class Work extends React.Component {
  render () {
      return (
          <div>
              <h1>Work</h1>
              <div className="container-fluid">
                <div className="row" style={{marginTop:'20px'}}>
                {cardData.map( (item,i) => <Card {...item} key={i} /> )} {/*遍历cardData 返回 Card 组件 */}
                </div>
              </div>
          </div>
      )
  }
}

export default Work;
