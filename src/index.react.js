import React from 'react';
import FontAwesome from 'react-fontawesome';

const Loading = (props) => {
  let view = props.pending
    ? <FontAwesome name="spinner" spin size="2x"/>
    : <div>
      {props.children}
    </div>;
  return view
}

Loading.propTypes = {
  pending: React.PropTypes.bool,
  children: React.PropTypes.any
}

export default Loading;
