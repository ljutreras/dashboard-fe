/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

export default function Users({ allUsers }) {

    const [users, setUsers] = useState(allUsers);

    return (
        <div className="cardContainer">
            {
                users.map((item, index) => (
                    <div key={index} className="card">
                        <div className="cardItem">
                            <div className="cardTitle">
                                <h1>{item.firstName +' '+ item.lastName}</h1>
                            </div>
                            <div className='cardContent'>
                                <Image
                                        src="/images/profile.png"
                                        width={150}
                                        height={187}
                                        alt="Profile"
                                    />
                            </div>
                            <div className="cardAction">
                                <div className="piblishDate">
                                    <span>{item.age ? 'Edad: '+ item.age : 0}</span>
                                </div>
                                <div className="author">
                                    <span>{item.email}</span>
                                </div>
                            </div>
                            <div className="cardInfo">
                                <p><b>{item.firstName +' '+ item.lastName}</b></p>
                                <p>{'Edad: '+item.age + ' años'}</p>
                                <p>{'Correo: '+item.email}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}