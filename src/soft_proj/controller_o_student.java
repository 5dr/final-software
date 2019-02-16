/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import com.jfoenix.controls.JFXTextField;
import com.mysql.jdbc.Connection;
import java.net.URL;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;

/**
 *
 * @author asd
 */
public class controller_o_student implements Initializable{
    
    
     @FXML
    private JFXTextField garde,course,doctor,dob,name;
    
     controller_of_login log =new controller_of_login();
    
      public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       }  

    @Override
    public void initialize(URL location, ResourceBundle resources) {


        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
                ResultSet i = statement.executeQuery("SELECT `FName`"
                   + ", `Date_of_birth`, `grade`,"
                   + "`doctor_id` FROM `student`  WHERE id=1");
              while (i.next()) {                
              name.setText(i.getString("FName")); 
              garde.setText(i.getString("grade")); 
              dob.setText(i.getString("Date_of_birth")); 
              doctor.setText(i.getString("doctor_id")); 
              course.setText("science"); 
            }
               
     } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }

    }
    
}
