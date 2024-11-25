<?php
// Habilitar errores para depuración
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Configuración de la base de datos
$host = "database-proyectoids.cvq82u8co1mz.us-east-2.rds.amazonaws.com";
$port = 3306;
$user = "admin";
$password = "irao7_ids";
$database = "proyectoIDS";

// Conexión a la base de datos
$conn = new mysqli($host, $user, $password, $database, $port);

// Verificar conexión
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Error de conexión: " . $conn->connect_error]);
    exit;
}

try {
    // Realizar la consulta SQL
    $sql = "SELECT id, nombre, caracteristicas, precio, imagen_src FROM productos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $productos = [];
        while ($row = $result->fetch_assoc()) {
            $productos[] = $row; // Añade cada producto al arreglo
        }
        // Devolver resultados en formato JSON
        echo json_encode(["status" => "success", "data" => $productos]); // SIN anidación extra
    } else {
        echo json_encode(["status" => "error", "message" => "No se encontraron productos"]);
    }
} catch (Exception $e) {
    // Manejo de errores
    echo json_encode(["status" => "error", "message" => "Error en la consulta: " . $e->getMessage()]);
} finally {
    // Asegurarse de cerrar la conexión
    $conn->close();
}
?>
