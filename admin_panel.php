
<?php
require 'db_config.php';

if ($_POST['username'] !== 'admin' || $_POST['password'] !== '1234') {
    die("Zugriff verweigert.");
}

echo "<h2>Admin Panel - Anzeigenverwaltung</h2>";

$stmt = $pdo->query("SELECT * FROM ads ORDER BY created_at DESC");
$ads = $stmt->fetchAll();

echo "<table border='1' cellpadding='10'><tr><th>Titel</th><th>Premium</th><th>Aktion</th></tr>";
foreach ($ads as $ad) {
    echo "<tr>
            <td>{$ad['title']}</td>
            <td>" . ($ad['is_premium'] ? 'JA' : 'NEIN') . "</td>
            <td>
              <a href='toggle_premium.php?id={$ad['id']}'>Premium ändern</a> |
              <a href='delete_ad.php?id={$ad['id']}'>Löschen</a>
            </td>
          </tr>";
}
echo "</table>";
?>
