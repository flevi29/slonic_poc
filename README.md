# SQITCH and slonik Node.js example

Requirements:
- Node.js LTS
- [SQITCH](https://sqitch.org/)
- Docker

> NOTE: On Windows SQITCH needs to be installed on
> [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) default
> distribution, and it needs to be run as root user in order to have proper file
> permissions in Windows directories

Run:
```shell
cp .env.example .env
# Edit .env variables as needed

# Linux
docker compose up -d
# Windows
docker-compose up -d

node scripts/set_sqitch_email_name.mjs 'your name' 'your email'
node scripts/set_sqitch_db_target.mjs

# Linux
sqitch deploy
# Windows
wsl -- sudo sqitch deploy

npm run build
npm run start
```
