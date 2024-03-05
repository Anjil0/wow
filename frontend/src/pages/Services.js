import React from 'react'
import '../style/Service.css'
function Services() {
  return (
    <div className='body'><div className="form-container">
    <form action="#" method="post">
        <input type="text" name="location" placeholder="Location" required/>
        <input type="text" name="mobile" placeholder="Mobile Number" required/>
        <input type="text" name="vehicle_reg" placeholder="Vehicle Registration Number" required/>
        <input type="submit" value="SUBMIT"/>
    </form>
</div>
</div>
  )
}

export default Services