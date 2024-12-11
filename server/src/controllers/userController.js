import { Router } from 'express';
import userService from '../services/userService.js';
import { getErrorMessage } from '../utils/errorUtils.js';

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

// userController.patch('/:userId', async (req, res) => {
userController.put('/:userId', async (req, res) => {
    const userData = req.body;
    const userId = req.params.userId;
    console.log(userData);
    console.log(userId);

    try {
        const updatedUser = await userService.update(userId, userData);
        console.log(updatedUser);

        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: getErrorMessage(err) })
    }
});

export default userController;
