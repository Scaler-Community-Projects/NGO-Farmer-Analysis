
Contributing to Ngo-Farmer-Analysis

  When contributing to this repository, please first discuss the change you wish to make on issue or Front-end/Back-end channels on the Mattermost app.

* To make any changes, fork the repository.
* clone your forked repo.
* run this command on your local repo git remote add upstream https://github.com/Scaler-Community-Projects/NGO-Farmer-Analysis
* Add your changes to your forked repo, please ensure that the project builds properly with the new changes.
* Once that's done, ALWAYS create a PR to the Development branch of the main repository.
* Post the PR on the relevant channel in the app for the code reviewers to review the PR and approve it.


If a PR is made to the master branch, it will be not be approved but deleted.

IMPORTANT
whenever you need changes from the main repo(Scaler-Community-Projects/NGO-Farmer-Analysis) or before working on new changes get the latest changes.
you can do so by performing these steps

1) git fetch upstream
2) git merge upstream/`<branch name>`
3) git push origin `<branch name>`


Commit Messages
---------------

Please format commit messages as follows (based on [A Note About Git Commit Messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)):

* Summaize your changes (What changes are made)
* Put a small description (Why those changes are made)


## DOs and DON'Ts

Please do:

* **DO** make small changes and commit them regularly.
* **DO** include tests when adding new features. 

Please do not:

* **DON'T** make PRs for style changes.
* **DON'T** surprise us with big pull requests.
* **DON'T** commit changes that break the build.
