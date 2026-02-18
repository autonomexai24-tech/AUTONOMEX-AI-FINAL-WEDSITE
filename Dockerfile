# Stage 1: Build the React Application
FROM node:20-alpine as builder
WORKDIR /app
# Copy package files
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application
COPY . .
# Build the Vite app
RUN npm run build

# Stage 2: Serve the App with Nginx
FROM nginx:alpine
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copy the custom Nginx routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built React app from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
