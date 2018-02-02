const dataService = require('./server/dataService');
dataService.load('relics');
console.log(dataService);

labels:
    - "traefik.backend=plex"
    - "traefik.frontend.rule=Host:plex.robinlebert.fr"
    - "traefik.enable=true"
    - "traefik.port=32400"
