import * as React from "react";
import { GithubRepo, GithubUser } from "../github/github";
import { getRepos, getContributors } from "../github/githubApi";
import { Option, Some, None, O, all } from "typescriptx";

export interface GithubProps {
    user: string;
}

interface GithubState {
    repos: Option<GithubRepo[]>
    test: Option<string>
}

export class Github extends React.Component<GithubProps, GithubState> {

    constructor(props: GithubProps){
        super(props);
        // set initial state
        this.state = {
            repos: None(),
            test: None()
        };
    }

    componentDidMount() {
        var myPromise = getRepos(this.props.user)

        const {repos, test} = this.state;
        const allOs = all([repos, test]);
        O(allOs).map(([repos, test]) => {
            repos
        })

        myPromise.then(repos => {
            this.setState({
                repos: Some(repos)
            });
        })
          
    }

    render() {
        const {repos} = this.state;

        const op = O(repos).map(
                    a => a.map(repo => (
                        <div key={repo.id}>{repo.name} - {repo.description}</div>
                    ))
                );

        return (
            <div className="card">
                {op.getOrElse(() => [<div>loading</div>]))}
            </div>
        );
    }
}