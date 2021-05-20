<?php
$_POST = json_decode(file_get_contents("php://input"), true); // преобразование php в json
echo var_dump($_POST);