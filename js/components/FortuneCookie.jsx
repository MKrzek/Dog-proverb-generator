import React from 'react';

class FortuneCookie extends React.Component{
    constructor(props){
        super(props);
            this.state={
                dataAPI: null,
                render: this.props.render,
            };
        }
    
    componentDidMount(){
         fetch('http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=&skip=&page=')
         .then(r=>r.json())
         .then (data=>{
             console.log('fetch')
             console.log(data)
             
             this.setState({
              dataAPI: data,
              
              
              });
            })  
        }  
    
        
        render(){
        
            
            if(this.state.dataAPI==null&&this.state.render==false){
                return null;
            }else{const max=this.state.dataAPI.length;
                 const index=Math.floor(Math.random()*max)
                
                return <div className='myProverb'>
                    <h2>{this.state.dataAPI[index].message}</h2>
                   
                    </div>
            }
        }}
    
    
    
    module.exports = FortuneCookie;