import {Component} from 'react'
class Row extends Component {
  render() {
    return <div className="row">{this.props.children}</div>
  }
}
export default Row
