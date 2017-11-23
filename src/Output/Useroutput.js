import React from 'react';
import './output.css';

const useroutput = (props) => {
  return(
    <div className="output">
      <p><strong>{props.userName}</strong> is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.</p>

      <p>Also <strong>{props.userName} </strong> is the bomb when it comes to web development.</p>

    </div>
  )
}

export default useroutput;
