<?php
require __DIR__.'/../config/database.php';
$config = require __DIR__.'/../config/config.php';
define('BASE_URL', $config['base_url']);
define('ASSETS_URL', $config['assets_url']);

function getAllProducts()
{
    $pdo = getPDO(); // Obtén la conexión PDO desde tu archivo `database.php`

    try {
        $sql = "SELECT id, nombre, caracteristicas, precio, imagen_src FROM productos";
        $stmt = $pdo->query($sql);
        $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($productos)) {
            echo json_encode(["status" => "success", "data" => $productos]);
        } else {
            echo json_encode(["status" => "error", "message" => "No se encontraron productos"]);
        }
    } catch (PDOException $e) {
        error_log("Error en la consulta: " . $e->getMessage());
        echo json_encode(["status" => "error", "message" => "Error en la consulta: " . $e->getMessage()]);
    }
}
?>
