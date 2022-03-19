const router = require("express").Router();
const authCtrl = require("../controllers/AuthCtrl");

router.get("/me", authCtrl.me);
router.get("/logout", authCtrl.logout);
router.get("/github", authCtrl.github);
router.get("/github/redirect", authCtrl.githubCallback, authCtrl.redirectHome);

module.exports = router;
