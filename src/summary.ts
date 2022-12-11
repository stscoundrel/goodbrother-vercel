import { PullRequest } from 'goodbrother/dist/models/pull-request';
import { RepositorySummary } from 'goodbrother/dist/models/repository';

interface GoodbrotherResponse {
  repos: number
  pulls: number
  list: PullRequest[] | RepositorySummary[]
}

export const summarizePRs = (openPRs: PullRequest[]): GoodbrotherResponse => {
  const repos = new Set();

  openPRs.forEach((pr) => repos.add(pr.repository));

  return {
    repos: repos.size,
    pulls: openPRs.length,
    list: openPRs,
  };
};

// eslint-disable-next-line max-len
export const summarizeRepos = (repos: RepositorySummary[], openPRs: PullRequest[]): GoodbrotherResponse => ({
  repos: repos.length,
  pulls: openPRs.length,
  list: repos,
});
