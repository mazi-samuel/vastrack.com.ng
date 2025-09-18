# PowerShell script to push to multiple repositories
Write-Host "Pushing to all repositories..." -ForegroundColor Green

# The git remote is configured to push to all three repositories automatically:
# - https://github.com/mazi-samuel/vastrack.com.ng.git
# - https://github.com/Vastrack-Tech/VastrackWeb.git  
# - https://github.com/mazi-samuel/vastrack-clone-faithful.git

Write-Host "Pushing to all configured repositories..." -ForegroundColor Yellow
git push origin master

Write-Host "Push completed to all repositories!" -ForegroundColor Green
Write-Host "✓ vastrack.com.ng" -ForegroundColor Cyan
Write-Host "✓ VastrackWeb" -ForegroundColor Cyan  
Write-Host "✓ vastrack-clone-faithful" -ForegroundColor Cyan