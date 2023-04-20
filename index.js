let express = require("express");
let app = express();

// Đưa template web tĩnh vào
app.use(express.static(__dirname + "/public"));

// Luôn luôn để cuối phần cấu hình port
// Khởi tạo Sever và Port Server
// Biến môi trường cấp Port hoặc biến 5000 của localhost
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});

// Lưu ý nếu bình thường sẽ chạy file index.js bằng cách [node index] thì
// ta sẽ chạy [nodemon index] để nếu code có thay đổi thì nó cũng sẽ tự chạy cho ta
