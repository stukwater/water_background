<?php
header("Content-type: text/html; charset=utf-8");
$conn = mysql_connect('localhost','hanna','hanna870926');//連線資料庫，根據自己的資料庫填寫
$select = mysql_select_db('project');//選著資料庫表
$sql="select * from dirtywater";//操作資料庫
$result=mysql_query($sql); //執行操作
$row=mysql_fetch_row($result); // 從結果集中取得一行作為列舉陣列，存入row陣列中
echo(json_encode($row)); //返回相應陣列，不是用return
echo mysql_error();
mysql_close($conn);
?>

<?php

// $id=$_POST['id'];

//echo $id;
// $link=mysqli_connect('localhost',/*帳號*/,/*密碼*/,/*資料庫*/);
// $sql="SELECT distinct * FROM table1 WHERE ID='$id'";
// if($result=mysqli_query($link,$sql)){

//   echo "<table border='3' cellpadding='3'>";       
//   echo "<tr>";
//   echo "<td>"."Name"."</td>";
//   echo "<td>"."Item"."</td>";
//   echo "</tr>";
//   while($row=mysqli_fetch_assoc($result)){
//     echo "<tr>";
//     echo "<td>".$row["Name"]."</td>";
//     echo "<td>".$row["Item"]."</td>";
//     echo "</tr>";
// }
// }
?>