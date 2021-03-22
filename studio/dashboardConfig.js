export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60591fdc4a615f008ab5bac7',
                  title: 'Sanity Studio',
                  name: 'kanzakicorp-studio',
                  apiId: 'ff1c2a1f-622a-4cd2-a661-3f2f1bc52334'
                },
                {
                  buildHookId: '60591fdcc709500081374b59',
                  title: 'Portfolio Website',
                  name: 'kanzakicorp',
                  apiId: '2ffe8ce1-0961-4c57-a417-797f49615744'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RaigekiCrimson/kanzakiCorp',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://kanzakicorp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
