# Step 1: Specify the base image
FROM node:20.10.0

# Step 2: Set the working directory in the Docker image
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the code
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Define the command to run the app
CMD [ "node", "index.js" ]