FROM node:12.19.0 as build

WORKDIR /app-build

COPY . .

RUN npm install

RUN npm run build

FROM node:12.19.0-alpine3.12

RUN adduser -D jeff

USER jeff

WORKDIR /app

COPY --from=build /app-build/dist/bundle.js .

EXPOSE 3000

CMD ["node", "bundle"]
