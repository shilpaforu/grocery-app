# backend/Dockerfile

# Use an official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "dist/index.js"]
