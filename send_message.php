
<?php
require 'db_config.php';

$sender = $_POST['sender'];
$receiver = $_POST['receiver'];
$message = $_POST['message'];

$stmt = $pdo->prepare("INSERT INTO messages (sender, receiver, message) VALUES (?, ?, ?)");
$stmt->execute([$sender, $receiver, $message]);
?>
