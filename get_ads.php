<?php
require 'db_config.php';

$stmt = $pdo->query("SELECT * FROM ads ORDER BY id DESC");
$ads = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($ads);
?>