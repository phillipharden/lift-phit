# GitHub Workflow

Every company has its own defined workflow describing the various steps of how to contribute to a project. This document sets that standard for this course.

## Pull Requests (PRs)
Pull requests (also known as "PRs") are identical to the git merge command except that instead of happening locally, hidden from everyone, the merge will occur on Github, in the light of others who may be involved with the project.


### Final Work
The "Master" or "Main" branch is considered final work and code should only be added to it when the latest "release" is ready to go live. The term "go live" is often used to mean work is ready to be seen publicly. In general, a release is made up of an agreed-to set of product features, updates, or functionality. In this class, you will only merge a PR when a release has the approval to go live. If you are unsure when to create a PR and merge to Master, reach out to your instructors for additional direction and guidance.


### Milestones
Each week is considered a milestone in this course. At the end of each milestone. It's common practice for a developer to close any issues related to the open PR to signify which action items were fully resolved. The PR can include references to issues for additional context on work that got done.


### Review Changes
A pull request may result in a "product owner" or team member asking for additional changes prior to merging this work into the intended branch. Changes could be communicated through in-person feedback, on GitHub, or by another agreed to process. After requested changes are made, the developer should notify those involved by making additional comments to the ongoing PR.

While a PR is under review it's possible to continue working on other features by using additional branches. A progression freeze may be implemented in the event Instructors feel the submission falls significantly short of expectations. See Project Requirements assignment for more information. 

Here is an example of how we seek to manage production workflow in this course... 


Workflow

![gitflow.png](gitflow.png)



### Branches
Automation can be hooked into Github that requires a strict usage of branches for ongoing development. We will practice this idea by using branches for development in this course as outlined below.

### [Feature] Branch
Every feature worked on should be developed in its own "feature" branch. Follow the steps below.

**Step 1:** Clone your repository to your local computer

**Step 2:** Create a stage and dev branch on GitHub following the steps outlined in this article: [Creating and deleting branches within your repository](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)

After creating these branches, you can begin the feature branch workflow.

Getting Started. 

Pull down all the new branches

`git pull`

Checkout dev 

New work ALWAYS begins with dev. Switch to the dev branch 

`git checkout dev`

Check for updates (always make sure local dev matches online)

`git pull origin dev`

-------Begin the Feature Branch Workflow!-------

As you work, remember to use branches! 
ALL new branches should stem from the dev branch, NOT master! 
Follow these steps if you need to begin working on a new branch/feature... 

Create a new branch with a meaningful name (related to the work to be done)
The command below creates the branch and switches to it
git checkout -b New_Feature_Branch_Name

Make a small edit to the main README or any other file in the local repo
Add this latest change to your commit history using... 

`git add .   `  

`git commit -m 'initial commit' ` 

After the initial commit, synch this branch by pushing edits to GitHub
The command below is only needed for the first push
All future pushes from this feature branch are simply 'git push'

`git push --set-upstream origin New_Feature_Branch_Name`

or

`git push -u origin New_Feature_Branch_Name`


While the latest work is in progress, continue to 'git push' updates to GitHub from this branch. After the feature work has been completed and tested locally to the point this feature is behaving as expected, you can begin the PR process by pushing final edits to **Github**.

Push final Local Commits/Edits to Github

`git push `       

Once final edits are pushed, open a new **Pull Request (PR)** on Github with **base: Dev** <- **compare: NewFeatureBranch_Name** and `reference any issue #s related to this release`. This relation allows all team members to track the history of each week's release. You can do this by using the pound symbol followed by the number of the issue in a comment. Use this PR to do a last-minute spot check on your code within the Files Changed tab, then in the main Conversation tab, select the **Merge Pull Request** button.

>Developers are authorized to merge PRs within Feature Branches, dev, and stage (these branches are also sometimes referred to as "Development" or "Staging"). Normally master is considered a locked down ('Live') branch. In other words, it's the finished and tested work that is ok to ship! Locking down the master branch is a way to ensure users are not effected by application development breakages. In this course you may also have authority to merge to Master after resolving any open issue related to the work in progress. Seek instructor guidance if you are unsure about merging to master.

### Dev
Through the weekly release cycle, the dev branch will be in flux, having new feature branches added and PR'd together which may or may not cause a conflict. The dev branch is more of a holding area that contains the latest unreleased features that have been merged together via PRs. New feature branches should be created from this area so as to minimize conflicts and ensure that each new feature has the most up-to-date codebase.

A PR (base: stage <- compare: dev) should be made early in the weekly release cycle and titled to reflect the latest milestone. This PR will track the changes made to the dev branch this release cycle. Near the end of the release cycle, after re-testing each feature approve this PR and move your release's code into the stage branch.

With this last round of testing on dev if you notice a feature not behaving as expected use the main dev branch to resolve the conflict. However, If the conflict is extensive and you need to majorly overhaul a feature you should checkout the individual feature branch causing the issue and make your modifications there, then follow the PR process to get that code back into dev and retest before PR'ing into stage.


### Stage
This branch represents what should be all proposed features to release and the existing codebase. For each milestone (also known as "release cycle") create a PR (base: master <- compare: stage).

This is the developer's last chance to test and identify any problems. Releasing bugs or broken code to users, or your instructors can result in negative consequences, so utilize this branch/environment to check your submission.

Final Step: PR code from staging into Master.

>Seek instructor guidance if you are unsure about merging to master. The developer's workflow should not be interrupted while awaiting input as they are able to continue with the Github Workflow from Feature Branch -> dev building out the next set of features..

Once features are released into master it is common practice to delete the Feature branch **on GitHub**. This reduces clutter as those branches will likely not see further direct development. This deletion can be handled in the GitHub.com interface under /<REPO_Name>/branches on GitHub or using a command in Terminal...

Delete Remote Branch on Github

`git push --delete origin Feature_Branch_Name `  
  
**Note:** Deleting feature branches is not required in this course. You can experiment with this if you wish, just be sure the feature branch work was actually merged into dev using the PR process first.


### Master
Anything on this branch is considered live to the world. Only work subjected to a thorough quality assurance check beforehand should be PR'd into the master branch. Developers use this workflow to ensure code is production-ready before go-live.









