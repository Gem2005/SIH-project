# Use the official Node.js image as the base image
FROM node:20

# Set the environment variable for the port
ENV PORT 5173

# Expose the port your app runs on
EXPOSE 5173

# Create app directory
RUN mkdir -p /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Define the command to run your app with the --host flag to expose it to the network
CMD ["npm", "run", "dev", "--", "--host"]
