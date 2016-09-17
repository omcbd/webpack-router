import React, { PropTypes } from 'react'
import axios from 'axios'
class About extends React.Component {
  constructor(){
    super()
    this.state={
      user:"",
      data:[],
      loading:true
    }
  }
  componentDidMount(){

      axios.get('https://api.github.com/users/omcbd')
      .then((res) => {
        console
          this.setState({             //使用箭头函数 this指向 class About
          data:res.data,
          loading:false
      })})
      .catch(function (error) {
        console.log(error);
      });
  }


  render () {
    let style={
      img:{
        width:'200px',
        height:'auto'
      }
    }
      return (
          <div>
            <h3>{this.state.loading?'loading...':this.state.data.name}</h3>
            <img src={this.state.data.avatar_url} style={style.img}/>
          </div>
      )
  }
}

export default About;
