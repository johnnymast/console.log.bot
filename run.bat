rmdir node_modules\rivescript /s /q
del build\app.bundle.js
cmd /c npm install
cmd /c npm run development