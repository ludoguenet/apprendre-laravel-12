export default defineAppConfig({
  ui: {
    colors: {
      primary: 'lime',
      secondary: 'sky',
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
