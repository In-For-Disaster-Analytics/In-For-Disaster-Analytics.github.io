const routes = [
  {
    path: "",
    component: () => import('layouts/SitesLayout.vue'),
    children: [
      { path: "", component: () => import('pages/IndexPage.vue') },
      { path: '/Philosophy', component: () => import('pages/PhilosophyPage.vue') },
      { path: '/ConceptModel', component: () => import('pages/ConceptModelPage.vue') },
      { path: '/Workflow', component: () => import('pages/WorkflowPage.vue') },
      { path: '/Projects', component: () => import('pages/ProjectsPage.vue') },
      { path: '/TestPage', component: () => import('pages/TestPage.vue') },
      { path: '/Static', component: () => import('pages/StaticPage.vue') },
    ]
  },
  {
    path: "/quasar",
    component: () => import("layouts/MainLayout.vue"),
    children: [
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
