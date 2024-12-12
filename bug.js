```javascript
import {unstable_getServerSession} from "next-auth/next";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // ... rest of the code
};

export default handler;
```