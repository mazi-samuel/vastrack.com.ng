# PowerShell script to push to multiple repositories
Write-Host "Pushing to all repositories..." -ForegroundColor Green

# The git remotes are configured to push to different branches:
# - https://github.com/mazi-samuel/vastrack.com.ng.git (main branch)
# - https://github.com/Vastrack-Tech/VastrackWeb.git (staging branch)
# - https://github.com/mazi-samuel/vastrack-clone-faithful.git (master branch)

Write-Host "Pushing to vastrack.com.ng (main branch)..." -ForegroundColor Yellow
git push origin master:main

Write-Host "Pushing to VastrackWeb (staging branch)..." -ForegroundColor Yellow
git push vastrack-tech master:staging --force

Write-Host "Pushing to vastrack-clone-faithful (master branch)..." -ForegroundColor Yellow
git push clone-faithful master

Write-Host "Push completed to all repositories!" -ForegroundColor Green
Write-Host "[OK] vastrack.com.ng (main)" -ForegroundColor Cyan
Write-Host "[OK] VastrackWeb (staging)" -ForegroundColor Cyan  
Write-Host "[OK] vastrack-clone-faithful (master)" -ForegroundColor Cyan