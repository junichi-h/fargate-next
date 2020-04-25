FROM node:10-alpine
ENV HOST 0.0.0.0
RUN mkdir -p /app
COPY . /app
WORKDIR /app

ARG ENV
ENV ENV $ENV

RUN yarn && yarn prod

EXPOSE 3000

CMD ["yarn", "start"]