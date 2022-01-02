# Goodbrother Serverless Function

Vercel Serverless Function for running [Goodbrother](https://github.com/stscoundrel/goodbrother). Exposes endpoint for listing open pull requests in repositories of given Github user. For example:

`https://goodbrother.vercel.app/api/repos/stscoundrel?secret=SECRET_HERE`
`https://goodbrother.vercel.app/api/pulls/stscoundrel?secret=SECRET_HERE`

Returns a list like:

```javascript
[
  {
    "name": "stscoundrel/goodbrother",
    "pullRequests": [
      {
        "id": 1088227478,
        "name": "Fixture PR for integration tests",
        "link": "https://github.com/stscoundrel/goodbrother/pull/18",
        "isDependabot": false,
        "repository": "stscoundrel/goodbrother"
      }
    ]
  },
  {
    "name": "stscoundrel/runes",
    "pullRequests": [
      {
        "id": 1075530244,
        "name": "Bump next-pwa from 5.4.0 to 5.4.4",
        "link": "https://github.com/stscoundrel/runes/pull/108",
        "isDependabot": true,
        "repository": "stscoundrel/runes"
      },
      {
        "id": 1067868936,
        "name": "Bump eslint-plugin-react-hooks from 4.2.0 to 4.3.0",
        "link": "https://github.com/stscoundrel/runes/pull/105",
        "isDependabot": true,
        "repository": "stscoundrel/runes"
      },
      {
        "id": 1067868852,
        "name": "Bump eslint-config-next from 12.0.2 to 12.0.4",
        "link": "https://github.com/stscoundrel/runes/pull/104",
        "isDependabot": true,
        "repository": "stscoundrel/runes"
      },
    ]
  },
  {
    "name": "stscoundrel/gatsby-source-plugin-zoega",
    "pullRequests": [
      {
        "id": 1068208284,
        "name": "Bump eslint-config-airbnb-base from 14.2.1 to 15.0.0",
        "link": "https://github.com/stscoundrel/gatsby-source-plugin-zoega/pull/18",
        "isDependabot": true,
        "repository": "stscoundrel/gatsby-source-plugin-zoega"
      }
    ]
  },
  {
    "name": "stscoundrel/gatsby-source-cleasby-vigfusson",
    "pullRequests": [
      {
        "id": 1067800663,
        "name": "Bump eslint-config-airbnb-base from 14.2.1 to 15.0.0",
        "link": "https://github.com/stscoundrel/gatsby-source-cleasby-vigfusson/pull/23",
        "isDependabot": true,
        "repository": "stscoundrel/gatsby-source-cleasby-vigfusson"
      }
    ]
  },
]
```

##### Why is it hidden behind a secret?

This is for my own use. Feel free to copy, fork, deploy and modify your own version as needed. Or just use [Goodbrother](https://github.com/stscoundrel/goodbrother) library
