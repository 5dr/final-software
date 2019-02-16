/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import com.jfoenix.controls.*;
import com.mysql.jdbc.Connection;
import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ResourceBundle;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.geometry.Pos;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import javafx.util.Duration;
import javax.swing.JOptionPane;
import org.controlsfx.control.Notifications;

/**
 *
 * @author asd
 */
public class controller_of_login implements Initializable {
    
      @FXML
    private Hyperlink fb;

    @FXML
    private Hyperlink twitter;
  @FXML
    private Hyperlink inst;

    @FXML
    private Hyperlink you;
    
     @FXML
    private Hyperlink dis;
    
    @FXML
    private Pane p2;

    @FXML
    private Pane p1;

    @FXML
    private TextField user;

    @FXML
    private PasswordField pass;

    @FXML
    private JFXToggleButton toggel;

    @FXML
    private Label l1;

    @FXML
    private Label l2;
    
    
    
     public void internal (ActionEvent e) throws Exception{
      
      l1.setText("Manger");
      l2.setText("Doctor");
        p2.setVisible(false);
        p1.setVisible(true);
        
       
    } 
      public void external (ActionEvent e) throws Exception{
       
      l1.setText("M_o_E");
      l2.setText("M_O_H");
         
        p1.setVisible(true);
        p2.setVisible(false);
    } 
         public void other (ActionEvent e) throws Exception{
       
      l1.setText("Client");
      l2.setText("Student");
         
        p1.setVisible(true);
        p2.setVisible(false);
    } 
     public void back (ActionEvent e) throws Exception{
 
         
        p1.setVisible(false);
        p2.setVisible(true);
    } 
     public void log (ActionEvent e) throws Exception{
    if(l1.getText()=="Manger"){
      if(toggel.isSelected()==true){
     
        Parent root = FXMLLoader.load(getClass().getResource("_doctor.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
       }
     else{
     
       Parent root = FXMLLoader.load(getClass().getResource("_admain.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
     }}else if(l1.getText()=="M_o_E"){
         
         if(toggel.isSelected()==true){
            Parent root = FXMLLoader.load(getClass().getResource("_m_o_h.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
       }
     else{
         Parent root = FXMLLoader.load(getClass().getResource("_m_o_e.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
            if(new controller_mangment().num_student==1){
            controller_manger_client_detail c1=new controller_manger_client_detail();
            Notifications not =Notifications.create().
            title("System sent number of student")
            .text("number of student ="+c1.n)
            .graphic(null).hideAfter(Duration.seconds(15)).position(Pos.TOP_LEFT)
            .onAction((event) -> {
            System.out.println("Done");
            });
  
          not.showConfirm();
          }
                
                
  
     }}
      else if(l1.getText()=="Client"){
         
         if(toggel.isSelected()==true){
//             
//             try {
//            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
//            Statement statement=connection.createStatement();
//           ResultSet i = statement.executeQuery("SELECT id, user_name,password "
//                   + "FROM student ");
//           if(!i.next()){
//         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
//        
//         }
//           else{
//               i.previous();
//           while (i.next()){
//         String st=i.getString("user_name");
//         String str=user.getText();
//      if(i.getString("user_name")==st){
//      
//       Parent root = FXMLLoader.load(getClass().getResource("_student.fxml"));
//       Scene scene = new Scene(root);
//       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
//       s.setScene(scene);
//       s.show();
//      }else
//                   System.out.println(i.getString("user_name"));
//                   System.out.println(user.getText());
//          
//           }}
//            connection.close();
//         } catch (SQLException ex) {
//           System.out.println(ex.getMessage());
//       }
//             
     Parent root = FXMLLoader.load(getClass().getResource("_student.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
       }
     else{
         Parent root = FXMLLoader.load(getClass().getResource("_client.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
  
     }
     
     }
         
       
    }
       public void exit (ActionEvent e) throws Exception{
       
           
       Parent root = FXMLLoader.load(getClass().getResource("_main.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();} 
       
       public void com (ActionEvent e) throws Exception{
 
            Desktop d =Desktop.getDesktop();
         try {
             d.browse(new URI("https://docs.google.com/forms/d/e/1FAIpQLSfSFODoYVtUHlZfvP9d-k6_ULWnEdBh8O2Os9cr_EL1GwJFbA/viewform"));
         } catch (URISyntaxException ex) {System.out.println(ex);
         } catch (IOException ex) {System.out.println(ex);}
     
    } 
       

    @Override
    public void initialize(URL location, ResourceBundle resources) {

     fb.setOnAction((event) ->
     {
          Desktop d =Desktop.getDesktop();
         try {
             d.browse(new URI("https://www.facebook.com/"));
         } catch (URISyntaxException ex) {System.out.println(ex);
         } catch (IOException ex) {System.out.println(ex);}
});
     inst.setOnAction((event) -> {
            Desktop d =Desktop.getDesktop();
         try {
             d.browse(new URI("https://www.instagram.com/?hl=en#reactivated"));
         } catch (URISyntaxException ex) {System.out.println(ex);
         } catch (IOException ex) {System.out.println(ex);}
     });
      you.setOnAction((event) -> {
            Desktop d =Desktop.getDesktop();
         try {
             d.browse(new URI("https://www.youtube.com/?gl=EG"));
         } catch (URISyntaxException ex) {System.out.println(ex);
         } catch (IOException ex) {System.out.println(ex);}
     });
       twitter.setOnAction((event) -> {
            Desktop d =Desktop.getDesktop();
         try {
             d.browse(new URI("https://twitter.com/"));
         } catch (URISyntaxException ex) {System.out.println(ex);
         } catch (IOException ex) {System.out.println(ex);}
     });
        dis.setOnAction((event) -> {
            Desktop d =Desktop.getDesktop();
         try {
             d.browse(new URI("file:///C:/Users/asd/Desktop/صفحات/New%20folder/Doctor%20Repot.html"));
         } catch (URISyntaxException ex) {System.out.println(ex);
         } catch (IOException ex) {System.out.println(ex);}
     });
      }
     
    
     
    
}
