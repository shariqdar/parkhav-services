import { testEnvironmentVariable } from '../settings';

export const indexPage = (req, res) => res.status(200).json({ message: 'Environment variable is coming across.' });