---
title: Strapi
description: A self-hosted version of Strapi using a Postgres database
tags:
  - strapi
  - postgresql
  - cms
  - javascript
---

# Strapi example

This example deploys self-hosted version of [Strapi](https://strapi.io/). Internally it uses a PostgreSQL database to store the data.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/strapi?referralCode=milo)

## ✨ Features

- Strapi
- Postgres

# 💁‍♀️ How to use

## Development Setup

1. Instal Nodejs with a minimum version of 16
2. Install Postgres server locally (v14) and create a database named `postgres` with a username `strapi` and password `password` and start it on port 5432

```
CREATE USER strapi WITH ENCRYPTED PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE postgres TO strapi;
```

3. Clone the repository
4. yarn to install all the dependencies
5. yarn develop to build and start Strapi for development

## 📝 Notes

- After your app is deployed, visit the `/admin` endpoint to create your admin user.
- Railway's filesystem is ephemeral which is why any changes to the filesystem are not persisted between deploys. This is why, this example uses Cloudinary for storage.
- When ever you push the code, ensure `yarn cs export --yes` command was used before writing your commit message.
