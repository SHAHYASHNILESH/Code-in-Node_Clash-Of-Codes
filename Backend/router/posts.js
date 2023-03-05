const express = require("express");
const upload = require("../middleware/upload");
const post = require("../models/postSchema");
var cors = require("cors");

const router = express.Router();
router.use(cors());

router.get("/", async (req, res) => {
  try {
    let posts = await post.find();
    if (posts) {
      res.json({
        message: "All Posts received successfully",
        data: posts,
      });
    } else {
      res.json({
        message: "Posts not Found",
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/:id", (req, res) => {
  res.json("This is Post");
});
// router.post("/", async (req, res) => {
//   try {
//     const data = req.body;
//     let post = await this.post.create(data);
//     res.json({
//       message: "Post created Successfully",
//       data: post,
//     });
//   } catch (err) {
//     res.json({
//       message: err.message,
//     });
//   }
// });
router.post("/", async (req, res) => {
  // get the data sent by user
  const { title, desc,cat,date } = req.body;
  console.log(req.body.cat);

  // Validation
  try {
    const posts = new post({
      title,
      desc,
      cat,
      date
    });
    console.log(posts);
    await posts.save();

    res.status(201).json({ message: "Post created successfully" });
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:id", (req, res) => {
  res.json("This is Post");
});
router.put("/:id", (req, res) => {
  res.json("This is Post");
});

module.exports = router;
