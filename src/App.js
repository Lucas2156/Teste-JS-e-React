
import React, {useState} from 'react';
import './App.css';
  
function App() {
    const [name , setName] = useState('');
    const [phone , setPhone] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    
    const handleNameChange = (e) => {setName(e.target.value);}

    const handleEmailChange = (e) => {setEmail(e.target.value);}

    const handlePhoneChange = (e) => {setPhone(e.target.value);}
    
    const handlePasswordChange = (e) => {setPassword(e.target.value);}
        
    const handleSubmit=(e) => {
      e.preventDefault();
      
      if (name.length < 3 || name.length >255  )
      {
        alert ('Nome inválido')
      }

      else{
       
      alert(`
      Nome: ${name}
      Email: ${email} 
      Telefone: ${phone}
      Senha: ${password}
      `)
      }
  
    }
  return (
    <div>
    <header>
    <form onSubmit={(e) => {handleSubmit(e)}}>
   
    <h1> Formulário </h1>
        <label >
          Nome:
        </label><p/>
        <input type="text" value={name} required onChange={(e) => {handleNameChange(e)}}/><p/>
  
        <label>
          Email:
        </label><p/>
        <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><p/>
         
        <label >
          Telefone:
        </label><p/>
        <input type="number" value={phone} required onChange={(e) => {handlePhoneChange(e)}} /><p/>
        
        <label>
          Senha:
        </label><p/>
        <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} /><p/>
        
        <p>
        <input type="submit" value="Enviar"/>
        </p>
      </form>
    </header>
    </div>
  );
}
  
export default App;