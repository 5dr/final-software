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
public class controller_manger_student_detail_table {
    
    String id,fname, lname,dob,grade,payment,student_hours,
            phone,gender,address,email,ms,user,pass,doctor_id;

    public controller_manger_student_detail_table(String id, String fname, String lname, String dob, String grade, String payment, String student_hours, String phone, String gender, String address, String email, String ms, String user, String pass, String doctor_id) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.grade = grade;
        this.payment = payment;
        this.student_hours = student_hours;
        this.phone = phone;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.ms = ms;
        this.user = user;
        this.pass = pass;
        this.doctor_id = doctor_id;
    }

    controller_manger_student_detail_table(String string, String string0, String string1, String string2, String string3, String string4, String string5, String string6, String string7, String string8, String string9, String string10) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
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

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    public void setStudent_hours(String student_hours) {
        this.student_hours = student_hours;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    
    
    public void setEmail(String email) {
        this.email = email;
    }

    public void setMs(String ms) {
        this.ms = ms;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public void setDoctor_id(String doctor_id) {
        this.doctor_id = doctor_id;
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

    public String getGrade() {
        return grade;
    }

    public String getPayment() {
        return payment;
    }

    public String getStudent_hours() {
        return student_hours;
    }

    public String getPhone() {
        return phone;
    }

    public String getGender() {
        return gender;
    }

    public String getAddress() {
        return address;
    }

    public String getEmail() {
        return email;
    }

    public String getMs() {
        return ms;
    }

    public String getUser() {
        return user;
    }

    public String getPass() {
        return pass;
    }

    public String getDoctor_id() {
        return doctor_id;
    }
 
    
    
    
    
    
    
    
    
    
}
