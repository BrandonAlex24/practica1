<?php
$conn = mysqli_connect("localhost","root","","iot");
		$led = $_POST['led'];
		$value = $_POST['valor'];
		if(isset($led)&& isset($value)){
			$query = "UPDATE luminarias SET led".$led."=".$value;
			if(mysqli_query($conn, $query)){
				echo "Registor Actualizado";
			} else {
				echo "ERROR: No se ejecuto sql.".mysqli_error($conn);
			}
		mysqli_close($conn)
		$json = json_encode(array('led'.$led => $value));
		echo $json;
	}
?>