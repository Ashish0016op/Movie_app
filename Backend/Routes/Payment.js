const express=require('express');
const router=express.Router();
const premiumControllers=require('../Controllers/Payment');
router.post('/pending_prem',premiumControllers.purchasePremium);
router.post('/success_trans',premiumControllers.updateTransaction);
module.exports=router;
