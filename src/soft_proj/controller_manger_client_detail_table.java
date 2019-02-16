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
public class controller_manger_client_detail_table {
 
    
    
   String id,name,address,email,user,pass,phone;

    public controller_manger_client_detail_table(String id, String name, String address, String email, String user, String pass, String phone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.user = user;
        this.pass = pass;
        this.phone = phone;
    }

    controller_manger_client_detail_table(String string, String string0, String string1, String string2, String string3, String string4, String string5, String string6, String string7, String string8, String string9, String string10, String string11, String string12, String string13) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public void setDoctor_id(String phone) {
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getEmail() {
        return email;
    }

    public String getPass() {
        return pass;
    }

    public String getUser() {
        return user;
    }

    public String getDoctor_id() {
        return phone;
    }

    
    
    
}
