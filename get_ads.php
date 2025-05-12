
<?php
require 'db_config.php';

$stmt = $pdo->query("SELECT * FROM ads ORDER BY is_premium DESC, created_at DESC");
$ads = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($ads);
?>
