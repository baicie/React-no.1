import React, { useState, useEffect } from 'react'
let i = 0;
const Hook = () => {
    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)
        return ()=>{
            console.log('componentWillUnmount')
        }
    }, [])
    useEffect(()=>{
        console.log(1);
    })
    // setInterval(()=>{
    //     setTime(new Date().toLocaleString())
    // },1000)
    return (
        <div>
            {time}
        </div>
    )
}

export default Hook
