/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import com.jfoenix.controls.JFXTextField;
import com.mysql.jdbc.Connection;
import java.net.URL;
import java.lang.String;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ResourceBundle;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;
import javax.swing.JOptionPane;

/**
 *
 * @author asd
 */
public class controller_manger_doctor_detail implements Initializable{
   
    int n =0;
    
    @FXML
    private Pane p_add, p_seach, p_update,p_delet;
         @FXML
   private TableView<controller_manger_doctor_detail_table_model> table;
    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model,String>id;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model,String> fname;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> lname;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model,String> dob;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> address;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> phone;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> gender;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> ms;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> email;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> salary;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> user;

    @FXML
    private TableColumn<controller_manger_doctor_detail_table_model, String> pass;

    ObservableList<controller_manger_doctor_detail_table_model> ob = FXCollections.observableArrayList();
         
    @FXML
    private JFXTextField add_id,add_fname,add_lname,add_d_o_b,add_phone,add_gender
            ,add_MS,add_adress,add_email, add_salary,add_user,add_pass,s_id, s_fn
           ,s_ln,s_dof,s_phone ,s_gender,s_ms,s_address,s_email, s_salary,s_user
           ,s_pass,u_id,u_fn,u_ln,u_phone,u_gender,u_ms,u_address, u_email,u_salary
            ,u_user, u_pass,d_id,d_fn,d_ln,d_dob,d_phone,d_gender, d_ms,d_address,
             d_email,d_salary,d_user,d_pass,u_dob;
         
         controller_of_login log =new controller_of_login();
    
     public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       } 
     public void home (ActionEvent e) throws Exception{
       
           
       Parent root = FXMLLoader.load(getClass().getResource("_admain.fxml"));
       Scene scene = new Scene(root);
       Stage s = (Stage) ((Node) e.getSource()).getScene().getWindow();
       s.setScene(scene);
       s.show();
     
       } 

      public void add(ActionEvent e) {

        p_add.setVisible(true);
        p_delet.setVisible(false);
        p_seach.setVisible(false);
        p_update.setVisible(false);
        table.setVisible(false);
    }

    public void search(ActionEvent e) {

        p_seach.setVisible(true);
        p_add.setVisible(false);
        p_delet.setVisible(false);
        p_update.setVisible(false);
        table.setVisible(false);
    }

    public void update(ActionEvent e) {

        p_update.setVisible(true);
        p_add.setVisible(false);
        p_delet.setVisible(false);
        p_seach.setVisible(false);
        table.setVisible(false);
    }

    public void delet(ActionEvent e) {

        p_delet.setVisible(true);
        p_add.setVisible(false);
        p_seach.setVisible(false);
        p_update.setVisible(false);
        table.setVisible(false);
    }
    public void table(ActionEvent e) {

        p_add.setVisible(false);
        p_delet.setVisible(false);
        p_seach.setVisible(false);
        p_update.setVisible(false);
        table.setVisible(true);
    }
    
    
    
    public void add_doctor(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
            statement.executeUpdate("insert into doctor values(null,'"+add_fname.getText()
             +"','"+add_lname.getText()+"','"+add_d_o_b.getText()
             +"','"+add_email.getText()+"','"+add_adress.getText()+"','"+add_gender.getText()
             +"','"+add_MS.getText()+"','"+add_phone.getText()+"','"+Double.parseDouble(add_salary.getText())
             +"','"+add_user.getText()+"','"+add_pass.getText()+"');");
            add_id.setText(String.valueOf(++n));
            
            for ( int i = 0; i<table.getItems().size(); i++) {
               table.getItems().clear();
              }
            
             ResultSet r = statement.executeQuery("SELECT * FROM doctor");
         
              while (r.next()){
            
              ob.add(new controller_manger_doctor_detail_table_model (r.getString("doctor_id")
            , r.getString("FName"),r.getString("LName"),r.getString("Date_of_birth")
            ,r.getString("Email"),r.getString("address"),r.getString("gender")
            ,r.getString("marital_status"),r.getString("Phone"),r.getString("salary")
            ,r.getString("user_name"),r.getString("password")
             ));
              }
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
       
    public void delete_doctor(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
            ResultSet i = statement.executeQuery("SELECT FName,LName,Date_of_birth"
            + ",Email,address ,gender,marital_status,Phone,salary,"
            + "user_name,password FROM doctor where doctor_id ="+Double.parseDouble(d_id.getText()));
          while (i.next()){
        d_fn.setText(i.getString("FName"));d_ln.setText(i.getString("LName"));
        d_dob.setText(i.getString("Date_of_birth"));d_email.setText(i.getString("Email"));
        d_address.setText(i.getString("address"));d_gender.setText(i.getString("gender"));
        d_ms.setText(i.getString("marital_status"));d_phone.setText(i.getString("Phone"));
        d_salary.setText(String.valueOf(i.getInt("salary")));
        d_user.setText(i.getString("user_name"));d_pass.setText(i.getString("password"));
          }
            
          
          
   statement.executeUpdate("DELETE FROM `doctor` WHERE doctor_id="+Double.parseDouble(d_id.getText()));
          
            connection.close();
        } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
    
         public void search_for_update(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
           ResultSet i = statement.executeQuery("SELECT FName,LName,Date_of_birth"
                   + ",Email,address ,gender,marital_status,Phone,salary,"
                   + "user_name,password FROM doctor where doctor_id ="+Double.parseDouble(u_id.getText()));
          while (i.next()){
        u_fn.setText(i.getString("FName"));u_ln.setText(i.getString("LName"));
        u_dob.setText(i.getString("Date_of_birth"));u_email.setText(i.getString("Email"));
        u_address.setText(i.getString("address"));u_gender.setText(i.getString("gender"));
        u_ms.setText(i.getString("marital_status"));u_phone.setText(i.getString("Phone"));
        u_salary.setText(String.valueOf(i.getInt("salary")));
        u_user.setText(i.getString("user_name"));u_pass.setText(i.getString("password"));
          }
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
    
          
       public void update_doctor(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
            statement.executeUpdate("UPDATE doctor SET FName='"+u_fn.getText()
            +"',LName='"+u_ln.getText()+"',Date_of_birth='"+u_dob.getText()
            +"',Email='"+u_email.getText()+"',address='"+u_address.getText()
            +"',gender='"+u_gender.getText()+"',marital_status='"+u_ms.getText()
            +"',Phone='"+u_phone.getText()+"',salary='"+Double.parseDouble(u_salary.getText())
            +"',user_name='"+u_user.getText()+"',password='"+u_pass.getText()
            +"' WHERE doctor_id="+Double.parseDouble(u_id.getText()));
          
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
    
        public void search_doctor(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
           ResultSet i = statement.executeQuery("SELECT FName,LName,Date_of_birth"
                   + ",Email,address ,gender,marital_status,Phone,salary,"
                   + "user_name,password FROM doctor where doctor_id ="+Double.parseDouble(s_id.getText()));
           if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
           else{
               i.previous();
           while (i.next()){
        s_fn.setText(i.getString("FName"));s_ln.setText(i.getString("LName"));
        s_dof.setText(i.getString("Date_of_birth"));s_email.setText(i.getString("Email"));
        s_address.setText(i.getString("address"));s_gender.setText(i.getString("gender"));
        s_ms.setText(i.getString("marital_status"));s_phone.setText(i.getString("Phone"));
        s_salary.setText(String.valueOf(i.getInt("salary")));
        s_user.setText(i.getString("user_name"));s_pass.setText(i.getString("password"));
          }}
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
     
        
        
//    public void veiw(ActionEvent e){
//    
//        try {
//            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
//            Statement statement=connection.createStatement();
//           ResultSet i = statement.executeQuery("SELECT FName,LName,Date_of_birth"
//                   + ",Email,address ,gender,marital_status,Phone,salary,"
//                   + "user_name,password FROM doctor where doctor_id ="+Double.parseDouble(s_id.getText()));
//          while (i.next()){
//        s_fn.setText(i.getString("FName"));s_ln.setText(i.getString("LName"));
//        s_dof.setText(i.getString("Date_of_birth"));s_email.setText(i.getString("Email"));
//        s_address.setText(i.getString("address"));s_gender.setText(i.getString("gender"));
//        s_ms.setText(i.getString("marital_status"));s_phone.setText(i.getString("Phone"));
//        s_salary.setText(String.valueOf(i.getInt("salary")));
//        s_user.setText(i.getString("user_name"));s_pass.setText(i.getString("password"));
//          }
//         
//        
//          
//            connection.close();
//         } catch (SQLException ex) {
//           System.out.println(ex.getMessage());
//       }}
        
        
    @Override
    public void initialize(URL location, ResourceBundle resources) {
        
 try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
           
            
         Statement statement=connection.createStatement();
         ResultSet i = statement.executeQuery("SELECT MAX(doctor_id) FROM doctor");
         while (i.next()){
             add_id.setText(String.valueOf(i.getInt("MAX(doctor_id)")+1));
             n=i.getInt("MAX(doctor_id)")+1;}
         
         ResultSet r = statement.executeQuery("SELECT * FROM doctor");
         
              while (r.next()){
            
              ob.add(new controller_manger_doctor_detail_table_model (r.getString("doctor_id")
            , r.getString("FName"),r.getString("LName"),r.getString("Date_of_birth")
            ,r.getString("Email"),r.getString("address"),r.getString("gender")
            ,r.getString("marital_status"),r.getString("Phone"),r.getString("salary")
            ,r.getString("user_name"),r.getString("password")
             ));
              }
         
            connection.close();
         } catch (SQLException ex) {
           JOptionPane.showMessageDialog(null,ex);
       }
 
 
        id.setCellValueFactory(new PropertyValueFactory<>("id"));
        fname.setCellValueFactory(new PropertyValueFactory<>("fname"));
        lname.setCellValueFactory(new PropertyValueFactory<>("lname"));
        dob.setCellValueFactory(new PropertyValueFactory<>("dob"));
        address.setCellValueFactory(new PropertyValueFactory<>("email"));
        phone.setCellValueFactory(new PropertyValueFactory<>("address"));
        gender.setCellValueFactory(new PropertyValueFactory<>("gender"));
        ms.setCellValueFactory(new PropertyValueFactory<>("ms"));
        email.setCellValueFactory(new PropertyValueFactory<>("phone"));
        salary.setCellValueFactory(new PropertyValueFactory<>("salary"));
        user.setCellValueFactory(new PropertyValueFactory<>("user"));
        pass.setCellValueFactory(new PropertyValueFactory<>("pass"));
 
 table.setItems(ob);
        }
}
