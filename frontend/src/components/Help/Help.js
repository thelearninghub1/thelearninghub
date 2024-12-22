import React, { Fragment } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import './Help.css';

const Help = () => {
    const help = [
        "LMS Technical issues","Lessons","General","others"
    ]
  return (
    <Fragment>
    <div className="maindashboard">
        <div>
            <Sidebar />
        </div>
        <div className='bhaiContainer'>
           <div className='miniProfileContainer'>
           <div className='myProfile'>
                <h1>Help</h1>
            </div>
            
           </div>
           <div className="helpContainer">
      <div className="myProfileFormMini">
        <form>
        
          <label>
          <div className='queryhelp'>
                <select name="institute"  >
                    <option value="">--Query Related to--</option>
                    {
                        help && help.map((institute)=>(
                            <option value="" key={institute}>{institute}</option>
                        ))
                    }
                </select>
            </div>
          </label>
          <label>
            <input type="text" placeholder="Subjest/Reference" className="input" />
          </label>
          <label>
            <textarea className="input" rows={8} placeholder='Query Detail ...'></textarea>
          </label>
        
          <button type="submit" className="buttonBtn">Submit</button>
        </form>
      </div>
    </div>

   
        </div>
    </div>



</Fragment>
  )
}

export default Help