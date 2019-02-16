/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import com.jfoenix.controls.JFXTextField;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.geometry.Pos;
import javafx.util.Duration;
import org.controlsfx.control.Notifications;

/**
 *
 * @author asd
 */
public class controller_of_client implements Initializable {
   controller_of_login log =new controller_of_login();
      @FXML
    private JFXTextField res_name;

    @FXML
    private JFXTextField rec_amount; 
   
   
      public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       }  
      
      public void accept (ActionEvent e) throws Exception{
       
           new controller_mangment().clien_to_admin_accept=1;
           rec_amount.setText("");
           res_name.setText("");
     
       } 
      public void refuse (ActionEvent e) throws Exception{
       
           new controller_mangment().clien_to_admin_refuse=1;
           rec_amount.setText("");
           res_name.setText("");
     
       } 

    @Override
    public void initialize(URL location, ResourceBundle resources) {

     if(new controller_mangment().admin_to_client==1){
     
            Notifications not =Notifications.create().
            title("System sent order")
            .text("the order is show please quick response")
            .graphic(null).hideAfter(Duration.seconds(15)).position(Pos.TOP_LEFT)
            .onAction((event) -> {
            System.out.println("Done");
            });
  
          not.showConfirm();
         
     controller_manger_client_detail c=new controller_manger_client_detail();
     
     rec_amount.setText(c.s2);
     res_name.setText(c.s1);
     new controller_mangment().admin_to_client=0;
     }


    }
      
      
}
