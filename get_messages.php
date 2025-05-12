
<?php
require 'db_config.php';

$sender = $_GET['sender'];
$receiver = $_GET['receiver'];

$stmt = $pdo->prepare("SELECT * FROM messages WHERE (sender = ? AND receiver = ?) OR (sender = ? AND receiver = ?) ORDER BY created_at ASC");
$stmt->execute([$sender, $receiver, $receiver, $sender]);
$messages = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($messages);
?>
