export default defineAppConfig({
  ui: {
    colors: {
      primary: 'lime',
      neutral: 'zinc',
    },
    breadcrumb: {
      variants: {
        active: {
          true: {
            link: 'text-(--ui-neutral) font-semibold',
          },
        },
      },
    },
  },
})
