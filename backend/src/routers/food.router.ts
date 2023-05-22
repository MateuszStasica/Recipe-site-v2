import { Router } from 'express';
import { sample_foods } from '../data';

const router = Router();

router.get("/api/foods", (req, res) =>{
    res.send(sample_foods);
})

router.get("/api/foods/search/:searchTerm", (req, res) =>{
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLocaleLowerCase()));
    res.send(foods);
})

router.get("/api/foods/:foodId", (req, res) =>{
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
})