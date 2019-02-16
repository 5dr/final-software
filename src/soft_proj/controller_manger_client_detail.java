/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import com.jfoenix.controls.JFXButton;
import com.jfoenix.controls.JFXTextArea;
import com.jfoenix.controls.JFXTextField;
import com.mysql.jdbc.Connection;
import java.net.URL;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ResourceBundle;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.geometry.Pos;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.Pane;
import javafx.util.Duration;
import javax.swing.JOptionPane;
import org.controlsfx.control.Notifications;

/**
 *
 * @author asd
 */
public class controller_manger_client_detail implements Initializable{
    
  static String s1,s2;
    
 @FXML
    private Pane p2 ,p_client,p_MOH, p_seach, p_delet,p_send,p_MOE;


 
    @FXML
    private JFXTextField s_id,s_fn,s_address,s_user,s_phone,s_pass,s_email,d_id
            ,d_fn,d_address,d_user,d_phone,d_pass,d_email,s_name,s_amount,send_id
            ,h_n;
    @FXML
    private JFXTextField h_id;

    @FXML
    private JFXTextField h_name;

    @FXML
    private JFXTextArea h_desc;
   
    public static int n=0;
    
    @FXML
    private JFXButton b_home;

    @FXML
    private JFXButton b_logout;
 
     @FXML
    private TableView<controller_manger_client_detail_table> table;
     
    @FXML
    private TableColumn<controller_manger_client_detail_table,String> t_id;

    @FXML
    private TableColumn<controller_manger_client_detail_table,String> t_name;

    @FXML
    private TableColumn<controller_manger_client_detail_table,String> t_address;

    @FXML
    private TableColumn<controller_manger_client_detail_table,String> t_email;

    @FXML
    private TableColumn<controller_manger_client_detail_table,String> t_user;

    @FXML
    private TableColumn<controller_manger_client_detail_table,String> t_pass;

    @FXML
    private TableColumn<controller_manger_client_detail_table,String> t_doctor;

   ObservableList<controller_manger_client_detail_table> ob = FXCollections.observableArrayList();

    
    @FXML
    private Label l;

         controller_manger_doctor_detail log =new controller_manger_doctor_detail();
    
     public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       } 
     public void home (ActionEvent e) throws Exception{
       
           log.home(e);
     
       } 
    
   public void client(ActionEvent e) {

        p_MOH.setVisible(false);
        p2.setVisible(false);
        l.setVisible(false);
        p_client.setVisible(true);
        p_MOE.setVisible(false);
    }
    public void MoH(ActionEvent e) {

        p_MOH.setVisible(true);
        p2.setVisible(false);
        l.setVisible(false);
        p_client.setVisible(false);
         p_MOE.setVisible(false);
          if(new controller_mangment().send==1){
         controller_of_m_o_h c=new controller_of_m_o_h();
          Notifications not =Notifications.create().
            title("monisitery of health send massege")
            .text("monisitery of health send order")
            .graphic(null).hideAfter(Duration.seconds(15)).position(Pos.TOP_LEFT)
            .onAction((event) -> {
            System.out.println("Done");
            }); not.showConfirm();
        h_id.setText(c.s_id);
        h_name.setText(c.s_name);
        h_desc.setText(c.s_description);
        
        }
    }
    
       public void send_to_client(ActionEvent e) {
           new controller_mangment().send=0;
           
           s_name.setText(h_name.getText());
           send_id.setText(h_id.getText());
           
           
           h_id.setText("");
           h_name.setText("");
           h_desc.setText("");
        p_MOH.setVisible(false);
        p2.setVisible(false);
        l.setVisible(false);
        p_client.setVisible(true);
        p_MOE.setVisible(false);    
    }
        public void send_to_cli(ActionEvent e){
         new controller_mangment().admin_to_client=1;
          s1=s_name.getText();
          s2=s_amount.getText();}
       

    
        public void MoE(ActionEvent e) {

        p_MOH.setVisible(false);
        p_MOE.setVisible(true);
        p2.setVisible(false);
        l.setVisible(false);
        p_client.setVisible(false);
    }

   
     public void search(ActionEvent e) {

      p_seach.setVisible(true);
      p_delet.setVisible(false);
      p_send.setVisible(false);
      table.setVisible(false);
       b_home.setVisible(true);
      b_logout.setVisible(true);
    }
     
    public void send(ActionEvent e) {

      p_seach.setVisible(false);
      p_delet.setVisible(false);
      p_send.setVisible(true);
      table.setVisible(false);
       b_home.setVisible(true);
      b_logout.setVisible(true);
    }
    public void delet(ActionEvent e) {

        p_seach.setVisible(false);
      p_delet.setVisible(true);
      p_send.setVisible(false);
      table.setVisible(false);
       b_home.setVisible(true);
      b_logout.setVisible(true);
    }
    
    public void table(ActionEvent e) {

      p_seach.setVisible(false);
      p_delet.setVisible(false);
      p_send.setVisible(false);
      table.setVisible(true);
      b_home.setVisible(false);
      b_logout.setVisible(false);
    }
     public void send_to_moh(ActionEvent e) {

      n=Integer.parseInt(h_n.getText());
//         System.out.println(n);
           controller_mangment c=new controller_mangment();
             c.num_student=1;
         
    }
    
    public void search_client(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
           ResultSet i = statement.executeQuery("SELECT Name,address,Email"
                   + ",Phone,"
                   + "user_name,"
                   + "password "
                   + "FROM client where client_id ="+Double.parseDouble(s_id.getText()));
           if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
           else{
               i.previous();
           while (i.next()){
        s_fn.setText(i.getString("Name"));s_address.setText(i.getString("address"));
        s_email.setText(i.getString("Email"));s_user.setText(i.getString("user_name"));
        s_pass.setText(i.getString("password"));s_phone.setText(i.getString("Phone"));
          }}
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
    
    public void delete_client(ActionEvent e){
    
        try {
           Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
           ResultSet i = statement.executeQuery("SELECT Name,address,Email"
                   + ",Phone,"
                   + "user_name,"
                   + "password "
                   + "FROM client where client_id ="+Double.parseDouble(d_id.getText()));
           if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
           else{
               i.previous();
           while (i.next()){
        d_fn.setText(i.getString("Name"));d_address.setText(i.getString("address"));
        d_email.setText(i.getString("Email"));d_user.setText(i.getString("user_name"));
        d_pass.setText(i.getString("password"));d_phone.setText(i.getString("Phone"));
          }
           }
          
          
   statement.executeUpdate("DELETE FROM `client` WHERE client_id="+Double.parseDouble(d_id.getText()));
          
            connection.close();
        } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}

    @Override
    public void initialize(URL location, ResourceBundle resources) {


        try {

        Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
           
            
         Statement statement=connection.createStatement();
       
         ResultSet r = statement.executeQuery("SELECT * FROM client");
         
              while (r.next()){
            
              ob.add(new controller_manger_client_detail_table (r.getString("client_id")
            , r.getString("Name"),r.getString("address"),r.getString("Email")
            ,r.getString("user_name"),r.getString("password"),r.getString("Phone")
             ));
              }
         
         
             connection.close();
         } catch (SQLException ex) {
           JOptionPane.showMessageDialog(null,ex);
       }
        t_id.setCellValueFactory(new PropertyValueFactory<>("id"));
        t_name.setCellValueFactory(new PropertyValueFactory<>("name"));
        t_address.setCellValueFactory(new PropertyValueFactory<>("address"));
        t_email.setCellValueFactory(new PropertyValueFactory<>("email"));
        t_user.setCellValueFactory(new PropertyValueFactory<>("user"));
        t_pass.setCellValueFactory(new PropertyValueFactory<>("pass"));
        t_doctor.setCellValueFactory(new PropertyValueFactory<>("doctor_id"));
 
      table.setItems(ob); 

      
      if(new controller_mangment().clien_to_admin_accept==1){
      
        Notifications not =Notifications.create().
            title("Client")
            .text("the client accept the order")
            .graphic(null).hideAfter(Duration.seconds(15)).position(Pos.TOP_LEFT)
            .onAction((event) -> {
            System.out.println("Done");
            });
  
          not.showConfirm();
      
      
      }
        if(new controller_mangment().clien_to_admin_refuse==1){
      
        Notifications not =Notifications.create().
            title("Client")
            .text("the client rufuse the order")
            .graphic(null).hideAfter(Duration.seconds(15)).position(Pos.TOP_LEFT)
            .onAction((event) -> {
            System.out.println("Done");
            });
  
          not.showConfirm();
      
      
      }
      
    }



}
