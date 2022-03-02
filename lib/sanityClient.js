import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'vobcthpu',
  dataset: 'production',
  apiVersion: '2022-02-03',
  token:
    'skYu8vPk4SS7Sqjp69ANA8YT7txA6BCDCJULCwSf138jVYjweeoN0VgBIqUZfLf9BbmCLTj3sovxVwf7PJFF2NCJuf00gw7ExCpst3NjJHfWq4uQGcjgHOdF4mzYt1zocRsUTc8OPQNrQZQ17SA8S46vv8X1Kx6pNi4WXWN53PC7gLDz4wb2',
  useCdn: false,
})
