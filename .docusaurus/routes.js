import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c80'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'cee'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '457'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'cd3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b82'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '9d9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4c2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '60e'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'aa4'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '1d0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '4d1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '875'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '654'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '4a3'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '9c3'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'caa'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '6c9'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '7c1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8b4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '8d4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '363'),
            routes: [
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
    component: ComponentCreator('/', '716'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
