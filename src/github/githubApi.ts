import { GithubRepo, GithubUser } from "./github";

export function getRepos(user: string) {
    return fetch(`https://api.github.com/users/${user}/repos?per_page=100`)
      .then(resp => resp.json())
      .then(body => <GithubRepo[]>body);
}

export function getContributors(owner: string, repo: string) {
  return fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`)
      .then(resp => resp.json())
      .then(body => <GithubUser[]>body);
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
