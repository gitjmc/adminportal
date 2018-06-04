export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'general.menu.users',
            icon: 'ion-android-person',
            selected: false,
            expanded: false,
            order: 500,
          },
        },
        children: [
          {
            path: 'customers',
            data: {
              menu: {
                title: 'general.menu.users_customers',
              },
            },
          },
          {
            path: 'affilated',
            data: {
              menu: {
                title: 'general.menu.users_affilated',
              },
            },
          },
          {
            path: 'userscompanies',
            data: {
              menu: {
                title: 'general.menu.users_companies',
              },
            },
          },
          {
            path: 'usersall',
            data: {
              menu: {
                title: 'general.menu.users_all',
              },
            },
          },

        ],
      },
      {
       path: 'transactions',  // path for our page
       data: { // custom menu declaration
         menu: {
           title: 'general.menu.transactions', // menu title
           icon: 'ion-cash', // menu icon
           pathMatch: 'prefix', // use it if item children not displayed in menu
           selected: false,
           expanded: false,
           order: 0,
         },
       },
       children: [
         {
           path: 'transactionsclients',
           data: {
             menu: {
               title: 'general.menu.transactions_clients',
             },
           },
         },
         {
           path: 'usersaffilated',
           data: {
             menu: {
               title: 'general.menu.users_affilated',
             },
           },
         },
         {
           path: 'userscompanies',
           data: {
             menu: {
               title: 'general.menu.users_companies',
             },
           },
         },
         {
           path: 'usersall',
           data: {
             menu: {
               title: 'general.menu.users_all',
             },
           },
         },

       ],
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          },
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              },
            },
          },
        ],
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              },
            },
          },
        ],
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          },
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              },
            },
          },
        ],
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'general.menu.ui_features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          },
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'general.menu.typography',
              },
            },
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'general.menu.buttons',
              },
            },
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'general.menu.icons',
              },
            },
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'general.menu.modals',
              },
            },
          },
          {
            path: 'slim',
            data: {
              menu: {
                title: 'Slim loading bar',
              },
            },
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'general.menu.grid',
              },
            },
          },
        ],
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          },
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              },
            },
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              },
            },
          },
        ],
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          },
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              },
            },
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
              },
            },
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
              },
            },
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              },
            },
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          },
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login',
              },
            },
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register',
              },
            },
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          },
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#',
              },
            },
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#',
              },
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://servimax.tn',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank',
          },
        },
      },
    ],
  },
];
