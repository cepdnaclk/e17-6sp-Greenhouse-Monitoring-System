Authentication and Authorization
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

<tr>
<td valign="top">Get Predications</td>
<td valign="top">POST</td>
<td valign="top">/getpredict</td>
<td valign="top">Body:accessToken, image</td>
<td valign="top"><span style="color:green">Success:</span><br>StatusCode: 200<br>Message : <br>Body:<br>
<br><span style="color:red">Failure:</span><br>Status Code: 403</td>
</tr>

</table>



