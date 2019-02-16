/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.geometry.Pos;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.TableView;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Stop;
import javafx.stage.Stage;
import javafx.util.Duration;
import org.controlsfx.control.Notifications;

/**
 *
 * @author asd
 */
public class controller_of_manger  implements Initializable{
    

    
    controller_of_login log =new controller_of_login();
    
      public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       } 
       public void doctor (ActionEvent e) throws Exception{
       Parent root = FXMLLoader.load(getClass().getResource("_admain_doctor_detail.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
     
       } 
       
     public void client (ActionEvent e) throws Exception{
       
           
       Parent root = FXMLLoader.load(getClass().getResource("_admain_client_detail.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
     
       } 
     
     int i=1;   
     public void research (ActionEvent e) throws Exception{
       
           
       Parent root = FXMLLoader.load(getClass().getResource("_admain_research_detail.fxml"));
//       root.setOnMouseClicked((event) -> {
//          
//           if(i>0)
//           System.out.println("tata"); 
//           
//           i--;
//       });
//       root.setOnMouseEntered((event) -> {
//      System.out.println("tata");
//       });
       
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
     
       } 
 
       public void student(ActionEvent e) throws Exception{
       
           
       Parent root = FXMLLoader.load(getClass().getResource("_admain_student_detail.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
       
          if(new controller_mangment().student==1){
       
    Notifications not =Notifications.create().
            title("Monisitry of eduction")
            .text("Monisitry of eduction sent student in data base please go to see it")
            .graphic(null).hideAfter(Duration.seconds(15)).position(Pos.TOP_LEFT)
            .onAction((event) -> {
            System.out.println("Done");
            });
  
          not.showConfirm();
          }
     
       } 

    @Override
    public void initialize(URL location, ResourceBundle resources) {
controller_of_doctor c = new controller_of_doctor();
        
    if(new controller_mangment().doctor_to_admin==1){
    
     Notifications not =Notifications.create().
            title("doctor")
            .text("doctor send report :"+c.s1 )
            .graphic(null).hideAfter(Duration.minutes(2)).position(Pos.TOP_LEFT)
            .onAction((event) -> {
            System.out.println("Done");
            
            });
  
          not.showConfirm();
    new controller_mangment().doctor_to_admin=0;
    }

    }

}
