$ErrorActionPreference = "Stop"
$BaseUrl = "http://127.0.0.1:8000/api"
$Timestamp = Get-Date -Format "yyyyMMddHHmmss"
$Email = "test_auth_$Timestamp@example.com"
$Password = "StrongP@ssw0rd1!"

Write-Host "--- Test 1: Register Weak Password ---"
try {
    $Body = @{
        name = "Test User"
        email = "weak_$Email"
        password = "weak"
        password_confirmation = "weak"
    }
    Invoke-RestMethod -Uri "$BaseUrl/register" -Method Post -Body $Body -Headers @{Accept="application/json"}
    Write-Error "Test 1 Failed: Weak password should have been rejected."
} catch {
    if ($_.Exception.Response.StatusCode -eq [System.Net.HttpStatusCode]::UnprocessableEntity) {
        Write-Host "Test 1 Passed: Weak password rejected (422)."
    } else {
        Write-Error "Test 1 Failed: Unexpected error: $($_.Exception.Message)"
    }
}

Write-Host "`n--- Test 2: Register Strong Password ---"
try {
    $Body = @{
        name = "Test User"
        email = $Email
        password = $Password
        password_confirmation = $Password
    }
    $Response = Invoke-RestMethod -Uri "$BaseUrl/register" -Method Post -Body $Body -Headers @{Accept="application/json"}
    Write-Host "Test 2 Passed: User registered successfully."
} catch {
    Write-Error "Test 2 Failed: Strong password rejected. $($_.Exception.Message) $($_.Exception.Response.GetResponseStream() | %{ $_.ReadToEnd() })"
}

Write-Host "`n--- Test 3: Login ---"
try {
    $Body = @{
        email = $Email
        password = $Password
    }
    $LoginResponse = Invoke-RestMethod -Uri "$BaseUrl/login" -Method Post -Body $Body -Headers @{Accept="application/json"}
    Write-Host "Test 3 Passed: Login successful."
} catch {
    Write-Error "Test 3 Failed: Login failed."
}

Write-Host "`n--- Test 4: Rate Limiting (Login) ---"
$RateLimitHit = $false
for ($i = 1; $i -le 10; $i++) {
    try {
        $Body = @{ email = $Email; password = "wrongpassword" } # Intentional failure to trigger logic likely, but throttle hits regardless of success usually
        Invoke-RestMethod -Uri "$BaseUrl/login" -Method Post -Body $Body -Headers @{Accept="application/json"} | Out-Null
        Write-Host "Attempt $i: Allowed"
    } catch {
        if ($_.Exception.Response.StatusCode -eq [System.Net.HttpStatusCode]::TooManyRequests) {
            Write-Host "Attempt $i: Blocked (429) - Rate Limit Working!"
            $RateLimitHit = $true
            break
        }
    }
}

if ($RateLimitHit) {
    Write-Host "Test 4 Passed: Rate limiting active."
} else {
    Write-Error "Test 4 Failed: Rate limit not triggered after 10 attempts."
}
