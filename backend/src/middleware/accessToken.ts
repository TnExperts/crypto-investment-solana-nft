import express, { Request, Response, NextFunction, Application } from 'express';
const firebaseAdmin = require('../config/firebase');
class Middleware {
  constructor() {}
  async verifyAccessToken(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers['authorization'];
    if (!accessToken) {
      return res.status(401).send('Access token is required');
    }
    try {
      const decoded = await firebaseAdmin.auth().verifyIdToken(accessToken);
      next();
    } catch (error) {
      return res.status(401).send('Invalid access token');
    }
  }
}
const middleware = new Middleware();
export default middleware;
