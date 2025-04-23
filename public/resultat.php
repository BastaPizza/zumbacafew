<?php
$nom = isset($_GET['nom']) ? strtoupper($_GET['nom']) : 'INCONNU';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Résultat</title>
</head>
<body>
    <h1>Bonjour, <?= htmlspecialchars($nom) ?> !</h1>
</body>
</html>
