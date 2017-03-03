// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    portalApi: {
        url: 'http://127.0.0.1/dm-portal-api/web/app_dev.php/',
        oauth: {
            client: {
                id: '1_2i01pqc5pdc0oowk0kogc48cggk800sscos0cgk84wg4kg4wo8',
                secret: '2sax9l393l4wos0ogo8ccoco0g4040o4c880cg008w8wo8gw80',
            },
        },
    },
};
