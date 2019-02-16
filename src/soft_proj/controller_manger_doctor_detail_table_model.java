/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

/**
 *
 * @author asd
 */
public class controller_manger_doctor_detail_table_model {
    
    String id,fname, lname,dob,email,address,gender,ms,phone,salary,user,pass;

    public controller_manger_doctor_detail_table_model
     (String id, String fname, String lname, String dob,
     String email, String address, String gender, String ms
      , String phone, String salary, String user, String pass) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.email = email;
        this.address = address;
        this.gender = gender;
        this.ms = ms;
        this.phone = phone;
        this.salary = salary;
        this.user = user;
        this.pass = pass;
    }

    controller_manger_doctor_detail_table_model(String string, String string0, String string1) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }


    public String getId() {
        return id;
    }

    public String getFname() {
        return fname;
    }
         
    public String getLname() {
        return lname;
    }

       public String getDob() {
        return dob;
    }

    public String getEmail() {
        return email;
    } 
    
    
    public String getAddress() {
        return address;
    }

 

    public String getGender() {
        return gender;
    }


    public String getMs() {
        return ms;
    }

    public String getPhone() {
        return phone;
    }

    public String getSalary() {
        return salary;
    }

    public String getUser() {
        return user;
    }
    
    public String getPass() {
        return pass;
    }

 
    
      public void setId(String id) {
        this.id = id;
    }

     public void setFname(String fname) {
        this.fname = fname;
    }
      
    public void setLname(String lname) {
        this.lname = lname;
    }
    
      public void setDob(String dob) {
        this.dob = dob;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAddress(String address) {
        this.address = address;
    }

  

   

    public void setGender(String gender) {
        this.gender = gender;
    }


    public void setMs(String ms) {
        this.ms = ms;
    }

       public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public void setUser(String user) {
        this.user = user;
    }
    
    public void setPass(String pass) {
        this.pass = pass;
    }

 
    
        
    
      
    
}
