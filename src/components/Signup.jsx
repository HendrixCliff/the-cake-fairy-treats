import React from "react"
import {useState} from "react"


export default function SignUp( props) {
    const [formData, setFormData] = useState(
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          address: "",
          comment: "",
          delivery: "",
          isDiabetic: false,
          duration: ""
        }
      )
      const styles = props.moody ? {background: "#040303", color: "#ffffff"} :  {background: ""}
  
       function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
        return {
                ...prevFormData, 
                [name]: type === "checkbox" ? checked : value
            }
        })
       }

       function handleSubmit(event) {
        event.preventDefault()
        
       }
    
   return (
    <div style = {styles}  className="overall">
        <h2><strong>The-Cake-Fairy</strong> is Open for Business</h2>
        <h2>Place a Fairy Order</h2>
        <form onSubmit={handleSubmit} >
            <div className="form--container">
                <input type="text" onChange={handleChange} placeholder="FirstName" name="firstName"
                value={formData.firstName}/>
                <input type="text" onChange={handleChange} placeholder="LastName" name="lastName" 
                value={formData.lastName}/>
                <input type="email" onChange={handleChange} placeholder="youremail@gmail.com" name="email" 
                value={formData.email}/>
                <input type="number" onChange={handleChange} placeholder="+2347017915611" name="phone"
                value={formData.phone} />
                <input type="text" name="location" placeholder="location" onChange={handleChange} 
                value={formData.location}/>
                <input type="text" placeholder="address" name="address" onChange={handleChange} 
                value={formData.address}/>
                <textarea name="comment" placeholder="Place your order" />
                <div>
                    <div className="radios">
                        <input type="radio" name="delivery" id="homedeliverly" value="homedelivery" onChange={handleChange} 
                        checked={formData.delivery === "homedelivery"}/>
                        <label htmlFor="homedeliverly"> Home Delivery</label>
                    </div>
                    <div className="radios">
                        <input  type="radio" id="self" name="delivery" value="self" onChange={handleChange}
                        checked={formData.delivery === "self"}/>
                        <label htmlFor="self">Self Pickup</label>
                    </div>
                    <div className="radios">
                        <input  type="checkbox" onChange={handleChange} name="isDiabetic" id="isDiabetic" 
                        checked={formData.isDiabetic}  /> 
                        <label htmlFor="isDiabetic">Are you allergic to excess sugar maybe diabetic</label>
                    </div>
                    <div className="radios">
                        <input type="radio" name="duration" onChange={handleChange} value="threedays"id="three-days" checked={formData.duration ==="threedays"} />
                        <label htmlFor="three-days">Three Days time</label>
                    </div>
                    <div className="radios">
                        <input type="radio" name="duration" onChange={handleChange} value="less" checked={formData.duration === "less" } id="less"/>
                        <label htmlFor="less" >Less than a week time</label>
                    </div>
                    <div className="radios">
                        <input type="radio" name="duration" onChange={handleChange} id="longer"value="longer"  checked={formData.duration === "longer"}/>
                        <label htmlFor="longer">Longer than a week time</label>
                    </div>
                </div> 
            </div>
            <h3>Hey! {formData.firstName} {formData.lastName} from {formData.location} thank you for being a wonderful customer. Your craving for 
            our cake is why we keep bringing out the best in us.</h3>
        </form>
    </div>
   ) 
}