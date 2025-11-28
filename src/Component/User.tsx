import React from 'react';

// build in type string , boolean , number 
// User define type 

type UserProps = {
    name : string ;
    age : number;
    isActive : boolean;
    lang:string[];
}


const User = ({name,age,isActive,lang} : UserProps ) => {
    return (
        <div>
            <h1>User list </h1>
            <p>Username = {name} </p>
            <p>UserAge = {age}</p>
            <p>Active status : {isActive}</p>
            <h3>Registered History : 
                <p>{isActive ? "Resister User" : " Not Register"}</p>
            </h3>
            <p>Language Use : 
               {
                lang.map((language,index) =>{
                    return <span key={index}>{language} </span>
                })
               }
            </p>
        </div>
    );
};

export default User;