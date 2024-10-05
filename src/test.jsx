import React , {Component, useEffect, useState} from 'react'
import "./index.css"
// class DemoClass extends Component {
//     render(){
//          return <h1>Helllo test...</h1>
//     }
// }

export default function DemoClass(){
    const countries = [
        { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
        { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
        { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
      ];

      const array = ["play crcket",'play football','read books'];

      let [list,setList]= useState(array)
      let [isChecked,setIschecked]= useState(false)
      let [isShow,setIsShow]= useState(false)


      let [country, setCountry] = useState([])
    
    let HandleClick = (currentIndex) =>{
        let data = list.filter((item,index)=> index !== currentIndex )
        let copyList = [...data]
        setList(copyList);        
    }

    let HandleCheckBox = (value,index) => {
        setIschecked(!value)
        setIsShow(!isShow)
    }
      
    let HandleChange = (e) =>{
        let countryName= e.target.value
        let data = countries.filter((item) => item.value === countryName)
        let copyCity = [...data]
        setCountry(copyCity[0])        
    }    
    return (
        <div className='container'>
            {/* <CounrtySelect countries={countries} HandleChange={HandleChange} country={country} /> */}
            <CheckList list={list} HandleClick={HandleClick} isChecked={isChecked} HandleCheckBox={HandleCheckBox} isShow={isShow}/>
        </div>
    )
}


function CounrtySelect({countries,HandleChange,country}){
    // console.log(country.cities);
    let cities = country.cities
    
 return (
    <>
        <h3>Select Counrty chaneg event</h3>
        <select onChange={HandleChange} >
            <option>Choose Country</option>
        {
            countries.map((item,index)=>{                
                return <option key={index} value={item.value}>{item.name}</option>
            }) 
        }
        </select>
        <select>
            <option>Choose city</option>
            {
                cities ?  
                cities.map((item, index)=>{
                    return <option key={index} value={item}>{item}</option>
                })
               : ""
            }
        </select>
        
    </>
 )
}

function CheckList({list,HandleClick,HandleCheckBox,isChecked,isShow}){
    return(
        <>
            <h3>To Do Check List</h3>
            <ul>
                {
                    list.map((item, index)=>{
                        return(
                            <div className='listDiv' key={index}>
                                <input type='checkbox' className='checkInput' onChange={(event)=>HandleCheckBox(event.target.value,index)} isChecked />
                                <li className='listLi'>{item}
                                    {
                                        isShow ? <span className='delete' onClick={()=>HandleClick(index)}>X</span> : ""
                                    }
                                     
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
}