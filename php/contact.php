<?php

require 'C:/Users/i.huseynov/Desktop/Myfolio/IsmailPortffolioPages/php/PHPMailer-master/src/PHPMailer.php';  // Указываем путь к файлам PHPMailer
require 'C:/Users/i.huseynov/Desktop/Myfolio/IsmailPortffolioPages/php/PHPMailer-master/src/SMTP.php';       // Для работы с SMTP
require 'C:/Users/i.huseynov/Desktop/Myfolio/IsmailPortffolioPages/php/PHPMailer-master/src/Exception.php';  // Для обработки ошибок
// Проверяем, что форма была отправлена

// Проверяем, что форма была отправлена
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем данные формы
    $name     = $_POST['name'];
    $email    = $_POST['email'];
    $comments = $_POST['comments'];

    // Функция для проверки валидности email
    function isEmail($email) {
        return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
    }

    // Проверка на пустые поля и правильность email
    if(trim($name) == '') {
        echo '<div class="error_message">You must enter your name.</div>';
        exit();
    } else if(trim($email) == '') {
        echo '<div class="error_message">Please enter a valid email address.</div>';
        exit();
    } else if(!isEmail($email)) {
        echo '<div class="error_message">You have entered an invalid e-mail address. Please try again.</div>';
        exit();
    }

    if(trim($comments) == '') {
        echo '<div class="error_message">Please enter your message.</div>';
        exit();
    }

    if(get_magic_quotes_gpc()) {
        $comments = stripslashes($comments);
    }

    // Настройка PHPMailer для отправки письма через Gmail
    $mail = new PHPMailer;
    $mail->isSMTP();  // Используем SMTP
    $mail->Host = 'smtp.gmail.com';  // SMTP сервер Gmail
    $mail->SMTPAuth = true;  // Включаем авторизацию
    $mail->Username = 'huseyno.ismail3@gmail.com';  // Твой Gmail адрес
    $mail->Password = 'your-email-password';  // Твой пароль от Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Используем шифрование
    $mail->Port = 587;  // Порт для TLS

    $mail->setFrom($email, $name);  // Указываем отправителя
    $mail->addAddress('example@example.net');  // Указываем получателя

    $mail->Subject = 'Contact from ' . $name;  // Тема письма
    $mail->Body    = 'Message: ' . $comments;  // Тело письма

    // Отправка письма
    if($mail->send()) {
        echo "<fieldset>";
        echo "<div id='success_page'>";
        echo "<h3>Email Sent Successfully.</h3>";
        echo "<p>Thank you <strong>$name</strong>, your message has been submitted to us.</p>";
        echo "</div>";
        echo "</fieldset>";
    } else {
        // Отображаем ошибку на странице
        echo '<div style="color: red; font-weight: bold;">Mailer Error: ' . $mail->ErrorInfo . '</div>';

        // Логируем ошибку для отладки
        error_log('Mailer Error: ' . $mail->ErrorInfo);
    }
}

?>