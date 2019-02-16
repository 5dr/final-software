/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package soft_proj;

import com.jfoenix.controls.JFXTextArea;
import com.jfoenix.controls.JFXTextField;
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
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.Pane;
import javax.swing.JOptionPane;

/**
 *
 * @author asd
 */
public class controller_of_doctor implements Initializable{
    
  static String s1;
    
    @FXML
    private AnchorPane reseearch;

    @FXML
    private TableView<controller_of_doctor_table> table;
    
    @FXML
    private TableColumn<controller_of_doctor_table, String> id;

    @FXML
    private TableColumn<controller_of_doctor_table, String> name;

    @FXML
    private TableColumn<controller_of_doctor_table, String> des;
    
    ObservableList<controller_of_doctor_table> ob = FXCollections.observableArrayList();


    @FXML
    private JFXTextField search;
    @FXML
    private JFXTextField sub;

    @FXML
    private JFXTextArea details;


    @FXML
    private Pane p_send;
    
    
     controller_of_login log =new controller_of_login();
    
      public void exit (ActionEvent e) throws Exception{
       
           log.exit(e);
     
       } 
    
    public void sent_show (ActionEvent e) throws Exception{
       
        p_send.setVisible(true);
        reseearch.setVisible(false);
     
       } 
     public void research_show (ActionEvent e) throws Exception{
       
        p_send.setVisible(false);
        reseearch.setVisible(true);
     
       } 
     
     public void send_report (ActionEvent e) throws Exception{
       
     new controller_mangment().doctor_to_admin=1;
     s1=details.getText();
     details.setText("");
     sub.setText("");
         System.out.println(s1);
       }
    
    @Override
    public void initialize(URL location, ResourceBundle resources) {

     try {
            Connection connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost/software","root","");
           
            
         Statement statement=connection.createStatement();
        
         
         ResultSet r = statement.executeQuery("SELECT research_id,Name,describe_re FROM research");
         
              while (r.next()){
            
              ob.add(new controller_of_doctor_table (r.getString("research_id")
            , r.getString("Name"),r.getString("describe_re") ));
              }
         
            connection.close();
         } catch (SQLException ex) {
           JOptionPane.showMessageDialog(null,ex);
       }

     
     id.setCellValueFactory(new PropertyValueFactory<>("id"));
     name.setCellValueFactory(new PropertyValueFactory<>("Name"));
     des.setCellValueFactory(new PropertyValueFactory<>("descibe"));
     table.setItems(ob);
    
    table.setOnMouseClicked((event) -> {
        
         Desktop d =Desktop.getDesktop();
         try {
             d.browse(new URI("file://E:/My Fuclty/JavaApp/soft_proj/src/soft_proj/New folder/WixADI_files/ac213ac6-d9fa-444f-8fec-0167cdf24efe.htm"));
         } catch (URISyntaxException ex) {System.out.println(ex);
         } catch (IOException ex) {System.out.println(ex);}
        
    });
    
    }
      
    
}
