
import React from 'react';
import FortuneCookie from './FortuneCookie.jsx';

class Cats extends React.Component{
constructor(props){
    super(props);
        this.state={
            dataAPI: null,
            render: false,
        };
    }

componentDidMount(){
     fetch('https://dog.ceo/api/breed/hound/images')
     .then(r=>r.json())
     .then (data=>{
         console.log('fetch')
         
         
         this.setState({
          dataAPI: data,
          render:false
          
          });
          
     });
    }
    handleBtnClick=()=>{
        event.preventDefault;
        this.setState({
            render:true,
        })
    }
    

    render(){
        
        
        if(this.state.dataAPI==null){
            return null;
        }else{
           
            const max=this.state.dataAPI['message'].length;
            console.log(max)
            const dogArray=[];
            for (let i=0; i<3;i++){
                const dog=Math.floor(Math.random()*max);
                dogArray.push(dog);
                console.log(dogArray);
    
            }           
        return <div>
                <h1 className='myH1'>Choose a dog</h1>
                <h2 className='myH2'>and find discover a proverb for today</h2>
                
                <img className='myImg' src={this.state.dataAPI['message'][dogArray[0]]} onClick={this.handleBtnClick.bind(this)}></img>
                <img className='myImg' src={this.state.dataAPI['message'][dogArray[1]]} onClick={this.handleBtnClick.bind(this)}></img>
                <img className='myImg' src={this.state.dataAPI['message'][dogArray[2]]} onClick={this.handleBtnClick.bind(this)}></img>
                < FortuneCookie render={this.state.render} />
                </div>
        }
    }}



module.exports = Cats;