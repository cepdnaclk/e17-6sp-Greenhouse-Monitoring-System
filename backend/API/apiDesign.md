# Greenhouse Monitoring System Based on Image Spectral Data
## API Documentation
#### Authentication and Authorization
- Login to the System by entering username and password. The username and password are authenticated and authorized.
- Logout from the system.
- Get user information.
- Update user information.
<br>

**/users**
<table>

<tr>
<th>Task</th>
<th>Method</th>
<th>End point</th>
<th>Request</th>
<th>Response</th>
</tr>

<tr>
<td valign="top">Login</td>
<td valign="top">POST</td>
<td valign="top">/login</td>
<td valign="top">Body:<br>username, password</td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : You are successfully logged in!
<br>Body: accessToken<br>
<br><span style="color:red">Failure:</span><br>Status Code: 401<br>Message : You are not authenticated!
</td>
</tr>

<tr>
<td valign="top">Logout</td>
<td valign="top">GET</td>
<td valign="top">/logout</td>
<td valign="top">Body: </td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : <br>Body: <br>
<br><span style="color:red">Failure:</span><br>Status Code: 403<br>Message :Invalid inputs</td>
</tr>

<tr>
<td valign="top">Get User information</td>
<td valign="top">GET</td>
<td valign="top">/getinfo</td>
<td valign="top">Body:accessToken</td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : <br>Body:<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

<tr>
<td valign="top">Update User information</td>
<td valign="top">PUT</td>
<td valign="top">/updateinfo</td>
<td valign="top">Body:accessToken</td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : Updated Successfully<br>Body:<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

</table>  

#### Set One Plant Focus Time
The Camera System should be triggered for a defined frequency. The frequency means that like for 1 hour how many cycles the camera system go around the plants in greenhouse. And also the time to be focused for one plant also should be defined. By using one plant focus time we can calculate the frequency of the camera system.
<br>

**/set-plant-focus-time**

<table>

<tr>
<td valign="top">Set Plant Focus Time </td>
<td valign="top">POST</td>
<td valign="top">/</td>
<td valign="top">Body:accessToken, plant_focus_time</td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : One Plant Focus time for the camera system succesfully updated! <br>Body:<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

</table>


#### Features
- Get Grennhouse overall crop yeild as a percentage.
- Get One plant crop yeild Stage.
- Get All Leaf Diseases of all the plants as a list.
- Get Leaf Diseases of one plant.
<br>

**/features**

<table>

<tr>
<td valign="top">Get Crop Yield</td>
<td valign="top">GET</td>
<td valign="top">/get-yield</td>
<td valign="top">Body:accessToken </td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200 <br>Body:crop_yield% <br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>
  
<tr>
<td valign="top">Get Crop Yield of a plant</td>
<td valign="top">GET</td>
<td valign="top">/get-yield/:plantID</td>
<td valign="top">Body:accessToken </td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200 <br>Body:crop_yield_stage<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>
  
<tr>
<td valign="top">Get Leaf Disease</td>
<td valign="top">GET</td>
<td valign="top">/get-disease</td>
<td valign="top">Body:accessToken </td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200 <br>Body:[[plantID, [disease]]] <br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>
  
<tr>
<td valign="top">Get Leaf Disease of a plant</td>
<td valign="top">GET</td>
<td valign="top">/get-disease/:plantID</td>
<td valign="top">Body:accessToken </td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200 <br>Body:[plantID, [disease]] <br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

</table>


#### Upload Images
Upload the images which were extracted from the video file.
<br>

**/upload-images**

<table>

<tr>
<td valign="top">Upload Images</td>
<td valign="top">POST</td>
<td valign="top">/</td>
<td valign="top">Body:accessToken, [[image , plant_id]]</td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : Images uploaded successfully! <br>Body:<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

</table>

