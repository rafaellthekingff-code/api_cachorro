<?php
header("Content-Type: application/json");

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://dog.ceo/api/breeds/image/random/12");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if ($response === false) {
    echo json_encode(["erro" => curl_error($ch)]);
    exit;
}

curl_close($ch);

echo $response;
?>