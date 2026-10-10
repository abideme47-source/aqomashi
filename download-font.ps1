$wc = New-Object System.Net.WebClient
$wc.Headers.Add('User-Agent', 'Mozilla/5.0')
$wc.DownloadFile('https://fonts.gstatic.com/s/meriendaone/v23/uoHUDB6y2V57qBmzz36x.ttf', 'C:\Users\hp\Documents\Aqomash\public\fonts\MeriendaOne-Regular.ttf')