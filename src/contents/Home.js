import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../images/pri pic2.png';
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<ReactTypingEffect className="typingeffect" text={['Hi','I am priya',
'I am a Software developer']} speed={100} eraseDelay={1500}/>
</div>
)
}
}
export default Home