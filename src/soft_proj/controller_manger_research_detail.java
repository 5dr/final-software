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
public class controller_manger_research_detail implements Initializable{
    
    int n=0;
    
        @FXML
    private TableView<controller_manger_research_detail_table> table;

    @FXML
    private Pane p_add,p_seach, p_delet,p_update;
    
     @FXML
    private JFXTextField add_id,add_name,add_start,add_d_o_b,add_doctor,s_id
             ,s_name,s_start,s_describe,s_status,s_doctor,s_repeate,u_id,u_name
             ,u_start,u_discribe,u_status,u_dooctor_id,u_repete,d_id,d_name
             ,d_start,d_describe,d_status,d_doctor,d_repeat;


    @FXML
    private TableColumn<controller_manger_research_detail_table, String> t_id;

    @FXML
    private TableColumn<controller_manger_research_detail_table, String> t_name;

    @FXML
    private TableColumn< controller_manger_research_detail_table, String> t_status;

    @FXML
    private TableColumn< controller_manger_research_detail_table, String> t_start;

    @FXML
    private TableColumn< controller_manger_research_detail_table, String> t_repeat;

    @FXML
    private TableColumn< controller_manger_research_detail_table, String> t_describe;

    @FXML
    private TableColumn< controller_manger_research_detail_table, String> t_doctor;

         ObservableList<controller_manger_research_detail_table> ob = FXCollections.observableArrayList();

     
       controller_manger_doctor_detail log =new controller_manger_doctor_detail();
    
     public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       } 
     public void home (ActionEvent e) throws Exception{
       
           log.home(e);
     
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
    
    public void add_re(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
            statement.executeUpdate("INSERT INTO `research` ( `Name`, `start_day`, `describe_re`, `doctor_id`)"
                    + " VALUES ( '"+add_name.getText()+"', '"+add_start.getText()
                    +"','"+add_d_o_b.getText()+"', '"+add_doctor.getText()+"');");
            
        add_id.setText(String.valueOf(++n));
        
         for ( int i = 0; i<table.getItems().size(); i++) {
               table.getItems().clear();
              }
         
         ResultSet r = statement.executeQuery("SELECT * FROM research");
         
              while (r.next()){
            
              ob.add(new controller_manger_research_detail_table (r.getString("research_id")
            , r.getString("Name"),r.getString("stutas"),r.getString("start_day")
            ,r.getString("repeat_times"),r.getString("describe_re"),r.getString("doctor_id")
             ));
              }
         
        
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
    
    
        public void search_re(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
           ResultSet i = statement.executeQuery("SELECT Name,stutas,start_day"
                   + ",repeat_times,describe_re,doctor_id"
                   + " FROM research where research_id ="+Double.parseDouble(s_id.getText()));
         
         if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
         else{
           i.previous();
           while (i.next()){
        s_name.setText(i.getString("Name"));s_start.setText(i.getString("start_day"));
        s_describe.setText(i.getString("describe_re"));s_doctor.setText(i.getString("doctor_id"));
        s_status.setText(i.getString("stutas"));s_repeate.setText(i.getString("repeat_times"));
          }}
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
        
         public void update_re(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
            statement.executeUpdate("UPDATE research SET Name='"+u_name.getText()
            +"',stutas='"+u_status.getText()+"',start_day='"+u_start.getText()
            +"',repeat_times='"+u_repete.getText()+"',describe_re='"+u_discribe.getText()
            +"',doctor_id='"+u_dooctor_id.getText()
            +"' WHERE research_id="+Double.parseDouble(u_id.getText()));
          
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
         public void search_for_update(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
           ResultSet i = statement.executeQuery("SELECT Name,stutas,start_day"
                   + ",repeat_times,describe_re,doctor_id"
                   + " FROM research where research_id ="+Double.parseDouble(u_id.getText()));
         
         if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
         else{
           i.previous();
           while (i.next()){
        u_name.setText(i.getString("Name"));u_start.setText(i.getString("start_day"));
        u_discribe.setText(i.getString("describe_re"));u_dooctor_id.setText(i.getString("doctor_id"));
        u_status.setText(i.getString("stutas"));u_repete.setText(i.getString("repeat_times"));
          }}
            connection.close();
         } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
         
           public void delete_re(ActionEvent e){
    
        try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
            Statement statement=connection.createStatement();
               ResultSet i = statement.executeQuery("SELECT Name,stutas,start_day"
                   + ",repeat_times,describe_re,doctor_id"
                   + " FROM research where research_id ="+Double.parseDouble(d_id.getText()));
         
         if(!i.next()){
         JOptionPane.showMessageDialog(null, "The ID is not exist Please try agin");
        
         }
         else{
           i.previous();
           while (i.next()){
        d_name.setText(i.getString("Name"));d_start.setText(i.getString("start_day"));
        d_describe.setText(i.getString("describe_re"));d_doctor.setText(i.getString("doctor_id"));
        d_status.setText(i.getString("stutas"));d_repeat.setText(i.getString("repeat_times"));
          }}
            
          
          
     statement.executeUpdate("DELETE FROM `research` WHERE research_id="+Double.parseDouble(d_id.getText()));
          
            connection.close();
        } catch (SQLException ex) {
           System.out.println(ex.getMessage());
       }}
    
    
    

    @Override
    public void initialize(URL location, ResourceBundle resources) {


try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
           
            
         Statement statement=connection.createStatement();
         ResultSet i = statement.executeQuery("SELECT MAX(research_id) FROM research");
         while (i.next()){
             add_id.setText(String.valueOf(i.getInt("MAX(research_id)")+1));
             n=i.getInt("MAX(research_id)")+1;}
         
           ResultSet r = statement.executeQuery("SELECT * FROM research");
         
              while (r.next()){
            
              ob.add(new controller_manger_research_detail_table (r.getString("research_id")
            , r.getString("Name"),r.getString("stutas"),r.getString("start_day")
            ,r.getString("repeat_times"),r.getString("describe_re"),r.getString("doctor_id")
             ));
              }
         
            connection.close();
         } catch (SQLException ex) {
           JOptionPane.showMessageDialog(null,ex);
       }
 

        t_id.setCellValueFactory(new PropertyValueFactory<>("id"));
        t_name.setCellValueFactory(new PropertyValueFactory<>("name"));
        t_status.setCellValueFactory(new PropertyValueFactory<>("status"));
        t_start.setCellValueFactory(new PropertyValueFactory<>("start"));
        t_repeat.setCellValueFactory(new PropertyValueFactory<>("repeat"));
        t_describe.setCellValueFactory(new PropertyValueFactory<>("describe"));
        t_doctor.setCellValueFactory(new PropertyValueFactory<>("doctor_id"));
 
 table.setItems(ob);
    }
    
  
    
}
