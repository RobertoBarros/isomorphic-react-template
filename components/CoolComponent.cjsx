React = require('react')

CoolComponent = React.createClass
  render: ->
    <div className="neat-component">
      <p>is this component neat? {@props.neat}</p>
      <hr/>
    </div>

module.exports = CoolComponent