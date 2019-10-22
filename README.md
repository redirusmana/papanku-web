# Papanku 2018

Papanku Website with React. Created using create-react-app

## Requirement

- Node.js >= v8
- Yarn / npm

## How To

### Setup

Run `yarn install` or `npm install` to install dependencies and you are ready to role

### Development Environment

- Make sure Papanku API Backend server is running, default to: 'http://localhost:8000'
- Check `apiUrl` inside `src/config/general.js`, and sync backend api url value in `development` object key
- Run `yarn start` or `npm start` to start development server

### Staging Environment

- Make sure Papanku API Backend server is running, default to: 'https://backpapanku.agranara.com'.
- Check `apiUrl` inside `src/config/general.js` and sync backend api url valie in `staging` object key
- Run `yarn run build-js` or `npm run build-js` to build staging static files
- Serve files from `build` folder

  - Using Apache:

    - Copy files inside `build` folder to staging public asset (eg: `/var/www/papanku2018-site`)
    - Make sure virtual host setting is pointing to right assets and url domain is synced with `apiUrl` that defined before

## Notes

All builded site should be pushed to other repository [Papanku2018-site](http://206.189.41.47/r_e_d_d/Papanku2018-site) to avoid installing unnecessary package that can be run from development phase (eg: installing node.js, run npm install, run npm build).
The other repository contains 2 branch for respective environment, excluding 'development' environment:

- Master: for production build
- Staging: for staging build

## License

Agranara, 2018-\*
