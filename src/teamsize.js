import React from 'react';
import './index.css';
import $ from 'jquery'; 

class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {

        
        key:[],
        fields:{},
        errors:{},
        members:{},
        formIsvalid : true
      }
       this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
      this.renderForm = this.renderForm.bind(this);
      this.validateForm = this.validateForm.bind(this);
      // this.set=this.set.bind(this);
    };



    handleChange(e) {

      let fields = this.state.fields;
      let members = this.state.members;
      fields[e.target.name] = e.target.value;
      let key = this.state.key;
     let size=this.state.fields['teamsize'];
      let self=this;
      //let arr=e.target.name;
      if(fields["teamsize"]!="undefined" && fields["teamsize"]<9 && fields["teamsize"]>4){
        key = self.renderForm();
        members[e.target.name]=e.target.value;
        self.setState({
          
          key : key
          

        });
        
      }
      if (!self.validateForm()) {
        this.setState({
          members:members,
          fields:fields,
          
          
        });    
      }
    };



    submituserRegistrationForm(e) {
      e.preventDefault();
      let ek = e.state.formIsvalid; 
      if(ek){
       $.ajax({
        url: '/nwp/server.php',
        type: "POST",
        datatype: "json",
        success: function(data) {
          console.log('success')
          console.log(data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.log('error')
        }.bind(this)
      });
      alert("Form submitted");
      }
      else{
        alert("sorry ")
      }

    };

    renderForm(e) {
      
       let fields=this.state.fields;
       let noofmembers = fields["teamsize"];
       let table=[];
      
      for(let i=1;i<=noofmembers;i++){
        let a= "member"+i;
        console.log(a);
        console.log(this.state.errors);
        table.push(
          <div className='txtb'>
              <input name = {i} placeholder="Member Name"  className="feedback-input" value={this.state.members.i} onChange={this.handleChange}></input>
              <div className="errorMsg">{this.state.errors[i]}</div>
          </div>
        )
      }
      console.log(table);
      return (
        <div>
          {table}
        </div>
      )
      
    }

    validateForm() {

      let fields = this.state.fields;
      let members = this.state.members;
      let errors = this.state.errors;
      let formIsvalid = this.state.formIsvalid;
      



      if (typeof fields["groupname"] !== "undefined") {
        if (!fields["groupname"].match(/^[a-zA-Z ]*$/)) {
          formIsvalid = false;
          errors["groupname"] = "*Please enter alphabet characters only.";
        }
      }
      if(formIsvalid){
        errors["groupname"]="";
      }



      if ((typeof fields["emailid"] !== "undefined")&&(fields["emailid"]!=="")) {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsvalid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }
      if(formIsvalid){
        errors["emailid"]="";
      }



      if (typeof fields["mobileno"] !== "undefined") {
        if ((!fields["mobileno"].match(/^[0-9]{10}$/))&&(fields["mobileno"]!=="")) {
          formIsvalid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }
      if (typeof fields["teamsize"] !== "undefined") {
        
        if (!fields["teamsize"].match(/^[4-9]{1}$/)) {
          formIsvalid = false;
          errors["teamsize"] = "*Team Size should be in between 4 to 9";

        }
       
      
      }
      if(formIsvalid){
        errors["teamsize"]="";
      }



      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsvalid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }
      if(formIsvalid){
        errors["name"]="";
      }
      let q = fields["teamsize"];
      let self = this;
      
      for (let i =1 ; i<=q ;i++){
        if (typeof members[i] !== "undefined") {
          if (!members[i].match(/^[a-zA-Z ]*$/)) {
            formIsvalid = false;
            errors[i] = "*Please enter alphabet characters only.";

          }
        }
        if(formIsvalid){
          errors[i]="";
        } 
        
      }
     
      console.log(errors);
      console.log(self.state.errors);
      
    /*  self.setState({
        errors:errors
        
      });*/
      
        
       
      
      
      console.log(formIsvalid);
      self.setState({
        formIsvalid:formIsvalid
      });
      console.log(self.setState.formIsvalid);

    }
    render(){
      console.log(this.state.errors);
        return(
            <div id='form-div'>
            <form method ='POST' className="login-form" onSubmit= {this.submituserRegistrationForm} >
                <h1>Registration Form</h1>
                <div className= 'txtb'>
                    <input name ='groupname' type='name' label ='name' placeholder = 'Group Name'
                     value={this.state.fields.groupname} onChange={this.handleChange} />
                    
                    
                </div>
                <div className="errorMsg">{this.state.errors.groupname}</div>
                <div className ='txtb'> 
                    <input name ='city' type='name' label ='name' placeholder='city'
                    className="feedback-input" value={this.state.fields.city} onChange={this.handleChange}></input>
                </div>
                <div className ='txtb'>
                    <input name ='teamsize' type='text' label ='teamsize' placeholder='Team Size'
                    className="feedback-input" value={this.state.fields.teamsize} onChange={this.handleChange}  ></input>
                    <div className="errorMsg">{this.state.errors.teamsize}</div>
                    </div>
                    <div >{this.state.key}</div>
                  
        
                          
        
        
                    
                    
               
            
            <h2>Group Representative information:</h2>

            <div className ='txtb'> 
                <input name ='name' type='text' label ='name' placeholder='name'
                    className="feedback-input" value={this.state.fields.name} onChange={this.handleChange}></input>
                     <div className="errorMsg">{this.state.errors.name}</div>
            </div>
            <div className ='txtb'>
                    <input name ='mobileno' type='name' label ='name' placeholder='Contact Number'
                    className=" feedback-input"  value={this.state.fields.mobileno} onChange={this.handleChange}></input>
                    <div className="errorMsg">{this.state.errors.mobileno}</div>
            </div>
            <div className ='txtb'>
                <input name ='emailid' type='email' label ='name' placeholder='Email'
                  value={this.state.fields.emailid} onChange={this.handleChange}  >
                </input>
                <div className="errorMsg">{this.state.errors.emailid}</div>

            </div><br/><br/>
              <input type = "submit" className="logbtn" label="submit" onClick={this.submituserRegistrationForm}/>
            </form>
    </div>
        )
    }
}
    
export default RegisterForm;