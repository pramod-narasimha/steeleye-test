import React from 'react'

class SomeListComponent extends React.Component {

  /**
   * 
   * super(props) must be called on the first line,
   * if the component is recieving props
   */
  // constructor (props) {
  //   this.state = { items: props.items }
  // }
  constructor (props) {
    super(props)
    this.state = { items: props.items }
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.items !== this.props.items
  }

  /**
   * handleClick should have been arrow function or the
   * function should have bind 'this'
   */
  // handleClick (index) {
  //   this.props.onClick(index)
  // }
  handleClick = (index) => {
    this.props.onClick(index)
  }

  /**
   * renderElement should have been arrow function or the
   * function should have bind 'this'
   */
  // renderElement (item, index) {
  //   return <li onClick={() => this.handleClick(index)}>{item.text}</li>
  // }
  renderElement = (item, index) => {
    return <li onClick={() => this.handleClick(index)}>{item.text}</li>
  }

  render () {
    return (
      <ul style={{ backgroundColor: 'red', height: 100 }}>
        {this.state.items.map((item, i) => this.renderElement(item, i))}
      </ul>
    )
  }
}

export default SomeListComponent;