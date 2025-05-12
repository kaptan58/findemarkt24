
<?php
require 'db_config.php';

$id = $_GET['id'];
$stmt = $pdo->prepare("UPDATE ads SET is_premium = NOT is_premium WHERE id = ?");
$stmt->execute([$id]);

header("Location: admin_panel.php");
?>
