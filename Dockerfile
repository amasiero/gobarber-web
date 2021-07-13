FROM node:lts as packages
WORKDIR /packages
COPY package.json ./
RUN yarn install

FROM node:lts
LABEL com.andreymasiero.gobarber.authors="Andrey Masiero"
ENV PORT=3000
WORKDIR /app
COPY . ./
COPY --from=packages /packages/node_modules /app/node_modules
ENTRYPOINT yarn start
EXPOSE ${PORT}