import * as React from "react";
import { GithubRepo, GithubUser } from "../github/github";
import { getRepos, getContributors, getRandomInt } from "../github/githubApi";
import { Option, Some, None, O, all } from "typescriptx";

export interface GithubProps {
    user: string;
}

interface GithubState {
    repos: Option<GithubRepo[]>,
    contributors: Option<GithubUser[]>,
    repoIndex: Option<number>
}

export class Github extends React.Component<GithubProps, GithubState> {

    constructor(props: GithubProps){
        super(props);
        // set initial state
        this.state = {
            repoIndex: None(),
            repos: None(),
            contributors: None()
        };
    }

    componentDidMount() {
        getRepos(this.props.user)
            .then(repos => {
                const randomIndex = getRandomInt(0, repos.length);
                const randomRepo = repos[randomIndex];
                this.setState({
                    repoIndex: Some(randomIndex),
                    repos: Some(repos)
                });
                
                getContributors(randomRepo.owner.login, randomRepo.name)
                    .then(contributors => {
                        this.setState({
                            contributors: Some(contributors)
                        });
                    });
            });
    }

    render() {
        const repos = this.state.repos;
        const contributors = this.state.contributors;
        const index = this.state.repoIndex;

        const result = all([contributors, repos, index]);
        
        // Option<>[]
        // Option<[]>

        return (
            <div className="card">
                {O(result).map(([users, repos, repoIndex]) => {
                    return (
                        <div>
                            <div className="card-header">
                                {repos[repoIndex].name}
                            </div>
                            <div className="card-block">
                                Contributors:
                                {users.map(user => (
                                <div key={user.id}>{user.login}</div>
                                ))}
                            </div>
                        </div>
                    );
                }).getOrElse(() => (
                  <div>loading...</div>
                ))}
            </div>
        );
    }
}