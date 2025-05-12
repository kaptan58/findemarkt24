
<?php
require 'db_config.php';

$title = $_POST['title'];
$category = $_POST['category'];
$description = $_POST['description'];
$price = $_POST['price'];
$is_premium = isset($_POST['is_premium']) ? 1 : 0;

$stmt = $pdo->prepare("INSERT INTO ads (title, category, description, price, is_premium) VALUES (?, ?, ?, ?, ?)");
$stmt->execute([$title, $category, $description, $price, $is_premium]);

echo "Anzeige gespeichert. ";
if ($is_premium) {
    echo "<b>Diese Anzeige ist als ACIL SATILIK markiert.</b>";
}
?>
