import express from "express";
import { Request, Response } from "express";
import { create, listAll } from "../controllers/brand.controller";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const brands = await listAll();
    res.json(brands);
});

router.post("/", async (req: Request, res: Response) => {
    const {descripition} = req.body;
    const brand = await create(descripition);
    res.json(brand);
});

export default router;