Authentication and Authorization
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
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : <br>Body:<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

</table>  

Set Frequency 
<br>
**/set-frequency**

<table>

<tr>
<td valign="top">Set Frequency </td>
<td valign="top">POST</td>
<td valign="top">/</td>
<td valign="top">Body:accessToken, frequency</td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : Frequency succesfully updated! <br>Body:<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

</table>


Features
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


Upload Images
<br>
**/upload-images**

<table>

<tr>
<td valign="top">Upload Images</td>
<td valign="top">POST</td>
<td valign="top">/</td>
<td valign="top">Body:accessToken, [[image , plant_id]]</td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : Images uploaded successfully <br>Body:<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

</table>

