import React, {useCallback, useState} from "react";
import Title from "./Title";
import Btn from "./Btn";
import Count from "./Count";

function Myparentusecallback() {
    const[age, setAge ] = useState(18);
    const[salary,setSalary] = useState(100000);

    const updateAge = useCallback(() => {
                                        setAge(age + 1)
                                        }, [age]);
    const updateSalary = useCallback(() => {
                                            setSalary(salary + 1000)
                                            }, [salary]);

    console.log("my Parent component running...!");
    return(
        <div>
            <Title></Title>
            <Count text="age" count={age}></Count>
            <Btn handleClick={updateAge}>Update Age</Btn>

            <Count text="salary" count={salary}></Count>
            <Btn handleClick={updateSalary}>Update Salary</Btn>
        </div>
    );
}
export default Myparentusecallback;