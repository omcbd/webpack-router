import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
import bg from '../../images/home1.jpg'   // src图片用 import引
//创建模板 再利用data.js中数据 cardData.map((item,i) => {<Card {...item}key={i}/>}) 用.map()遍历cardData返回数组
class Card extends React.Component {
  handleJump(){
    let url = this.props.url;
    hashHistory.push(`/blog/${url}`)

  }
  render () {
    return(
      <div className="col-xs-6 col-sm-4">
        <div className="thumbnail">
          <img src={this.props.img} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <p><a className="btn btn-primary" role="button" onClick={this.handleJump.bind(this)}>Button</a></p>
          </div>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
  title:'我是标题',
  desc:'我是描述',
  img:bg
}
export default Card;
