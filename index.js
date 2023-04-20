let express = require("express");
let app = express();

// Đưa template web tĩnh vào
app.use(express.static(__dirname + "/public"));

// View Engine
let expressHbs = require("express-handlebars");
let hbs = expressHbs.create({
  extname: "hbs",
  defaultLayout: "layout",
  layoutDir: __dirname + "/views/layouts/",
  partialsDir: __dirname + "/views/partials/",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// Define your root here
app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/blog", (req, res) => {
//   res.render("blog", { banner: "Our Blog" });
// });

app.get("/:page", (req, res) => {
  let banners = {
    blog: "Our Blog",
    category: "Shop Category",
    cart: "Shopping Cart",
    checkout: "Product Checkout",
    confirmation: "Order Confirmations",
    contact: "Contact Us",
    login: "Login / Register",
    register: "Register",
    // nếu có dấu "-" thì sử dụng "" cho tên thuộc tính sẽ giải quyết được
    "single-blog": "Blog Details",
    "single-product": "Shop Single ",
    "tracking-order": "Order Tracking",
  };
  let page = req.params.page;
  res.render(page, { banner: banners[page] });
});
// app.get("/blog", (req, res) => {
//   res.render("blog");
// });
// app.get("/blog", (req, res) => {
//   res.render("blog");
// });

// Luôn luôn để cuối phần cấu hình port
// Khởi tạo Sever và Port Server
// Biến môi trường cấp Port hoặc biến 5000 của localhost
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});

// Lưu ý nếu bình thường sẽ chạy file index.js bằng cách [node index] thì
// ta sẽ chạy [nodemon index] để nếu code có thay đổi thì nó cũng sẽ tự chạy cho ta
