import express from "express";
import {addOrder} from "../database/order-data-store";

const router = express.Router();

router.post("/place-order", (req, res) => {
   const order = req.body;
   try{
       const saveOrder = addOrder(order);
       res.status(201).json(saveOrder);
   }catch (err) {
         res.status(500).json("Failed to save order");
   }
});

export default router;