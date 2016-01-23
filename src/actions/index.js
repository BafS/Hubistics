'use strict'

let Github = require('github-api')

export class GithubAPI {

  constructor() {
    // let conf = {
    //   username: '--',
    //   password: '--'
    // }
    let conf = {}
    let github = new Github(conf)
    this.user = github.getUser()
  }

  getRepos(username, cb) {
    this.user.userRepos(username, cb)
    // this.user.orgRepos(username, cb)
  }
}
