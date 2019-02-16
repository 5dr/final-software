/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import com.jfoenix.controls.JFXTextArea;
import com.jfoenix.controls.JFXTextField;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;

/**
 *
 * @author asd
 */
public class controller_of_m_o_h {
    
    
    @FXML
    private JFXTextField id;

    @FXML
    private JFXTextField name;

    @FXML
    private JFXTextArea description;
    
    public static String s_id,s_name,s_description;
    
     controller_of_login log =new controller_of_login();
    
      public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       } 
      
       public void send (ActionEvent e) throws Exception{
       
           s_id=id.getText();
           s_name=name.getText();
           s_description=description.getText();
           id.setText("");
           name.setText("");
           description.setText("");
           new controller_mangment().send=1;
       } 
}
