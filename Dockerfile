FROM node:12.19.0 as build

WORKDIR /app-build

COPY . .

RUN npm install

RUN npm run build

FROM node:12.19.0-alpine3.12

WORKDIR /app

COPY --from=build /app-build/dist ./dist

EXPOSE 3001

CMD ["node", "dist/server"]
