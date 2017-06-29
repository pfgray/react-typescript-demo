
export interface GithubUser {
    login: string,
    id: number,
    type: string,
    site_admin: false,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string
}

export interface GithubRepo {
    id: number,
    name: string,
    full_name: string,
    private: boolean,
    html_url: string,
    description?: string,
    fork: boolean,
    url: string,
    owner: GithubUser
}