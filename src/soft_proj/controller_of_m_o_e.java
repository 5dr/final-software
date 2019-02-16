/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import com.jfoenix.controls.JFXTextField;
import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;

/**
 *
 * @author asd
 */
public class controller_of_m_o_e {
    
    
     @FXML
    private JFXTextField add_fname;

    @FXML
    private JFXTextField add_lname;

    @FXML
    private JFXTextField add_d_o_b;

    @FXML
    private JFXTextField add_phone;

    @FXML
    private JFXTextField add_gender;

    @FXML
    private JFXTextField add_MS;

    @FXML
    private JFXTextField add_adress;

    @FXML
    private JFXTextField add_email;

    @FXML
    private JFXTextField add_grade;
    
    
       controller_of_login log =new controller_of_login();
    
      public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       } 
      
      
       public void add_student(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
//            statement.executeUpdate("insert into student values(null,'"+add_fname.getText()
//             +"','"+add_lname.getText()+"','"+add_d_o_b.getText()
//             +"','"+add_.getText()+"','"+add_adress.getText()+"','"+add_gender.getText()
//             +"','"+add_MS.getText()+"','"+add_phone.getText()+"','"+Double.parseDouble(add_salary.getText())
//             +"','"+add_user.getText()+"','"+add_pass.getText()+"');");
//            add_id.setText(String.valueOf(++n));
            
            
             statement.executeUpdate("INSERT INTO `student` ("
              + " `FName`, `LName`, `Date_of_birth`, `grade`,"
              + " `Phone`, `gender`, `address`, `Email`, `stutas`"
              + " ) VALUES ('"+add_fname.getText()+"', '"+add_lname.getText()
              +"', '"+add_d_o_b.getText()+"', '"+add_grade.getText()
              +"', '"+add_phone.getText()+"', '"+add_gender.getText()
              +"', '"+add_adress.getText()+"', '"+add_email.getText()
              +"', '"+add_MS.getText()+"');");
            
             controller_mangment c=new controller_mangment();
             c.student=1;
             
         //   ResultSet r = statement.executeQuery("SELECT * FROM doctor");
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
      
    
}
