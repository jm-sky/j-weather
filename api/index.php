<?php
@error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED);
@ini_set('display_errors', 0);
@header("Content-type: application/json; charset=utf-8");

require_once __DIR__ . '/vendor/autoload.php';

//-------------------------------------------------------------------
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$params = $_GET;
$api_key = $_GET['appid'];
$api_url = $_ENV['API_URL'];

//-------------------------------------------------------------------
if ($api_key == null || $api_key != $_ENV['API_KEY']) {
  exit('{ "error": "Access denied" }');
}

//-------------------------------------------------------------------
if (!$params['q'] && !$params['lat']) {
  exit('{ "error": "Some params are needed" }');
}

//-------------------------------------------------------------------
unset($params['api_key']);
$params['appid'] = $_ENV['OPENWEATHER_API_KEY'];
$params['q'] = 'Warsaw';
$params['units'] = 'metric';

$query_params = [];
foreach($params as $k => $v) {
  $query_params[] = "{$k}={$v}";
}

$api_url = $api_url . "?" . implode('&', $query_params);

//-------------------------------------------------------------------
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $api_url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
// curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($curl, CURLOPT_HTTPHEADER, ["Accept: application/json"]);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); //for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); //for debug only!
$response = curl_exec($curl);
curl_close($curl);

//-------------------------------------------------------------------
echo $response;

exit();
