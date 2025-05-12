
<?php
require 'db_config.php';

$id = $_GET['id'];
$stmt = $pdo->prepare("DELETE FROM ads WHERE id = ?");
$stmt->execute([$id]);

header("Location: admin_panel.php");
?>
