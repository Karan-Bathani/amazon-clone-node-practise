# Amazon Clone node-repo

Contains all the backend code from the Full Stack Amazon Clone tutorial by Rivaan Ranawat.

[Youtube Link](https://youtu.be/O3nmP-lZAdg) to the whole tutorial.

## Features
- Email & Password Authentication
- Persisting Auth State
- Searching Products
- Filtering Products (Based on Category)
- Product Details
- Rating
- Getting Deal of the Day
- Cart
- My Orders
- Order Details & Status
- Sign Out
- Admin Side
    - Getting All Products
    - Adding Products
    - Deleting Products
    - Fetching Orders
    - Changing Order Status
    - Fetching Total Earnings
    - Fetching Category Based Earnings
 

## Running Locally
After cloning this repository, migrate to ```amazon-clone-node-repo``` folder. Then, follow the following steps:
- Create MongoDB Project & Cluster as shown in the tutorial video.
- Click on Connect, follow the process where you will get the uri.
- Create a ```server/const.js``` file in the server folder. Paste the below line of code and paste your MongoDB uri inside the inverted commas.
```
const database = "";
module.exports = database;
```

Then run the following commands to run the node server:

```bash
  cd server
  npm install
  npm run dev (for continuous development)
  OR
  npm start (to run script 1 time)
```

## Tech Used
Node.js, Express, Mongoose, MongoDB


You can follow the creator [here](https://github.com/RivaanRanawat).
