//
// posts table
//
db.posts.createIndex({ url: 1 }, { unique: true, background: true });
db.posts.insertMany([{
  url: "/2021/07/hello-nodejs.html",
  published: new Date(2021, 7, 2),
  updated: new Date(2021, 7, 2),
  title: "ようこそ Node.js の世界へ",
  content: "Node.js は おもしろい！",
  keywords: ["Node.js"],
  authors: ["Nakao Taiki"]
}, {
  url: "/2021/07/nodejs-basic.html",
  published: new Date(2021, 7, 9),
  updated: new Date(2020, 7, 9),
  title: "Node.js の 基本",
  content: "ちょっと難しくなってきた！？",
  keywords: ["Node.js"],
  authors: ["Nakao Taiki"]
}, {
  url: "/2021/07/advanced-nodejs.html",
  published: new Date(2021, 7, 8),
  updated: new Date(2021, 7, 8),
  title: "Node.js 応用",
  content: "Node.js で Excel ファイルが触れるなんて！！",
  keywords: ["Node.js"],
  authors: ["Nakao Taiki"]
}]);

//
// users table
//
db.users.createIndex({ email: 1 }, { unique: true, background: true });
db.users.insertMany([{
  email: "uu95b49l76@sute.jp",
  name: "Taiki Nakao",
  password: "77d1fb804f4e1e6059377122046c95de5e567cb9fd374639cb96e7f5cc07dba1", //"qwerty", // "77d1fb804f4e1e6059377122046c95de5e567cb9fd374639cb96e7f5cc07dba1"
  role: "owner"
}]);

//
// privileges table
//
db.privileges.createIndex({ role: 1 }, { unique: true, background: true });
db.privileges.insertMany([
  { role: "default", permissions: ["read"] },
  { role: "owner", permissions: ["readWrite"] }
]);
