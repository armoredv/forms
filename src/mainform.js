import React from 'react'
import Forms from './formscomponent'
function Mainform() {
    return(
        <div id='form-div'>
                    <form method ='POST' className='forms' onSubmit= {this.submituserRegistrationForm} >
                        <div className='header'><h1>Registration Form</h1></div>
                        <p className= 'name'>
                            <input name ='name' type='name' label ='name' placeholder='group name'
                            className="feedback-input" value={this.state.fields.groupname} onChange={this.handleChange}></input>
                            <div className="errorMsg">{this.state.errors.groupname}</div>
                        </p>
                        <p className ='name'> 
                            <input name ='name' type='name' label ='name' placeholder='city'
                            className="feedback-input" value={this.state.fields.city} onChange={this.handleChange}></input>
                        </p>
                        <p className ='name'>
                            <input name ='teamsize' type='text' label ='teamsize' placeholder='Team Size'
                            className="feedback-input" value={this.state.fields.teamsize} onChange={this.handleChange} ></input>
                            <div className="errorMsg">{this.state.errors.teamsize}</div>
                        </p>
                    
                    <h2>Group Representative information:</h2>

                    <p className ='name'> 
                        <input name ='name' type='text' label ='name' placeholder='name'
                            className="feedback-input" value={this.state.fields.name} onChange={this.handleChange}></input>
                             <div className="errorMsg">{this.state.errors.name}</div>
                    </p>
                    <p className ='name'>
                            <input name ='name' type='name' label ='name' placeholder='Contact Number'
                            className=" feedback-input"  value={this.state.fields.mobileno} onChange={this.handleChange}></input>
                            <div className="errorMsg">{this.state.errors.mobileno}</div>
                    </p>
                    <p className ='email'>
                        <input name ='name' type='email' label ='name' placeholder='Email'
                        className="feedback-input"  value={this.state.fields.emailid} onChange={this.handleChange}  >
                        </input>
                        <div className="errorMsg">{this.state.errors.emailid}</div>

                    </p><br/><br/>
                    <div className='submit'>
                            <button type='submit' id='registerbutton' id='button-blue'>Register</button>
                    </div>
                    </form>
        </div>
    

    


    )
}
