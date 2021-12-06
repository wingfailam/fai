# Base on offical Node.js Alpine image
FROM node:17-alpine
# Set working directory
WORKDIR /usr/app
# RUN yarn global add pm2
# RUN yarn add pm2
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./
# Install dependencies
# RUN yarn install --production
RUN npm install --production
# Copy all files
COPY . .
# Build app
# RUN yarn build
RUN npm run build
# Expose the listening port
EXPOSE 3000
# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node
# Run npm start script when container starts
# CMD [ "yarn", "start" ]
# Run npm start script with PM2 when container starts
# CMD [ "pm2-runtime", "yarn", "--", "start" ]
# CMD [ "pm2-runtime", "yarn", "start" ]
CMD [ "pm2-runtime", "npm", "--", "start" ]



# FROM node:12-alpine
# # Adding build tools to make yarn install work on Apple silicon / arm64 machines
# RUN apk add --no-cache python2 g++ make
# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn install --production
# COPY . .
# CMD ["node", "src/index.js"]

# FROM nginx:alpine