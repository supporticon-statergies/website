<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$company = $data['company'] ?? 'Not provided';
$msg = $data['message'] ?? 'No additional message provided.';

if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

$to = 'jaimanisa@supporticon.com';
$subject = 'New Demo Request from ' . $name . ' - ' . $company;

$message = "Hello,\n\nYou have received a new demo request from the HelpDude website.\n\n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$message .= "LEAD DETAILS\n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$message .= "Full Name    : " . $name . "\n";
$message .= "Work Email   : " . $email . "\n";
$message .= "Phone Number : " . $phone . "\n";
$message .= "Company Name : " . $company . "\n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$message .= "MESSAGE\n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$message .= $msg . "\n\n";
$message .= "Submitted at : " . date('Y-m-d H:i:s') . "\n";
$message .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$message .= "Reply to this email to contact the lead.";

$headers = "From: no-reply@supporticon.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Check PHP mail configuration.']);
}
?>
