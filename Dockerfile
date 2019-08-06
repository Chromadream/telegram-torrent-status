FROM node:carbon-slim as build
ADD . /build_dir
WORKDIR /build_dir
RUN yarn && yarn build

FROM gcr.io/distroless/nodejs
COPY --from=build /build_dir/node_modules /app/node_modules
COPY --from=build /build_dir/dist /app
WORKDIR /app
EXPOSE 3000
CMD ["index.js"]
