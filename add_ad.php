<?php
require 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'] ?? '';
    $category = $_POST['category'] ?? '';
    $description = $_POST['description'] ?? '';
    $price = $_POST['price'] ?? 0;

    $stmt = $pdo->prepare("INSERT INTO ads (title, category, description, price) VALUES (?, ?, ?, ?)");
    $stmt->execute([$title, $category, $description, $price]);

    echo "Anzeige erfolgreich gespeichert!";
}
?>