import React from 'react';
import PaperFold from './paperfold/PaperFold';
import PaperFoldItem from './paperfold/PaperFoldItem';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div style={{
        width:'500px',
        margin:'auto'
      }}>
        <button onClick={() => this.myPaper.toggle()}>toggle</button><br/>
        <PaperFold ref={ref => this.myPaper = ref}>
          <PaperFoldItem>
            This is some sample text. Lorem ipsum Commodo dolor amet proident ut anim sint nisi non dolore dolor eiusmod culpa nulla velit adipisicing dolor dolor ad ut amet in.
          </PaperFoldItem>
          <PaperFoldItem>
            This is some sample text. Lorem ipsum Commodo dolor amet proident ut anim sint nisi non dolore dolor eiusmod culpa nulla velit adipisicing dolor dolor ad ut amet in.
          </PaperFoldItem>
          <PaperFoldItem>
            This is some sample text. Lorem ipsum Commodo dolor amet proident ut anim sint nisi non dolore dolor eiusmod culpa nulla velit adipisicing dolor dolor ad ut amet in.
          </PaperFoldItem>
          <PaperFoldItem>
            This is some sample text. Lorem ipsum Commodo dolor amet proident ut anim sint nisi non dolore dolor eiusmod culpa nulla velit adipisicing dolor dolor ad ut amet in.
          </PaperFoldItem>
        </PaperFold>
      </div>
    )
  }
}
