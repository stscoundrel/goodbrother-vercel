import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getPullRequestsByUser, groupPullRequestsByRepository } from 'goodbrother';
import { authenticate } from '../../src/auth';
import { summarizeRepos } from '../../src/summary';

export default async (request: VercelRequest, response: VercelResponse) => {
  const { username, secret } = request.query;

  if (typeof secret === 'string' && authenticate(secret)) {
    if (typeof username === 'string') {
      const openPRs = await getPullRequestsByUser(username);
      const grouped = groupPullRequestsByRepository(openPRs);
      const summary = summarizeRepos(grouped, openPRs);

      response.status(200).send(summary);
    }
  } else {
    response.status(401).send('Unauthorized. Provide "secret" as query param');
  }
};
