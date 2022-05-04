export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62730de7d0ddbc1ecb2350cc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-87c3bwb1',
                  apiId: 'f7f221ff-b7ec-40a1-8fa0-a4cbede880a0'
                },
                {
                  buildHookId: '62730de8ab918a1e35270321',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qsumsgcd',
                  apiId: '1c3fdea3-52f0-43cd-872b-7a5617752142'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mutuotakelvin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qsumsgcd.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
