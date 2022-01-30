import {Octokit} from '@octokit/rest';
import 'dotenv/config';

const octokit = new Octokit({
    auth:process.env.GITHUB_TOKEN
});


(async function run(){
    const response = await octokit.rest.issues.addAssignees({
        owner:'bdougie',
        repo:'live'
    });
    console.log(response);
})();

octokit.rest.repos
  .listForOrg({
    org: "octokit",
    type: "public",
  })
  .then(({ data }) => {
    // handle data
    console.log(data);
});