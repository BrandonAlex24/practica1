<?php 
	$conn = mysqli_connect("localhost", "root", "", "iot");
	if($conn != null){
		$err_conn = false;
		$conn_msg = "Coneccion establecida";
	}
	else{
		$err_conn = true;
		$conn_msg = "Error al accesar a la BD: ".mysqli_connect_error($conn);
	}

	if(isset($_POST['read_db'])){
		$stmt = $conn->prepare("SELECT * FROM luminarias");
		if(!$stmt){
			$err_db = true;
			$db_msg = "error al leer la BD:".$conn->error;
		}
		else {
			$stmt->execute();
			$stmt->store_result();
			$stmt->bind_result($v1, $v2, $v3, $v4);
			while($stmt->fetch()) {
				$led1 = $v1;
				$led2 = $v2;
				$led3 = $v3;
				$led4 = $v4;
			}
			$stmt->close();
			$err_db = false;
			$db_msg = "Valores leidos";
		}
		echo json_encode(array('err_con' => $err_conn,
								'conn_msg' => $conn_msg,
								'err_db' => $err_db,
								'db_msg' => $db_msg,
								'led1' => $led1,
								'led2' => $led2,
								'led3' => $led3,
								'led4' => $led4));
	}

	
	// if(isset($_POST['update_db'])){
	// 	$stmt = $conn->prepare("UPDATE luminarias");
	// 	if(!$stmt){
	// 		$err_db = true;
	// 		$db_msg = "error al leer la BD:".$conn->error;
	// 	}
	// 	else {
	// 		$stmt->execute();
	// 		$stmt->store_result();
	// 		$stmt->bind_result($v1, $v2, $v3, $v4);
	// 		while($stmt->fetch()) {
	// 			$led1 = $v1;
	// 			$led2 = $v2;
	// 			$led3 = $v3;
	// 			$led4 = $v4;
	// 		}
	// 		$stmt->close();
	// 		$err_db = false;
	// 		$db_msg = "Valores leidos";
	// 	}
	// 	echo json_encode(array('err_con' => $err_conn,
	// 							'conn_msg' => $conn_msg,
	// 							'err_db' => $err_db,
	// 							'db_msg' => $db_msg,
	// 							'led1' => $led1,
	// 							'led2' => $led2,
	// 							'led3' => $led3,
	// 							'led4' => $led4));
	// }
	// if(isset($_POST['update_db'])){
	// 	$err_db = false;
	// 	$led = $_POST['led'];
	// 	$value = $_POST['value'];

// 		$conn = mysqli_connect("localhost","root","","iot");
// 		$led = $_POST['led'];
// 		$value = $_POST['valor'];
// 		if(isset($led)&& isset($value)){
// 			$query = "UPDATE luminarias SET led".$led."=".$value;
// 			if(mysqli_query($conn, $query)){
// 				echo "Registor Actualizado";
// 			} else {
// 				echo "ERROR: No se ejecuto sql.".mysqli_error($conn);
// 			}
	// 	mysqli_close($conn)
	// 	$json = json_encode(array('led'.$led => $value));
	// 	echo $json;
	 //}
?>