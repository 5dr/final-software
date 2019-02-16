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
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.Pane;
import javax.swing.JOptionPane;

/**
 *
 * @author asd
 */
public class controller_manger_student_detail implements Initializable {
      @FXML
    private TableView<controller_manger_student_detail_table> table;
       @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_id;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_fn;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_ln;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_dob;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_grade;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_pay;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_study;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_phone;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_gender;

       @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_address;
    
    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_email;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_stutas;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_user;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_pass;

    @FXML
    private TableColumn<controller_manger_student_detail_table, String> t_doctor;

        ObservableList<controller_manger_student_detail_table> ob = FXCollections.observableArrayList();

    
    @FXML
    private Pane p_update,p_search,p_delet;
    
     @FXML
    private JFXTextField d_id,d_fn,d_ln,d_dob,d_pay,d_grade,d_address,d_phone,d_email
            ,d_gender,d_study,d_status,d_doctor,d_user,d_pass,s_id,s_fn ,s_ln,s_dob
            ,s_pay ,s_grade ,s_address,s_phone,s_email,s_gender,s_study,s_status
             ,s_doctor,s_user,s_pass,u_id,u_fn,u_ln,u_dob,u_pay,u_grad,u_gender,u_address
             ,u_phone,u_email,u_study,u_status,u_doctor,u_user,u_pass;
    

        controller_manger_doctor_detail log =new controller_manger_doctor_detail();
    
     public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       } 
     public void home (ActionEvent e) throws Exception{
       
           log.home(e);
     
       } 
     
    public void search(ActionEvent e) {

        p_search.setVisible(true);
        p_delet.setVisible(false);
        p_update.setVisible(false);
        table.setVisible(false);
    }

    public void update(ActionEvent e) {

        p_update.setVisible(true);
        p_delet.setVisible(false);
        p_search.setVisible(false);
        table.setVisible(false);
    }

    public void delet(ActionEvent e) {

        p_delet.setVisible(true);
        p_search.setVisible(false);
        p_update.setVisible(false);
        table.setVisible(false);
    }
    public void table(ActionEvent e) {

        p_delet.setVisible(false);
        p_search.setVisible(false);
        p_update.setVisible(false);
        table.setVisible(true);
    }
 
    
        public void update_student(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
            statement.executeLargeUpdate("UPDATE `student` SET `FName`='"+u_fn.getText()
             +"',`LName`='"+u_ln.getText()+"',`Date_of_birth`='"+u_dob.getText()
             +"',`grade`='"+u_grad.getText()+"',`payment`='"+u_pay.getText()
             +"',`Studyhours`='"+u_study.getText()+"',`Phone`='"+u_phone.getText()
             +"',`gender`='"+u_gender.getText()+"',`address`='"+u_address.getText()
             +"',`Email`='"+u_email.getText()+"',`stutas`='"+u_status.getText()
             +"',`user_name`='"+u_user.getText()+"',`password`='"+u_pass.getText()
             +"',`doctor_id`='"+u_doctor.getText()+"' WHERE id="+Double.parseDouble(u_id.getText()));
            
          
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
         public void search_for_update(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
           ResultSet i = statement.executeQuery("SELECT `FName`"
                   + ", `LName`, `Date_of_birth`, `grade`, `payment`"
                   + ", `Studyhours`, `Phone`, `gender`, `address`, "
                   + "`Email`, `stutas`, `user_name`, `password`, "
                   + "`doctor_id` FROM `student` WHERE id="+Double.parseDouble(u_id.getText()));
//         
         if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
         else{
           i.previous();
            while (i.next()){
        u_fn.setText(i.getString("FName"));u_ln.setText(i.getString("LName"));
        u_grad.setText(i.getString("grade"));u_pay.setText(i.getString("payment"));
        u_dob.setText(i.getString("Date_of_birth"));u_email.setText(i.getString("Email"));
        u_address.setText(i.getString("address"));u_gender.setText(i.getString("gender"));
        u_status.setText(i.getString("stutas"));u_phone.setText(i.getString("Phone"));
        u_study.setText(String.valueOf(i.getInt("Studyhours")));u_doctor.setText(String.valueOf(i.getInt("doctor_id")));
        u_user.setText(i.getString("user_name"));u_pass.setText(i.getString("password"));
          }}
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
         
           public void delete_student(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
                ResultSet i = statement.executeQuery("SELECT `FName`"
                   + ", `LName`, `Date_of_birth`, `grade`, `payment`"
                   + ", `Studyhours`, `Phone`, `gender`, `address`, "
                   + "`Email`, `stutas`, `user_name`, `password`, "
                   + "`doctor_id` FROM `student` WHERE id="+Double.parseDouble(d_id.getText()));
//         
         if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
         else{
           i.previous();
            while (i.next()){
        d_fn.setText(i.getString("FName"));d_ln.setText(i.getString("LName"));
        d_grade.setText(i.getString("grade"));d_pay.setText(i.getString("payment"));
        d_dob.setText(i.getString("Date_of_birth"));d_email.setText(i.getString("Email"));
        d_address.setText(i.getString("address"));d_gender.setText(i.getString("gender"));
        d_status.setText(i.getString("stutas"));d_phone.setText(i.getString("Phone"));
        d_study.setText(String.valueOf(i.getInt("Studyhours")));d_doctor.setText(String.valueOf(i.getInt("doctor_id")));
        d_user.setText(i.getString("user_name"));d_pass.setText(i.getString("password"));
          }}
            
          
          
     statement.executeUpdate("DELETE FROM `student` WHERE id="+Double.parseDouble(d_id.getText()));
          
            connection.close();
        } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
           
             
           public void search_student(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
                ResultSet i = statement.executeQuery("SELECT `FName`"
                   + ", `LName`, `Date_of_birth`, `grade`, `payment`"
                   + ", `Studyhours`, `Phone`, `gender`, `address`, "
                   + "`Email`, `stutas`, `user_name`, `password`, "
                   + "`doctor_id` FROM `student` WHERE id="+Double.parseDouble(s_id.getText()));
//         
         if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
         else{
           i.previous();
            while (i.next()){
        s_fn.setText(i.getString("FName"));s_ln.setText(i.getString("LName"));
        s_grade.setText(i.getString("grade"));s_pay.setText(i.getString("payment"));
        s_dob.setText(i.getString("Date_of_birth"));s_email.setText(i.getString("Email"));
        s_address.setText(i.getString("address"));s_gender.setText(i.getString("gender"));
        s_status.setText(i.getString("stutas"));s_phone.setText(i.getString("Phone"));
        s_study.setText(String.valueOf(i.getInt("Studyhours")));s_doctor.setText(String.valueOf(i.getInt("doctor_id")));
        s_user.setText(i.getString("user_name"));s_pass.setText(i.getString("password"));
          }}
            
                    
            connection.close();
        } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}

    @Override
    public void initialize(URL location, ResourceBundle resources) {

        try {

        Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
           
            
         Statement statement=connection.createStatement();
       
         ResultSet r = statement.executeQuery("SELECT * FROM student");
         
              while (r.next()){
            
              ob.add(new controller_manger_student_detail_table (r.getString("id")
            , r.getString("FName"),r.getString("LName"),r.getString("Date_of_birth")
            ,r.getString("grade"),r.getString("payment"),r.getString("Studyhours")
            ,r.getString("Phone"),r.getString("gender"),r.getString("address")
            ,r.getString("Email") ,r.getString("stutas")
            ,r.getString("user_name"),r.getString("password"),r.getString("doctor_id")
             ));
              }
         
         
             connection.close();
         } catch (SQLException ex) {
           JOptionPane.showMessageDialog(null,ex);
       }
        t_id.setCellValueFactory(new PropertyValueFactory<>("id"));
        t_fn.setCellValueFactory(new PropertyValueFactory<>("fname"));
        t_ln.setCellValueFactory(new PropertyValueFactory<>("lname"));
        t_dob.setCellValueFactory(new PropertyValueFactory<>("dob"));
        t_grade.setCellValueFactory(new PropertyValueFactory<>("grade"));
        t_pay.setCellValueFactory(new PropertyValueFactory<>("payment"));
        t_study.setCellValueFactory(new PropertyValueFactory<>("student_hours"));
        t_phone.setCellValueFactory(new PropertyValueFactory<>("phone"));
        t_gender.setCellValueFactory(new PropertyValueFactory<>("gender"));
        t_address.setCellValueFactory(new PropertyValueFactory<>("address"));
        t_email.setCellValueFactory(new PropertyValueFactory<>("email"));
        t_stutas.setCellValueFactory(new PropertyValueFactory<>("ms"));
        t_user.setCellValueFactory(new PropertyValueFactory<>("user"));
        t_pass.setCellValueFactory(new PropertyValueFactory<>("pass"));
        t_doctor.setCellValueFactory(new PropertyValueFactory<>("doctor_id"));
 
      table.setItems(ob);


    }
         
}
    
    
    

