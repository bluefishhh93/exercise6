import { useState } from "react";


function Company() {
    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];


    const [input, setInput] = useState('')

    const handleInputChange = (input) => {
        setInput(input)
        console.log(input)
    }


    const list = companies.filter(companies => companies.name.includes(input))
    console.log(list)
    return (
        <div>
            <ul>
                {
                    list.map((company, index) =>
                        <li style={{ listStyle: 'none' }} key={index}>{company.name}</li>
                    )
                }
            </ul>
            <input type="text" value={input} onChange={e => handleInputChange(e.target.value)}></input>
        </div>
    )



}
export default Company