<?php 

$products = getAllProducts();
?>
<?php if($products != null): ?>
<h2><?=$products['nombre']?> (<?=$products['caracteristicas']?> - <?=$products['precio']?>)</h2>
<?php else: ?>
    <h2>No se encontró los productos.</h2>
    <a href="<?=BASE_URL?>">Volver al inicio</a>
<?php endif; ?>

<?php
include_once  __DIR__ .'/../layouts/footer.php';
?>