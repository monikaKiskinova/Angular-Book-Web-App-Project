import { Router } from 'express';
import userService from '../services/userService.js';

const userController = Router();

userController.get('/', async (req, res) => {
    const query = req.query;

    // const user = await userService.getOne(req.params.userId);
    const users = await userService.getAll(query);
    
    // res.json(user);
    res.json(users);
});

userController.post('/register', async (req, res) => {
    const { email, password } = req.body

    const result = await userService.register(email, password);

    res.json(result);
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const result = await userService.login(email, password);

    res.json(result);
});

// userController.post('/logout', async (req, res) => {
userController.get('/logout', async (req, res) => {
    await userService.logout(); 

    res.clearCookie('auth');  //
    res.status(204).end();
});

userController.get('/profile', async (req, res) => {
    const user = await userService.getOne(req.params.userId);
    
    res.json(user);
});

userController.get('/:userId', async (req, res) => {
    const user = await userService.getOne(req.params.userId);

    res.json(user);
});

export default userController;
