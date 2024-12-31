import app from './index.js';
import { connectUsingMongoose } from './backend/config/mongodb.js';

const appPort = process.env.PORT || 5000;

app.listen(appPort, () => {
    console.log('Server running on http://localhost:5000');
    connectUsingMongoose();
})
