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
public class controller_of_doctor_table {
    
    
    String id,name,descibe;

    public controller_of_doctor_table(String id, String name, String descibe) {
        this.id = id;
        this.name = name;
        this.descibe = descibe;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescibe() {
        return descibe;
    }

    public void setDescibe(String descibe) {
        this.descibe = descibe;
    }
   
    
    
    
    
}
