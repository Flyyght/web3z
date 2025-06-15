const fs = require('fs');

const filePath = './hosted.json';

// Читаем файл
const data = fs.readFileSync(filePath, 'utf8');
const servers = JSON.parse(data);

// Уменьшаем serverPayment у каждого сервера (но не меньше 0)
for (const server of servers) {
  if (typeof server.serverPayment === 'number' && server.serverPayment > 0) {
    server.serverPayment -= 1;
  }
}

// Записываем обратно в файл
fs.writeFileSync(filePath, JSON.stringify(servers, null, 2), 'utf8');

console.log('serverPayment decreased by 1 for all servers');
