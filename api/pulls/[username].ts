import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getPullRequestsByUser } from 'goodbrother';
import { authenticate } from '../../src/auth';
import { summarizePRs } from '../../src/summary';

export default async (request: VercelRequest, response: VercelResponse) => {
  const { username, secret } = request.query;

  if (typeof secret === 'string' && authenticate(secret)) {
    if (typeof username === 'string') {
      const openPRs = await getPullRequestsByUser(username);

      response.status(200).send(summarizePRs(openPRs));
    }
  } else {
    response.status(401).send('Unauthorized. Provide "secret" as query param');
  }
};
