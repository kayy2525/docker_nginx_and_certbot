<?php

/* https://api.telegram.org/bot1085150554:AAFsijvV4ajPEo8m6JySJqm73RmUFKq5tvg/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];
$token = "1085150554:AAFsijvV4ajPEo8m6JySJqm73RmUFKq5tvg";
$chat_id = "-410278853";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email:' => $email,
  'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

  if ($sendToTelegram) {
  header('Location: /');
} else {
  echo "Error";
}

?>
