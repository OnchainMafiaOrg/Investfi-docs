import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd4f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '3c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8b6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '7bc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9dd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0d7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '185'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bbc'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e6e'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'b46'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '636'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '769'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'bce'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '21f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '086'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '77f'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'd51'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a3f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3f4'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'df4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '884'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd65'),
            routes: [
              {
                path: '/docs/FAQ',
                component: ComponentCreator('/docs/FAQ', '3d2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/Introduction',
                component: ComponentCreator('/docs/Introduction', '564'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/Investment Plans',
                component: ComponentCreator('/docs/Investment Plans', 'f93'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/LBP on fjordfoundry',
                component: ComponentCreator('/docs/LBP on fjordfoundry', 'c4a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/Roadmap',
                component: ComponentCreator('/docs/Roadmap', 'e3e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/Tokenomics',
                component: ComponentCreator('/docs/Tokenomics', '2a4'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2f8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
