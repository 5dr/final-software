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
public class controller_manger_research_detail_table {
    
        String id,name, status,start,repeat,describe,doctor_id;

    public controller_manger_research_detail_table(String id, String name, String status, String start, String repeat, String describe, String doctor_id) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.start = start;
        this.repeat = repeat;
        this.describe = describe;
        this.doctor_id = doctor_id;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStatus() {
        return status;
    }

    public String getStart() {
        return start;
    }

    public String getRepeat() {
        return repeat;
    }

    public String getDescribe() {
        return describe;
    }

    public String getDoctor_id() {
        return doctor_id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public void setRepeat(String repeat) {
        this.repeat = repeat;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public void setDoctor_id(String doctor_id) {
        this.doctor_id = doctor_id;
    }

    
    
    
}
