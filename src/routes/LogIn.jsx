import React from 'react';
import { Link, useNavigate, useOutletContext, } from 'react-router-dom';
import logoYardSale from '@logos/logo_yard_sale.svg';
import "../styles/LogIn.scss";

function LogIn(){
    
    const {authUser, userData} = useOutletContext()
    const [inputData, setInputData] = React.useState({//Guarda los datos ingresados en el formulario
        name : "",
        password: "",
    });
    const [empty, setEmpty] = React.useState(false); //Para valida campos vacíos
    const [validState, setValidState] = React.useState(false); //Usuario o contraseña errados
  
    
    const navigate = useNavigate()
    //Eventos de click:
    const handleLogin = ()=>{//Acceder como usuario
        //Validar campos vacios
        const emptyState = inputData.name.length == 0 ? true : inputData.password.length == 0 ? true 
        : false;
        if(emptyState){
            setEmpty(true);
            return;
        }
        //Valida que el usuario y contraseña ingredados sean de un mismo registro
        const valid = userData?.some((users)=>{
            if(inputData.name === users.name && inputData.password === users.password){
                return true
            };
        })
        if(valid){
            authUser(inputData.name);
            navigate("/");
        }else{
            setValidState(true);
        }  
    }
    const handleSignUp = ()=>{//Ir a registro
        navigate("/sign-up");
    }
    //Eventos de cambios en los inputs:
    const handleInsertUsername = ({target})=>{
        setInputData({...inputData, ...{name: target.value}});
        restoreStates()
        
    }
    const handleInsertPassword = ({target}) => {
        setInputData({...inputData, ...{password: target.value}});
        restoreStates()
       
    }
    function restoreStates(){
        if(empty)
            setEmpty(false);
        if(validState)
            setValidState(false);
    }
        

    return(
        <div className="form-container">
            <img src={logoYardSale} alt="logo" className="logo"/>
            <h2 className='login-title'>Welcome to Yard Sale</h2>
            <form action="/" className="form">
                <label htmlFor="email" className="label">Username</label>
                <input className="input input-email" type="text" id="email" 
                placeholder="user name" onChange={handleInsertUsername} />  
                <label htmlFor="password" className="label">Password</label>
                <input className="input input-password" type="password" id="password" 
                placeholder="*********" onChange={handleInsertPassword} />
                {validState && <p className='valid-field'>Invalid username or password</p>}
                <input type="button" value="Log in" className="primary-button login-button" 
                onClick={handleLogin}/>
                <Link to="/log-in/create-new-password">Forgot my password</Link>
            </form>
            {empty && <p className='empty-field'>There are empty fields</p>}
            <button className="secondary-button signup-button" onClick={handleSignUp}>Sign up</button>
        </div>
    )
}

export {LogIn}