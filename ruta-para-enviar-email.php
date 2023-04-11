<?php
$destino = "santialegre16@gmail.com";
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nCorreo electrónico: " . $email . "\nMensaje: " . $mensaje;
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($destino, "Mensaje enviado desde mi sitio web", $contenido, $headers);
header("Location:agradecimiento.html");
?>
