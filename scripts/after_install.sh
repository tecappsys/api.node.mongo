export HOME="/home/ubuntu/"
export NVM_DIR="$HOME/.nvm/"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc

echo ..............................Change directory...
cd /var/www/api/node/mongo

echo ..............................Install dependencies Package...
npm install --loglevel verbose

echo ..............................Build project...
npm run build

echo ..............................Close node process...
pm2 restart 0