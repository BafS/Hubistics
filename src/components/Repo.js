import React, { Component } from 'react'
import Reactable, {Table} from 'reactable'

import { GithubAPI } from './../actions/index'
import { UserInput } from './UserInput'
import { Grid } from 'react-bootstrap'
import { Treemap } from 'react-d3'
import Chartjs, { Radar as RadarChart } from 'react-chartjs'

export class Repo extends Component {

  state = {
    userIndex: 0,
    disabled: true,
    users: [],
    infos: [],
    allLangs: [],
    data: {
      labels: [],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: []
        }
      ]
    }
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.api = new GithubAPI
  }

  handleChange() {
    let length = this.refs.input.getValue().length
    if (length >= 3) {
      this.setState({disabled: false})
    } else {
      this.setState({disabled: true})
    }
  }

  add(username) {
    if (!this.state.users.includes(username)) {

      let iniData = {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: []
      }

      let user = {
        name: username,
        forks: 0,
        watchers: 0,
        openIssues: 0,
        size: 0,
        stargazers: 0, // _count
        languages: {}
      }

      this.api.getRepos(username, (err, repos) => {
        repos.forEach((repo) => {
          user.forks += repo.forks
          user.watchers += repo.watchers
          user.openIssues += repo.open_issues
          user.stargazers += repo.stargazers_count
          user.size += repo.size
          if (user.languages[repo.language]) {
            ++user.languages[repo.language]
          } else {
            user.languages[repo.language] = 1
          }
        })

        user.languagesChart = []
        for (let prop in user.languages) {
          if (user.languages.hasOwnProperty(prop)) {
            user.languagesChart.push({label: prop, value: user.languages[prop]})
          }
        }

        let state = this.state

        state.users.push(username)
        state.infos.push(user)

        for (let lang in user.languages) {
          if (!state.allLangs.includes(lang)) {
            state.allLangs.push(lang)
          }
        }

        state.data.labels = state.allLangs

        let index = state.userIndex
        console.log(index)

        if (!state.data.datasets[index]) {
          iniData.label = username
          // iniData.label = fillColor
          state.data.datasets[index] = iniData
        }

        for (let j = 0; j < index + 1; ++j) {
          state.data.datasets[j].data = []
          state.allLangs.forEach((lang) => {
            if (state.infos[j].languages[lang]) {
              state.data.datasets[j].data.push(state.infos[j].languages[lang])
            } else {
              state.data.datasets[j].data.push(0)
            }
          })
        }

        ++state.userIndex
        this.setState(state)
      })
    }
  }

  render() {

    return (
      <Grid>
        <h1>Repositories comparaison</h1>
        <UserInput ref="input" value="" placeholder="Username" onClick={this.add.bind(this)} />

        <Table className="table table-hover" data={this.state.infos}
        columns={['name', 'forks', 'watchers', 'openIssues', 'size', 'stargazers']} ></Table>

        <RadarChart data={this.state.data} options={{responsive: true}} redraw />

        <h2>Treemaps</h2>
        {this.state.infos.map((info) => {
          console.log(info.languagesChart)
          return (
            <Treemap key={info.name}
              data={info.languagesChart}
              width={450}
              height={280}
              textColor="#484848"
              fontSize={11}
              title={info.name}
              hoverAnimation={false}
            />
          )
        })}
      </Grid>
    )
  }
}
