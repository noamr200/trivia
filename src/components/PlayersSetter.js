import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
function PlayersSetter(props)
{
    let i=1;
    let items=[];
    let n=props.counter;
    const [name,setName] = React.useState('');
    
        
        const add = (e) =>
        {
            let obj = {name :name ,number:n ,score:0};
            props.callback(obj)
        }
    

    
  
   
    return (<div>
      
        <form >
            <p>Enter your name player {n} </p>
            Name : <input type="text" onChange={e => setName(e.target.value)}  /><br/>
            <Button variant="primary" onClick={add}>Add player</Button>
            <Button variant="warning">Start playing</Button>
            
        </form>
    </div>);
}
export default PlayersSetter;