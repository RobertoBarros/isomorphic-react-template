import React from 'react';

const Application = React.createClass({
  render: function() {
    
    require('./style/main.scss');

    return (
      <div className="application">
        <h1>Hello World</h1>
        <input />
        <pre>{this.props.url}</pre>
      </div>
    );
  }
});

export default Application;
