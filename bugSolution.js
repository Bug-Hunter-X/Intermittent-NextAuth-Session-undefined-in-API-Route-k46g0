```javascript
import {unstable_getServerSession} from "next-auth/next";
import {logger} from './logger'; // custom logger

const handler = async (req, res) => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      logger.error('Session is undefined'); // Log the error
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // ... rest of the code
  } catch (error) {
    logger.error('Error retrieving session:', error); // Log any errors
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
```