export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60cc56286844ffa3b94f2b7c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dvvaf6ct',
                  apiId: 'a3734994-3435-4247-bdd4-d13c06b17da1'
                },
                {
                  buildHookId: '60cc5628b29711af2eeec3b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t6pub2r2',
                  apiId: '5ec554a1-9df7-453c-bbe4-61f6a2de767a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Paul-Okello/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t6pub2r2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
