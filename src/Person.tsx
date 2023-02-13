import { useState } from "react";

interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    //now this is optional 
    country?:string;
}

//enum
export enum Country{
    Brazil="Brazil",
    Pakistan="Pakistan",
    India="India"
}

export const Person = (props: Props) => {
    const [state,setState] = useState('')
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This Person {props.isMarried ? 'is' : 'is not'} Married</h1>
            <h1>Friends List: {props.friends.map((friend: string) => 
            <p>{friend}</p>)}</h1>
            <h1>{props.country}</h1>
        </div>
    )
}
