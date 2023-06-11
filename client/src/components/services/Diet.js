import React, {useEffect, useState}  from 'react'
import DietPlan from "./DeitPlan/Basics/UserDiet"


import { useHistory } from "react-router-dom";

const Diet = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/services/diet', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <> <div className='p-2'><section className="bg-dark p-3 mt-2">
       <div className="container p-2"> <DietPlan/></div>
   </section></div>
        </>
    )
}

export default Diet
