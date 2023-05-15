FROM node:18-alpine

EXPOSE 3002 5432

WORKDIR /app

CMD ["npm", "run", "start"]