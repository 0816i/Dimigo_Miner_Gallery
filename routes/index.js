const express = require("express");
const router = express.Router();
const { wrap, authChecker, dataChecker } = require("../middlewares");
const control = require("../controller/apply");

router.get("/", authChecker, wrap(control.showMainPage));
router.get("/list", authChecker, dataChecker, wrap(control.list));
router.get("/detail/:id", authChecker, dataChecker, wrap(control.detail));
router.get(
  "/modify/:id",
  authChecker,
  dataChecker,
  wrap(control.showModifyPage)
);
router.get("/apply", authChecker, dataChecker, wrap(control.showApplyPage));
router.get("/mypage", authChecker, dataChecker, wrap(control.myGodata));

router.put("/join/:id", authChecker, dataChecker, wrap(control.join));

router.post("/apply", authChecker, dataChecker, wrap(control.makeapply));
router.post("/modify/:id", authChecker, dataChecker, wrap(control.modify));
router.post("/apply/:id", authChecker, dataChecker, wrap(control.makejoin));
router.post("/search", authChecker, dataChecker, wrap(control.search));

router.delete(
  "/delete/:id",
  authChecker,
  dataChecker,
  wrap(control.applydelete)
);
router.delete("/join/:id", authChecker, dataChecker, wrap(control.joindelete));

module.exports = router;
