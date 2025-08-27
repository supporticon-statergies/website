<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

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

$fullName = $data['fullName'] ?? '';
$email = $data['email'] ?? '';
$role = $data['role'] ?? '';
$challenge = $data['challenge'] ?? '';
$challengeOther = $data['challengeOther'] ?? '';
$connectMethod = $data['connectMethod'] ?? '';

if (empty($fullName) || empty($email) || empty($role) || empty($challenge) || empty($connectMethod)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

$to = 'supp0rtkasupp0rt@gmail.com';
$subject = 'CX Leaders Insight Hub - New Submission from ' . $fullName;

$message = "New CX Leaders Insight Hub Submission\n\n";
$message .= "Full Name: " . $fullName . "\n";
$message .= "Email: " . $email . "\n";
$message .= "Role: " . $role . "\n";
$message .= "Biggest CX Challenge: " . $challenge;
if ($challenge === 'Other' && !empty($challengeOther)) {
    $message .= " - " . $challengeOther;
}
$message .= "\n";
$message .= "Preferred Contact Method: " . $connectMethod . "\n";
$message .= "Submitted at: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
?>
