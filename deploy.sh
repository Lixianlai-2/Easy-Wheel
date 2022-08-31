# 打包会自动删除之前的dist
npm run build
cd dist
git add .
git commit -m "update"
git push
cd .. 
