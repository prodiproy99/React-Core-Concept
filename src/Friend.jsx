import { useState } from "react";

export default function Freind({friend}){
    const {name, email} = friend

    return(
        <div className="box">
            <h3>Name: {name}</h3>
            <h3>email: {email}</h3>
        </div>
    )
}