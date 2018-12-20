import React from 'react';
import Story from '../../../components/Story/Story';
import BackgroundVideo from '../../../components/BackgroundVideo/BackgroundVideo';

// import person1 from '../../../img/nat-8.jpg';
// import person1 from '../../../img/people/phil-arnold.jpg';
// import person2 from '../../../img/nat-9.jpg';
// import person2 from '../../../img/people/IMG_2118.JPG';

import herefordVideo from '../../../img/hereford/hereford.mp4';

import './StoriesBlock.scss';

class StoriesBlock extends React.Component {
  state = {
    stories: []
  };
  componentDidMount() {
    fetch('./stories.json')
      .then(response => response.json())
      .then(json => this.setState({ stories: json.stories }));
  }
  render() {
    return (
      <section className="stories-block">
        <BackgroundVideo videoMp4={herefordVideo} />
        <div className="u-center-text u-margin-bottom-large">
          <h2 className="heading-secondary">Our latest messages</h2>
        </div>

        {this.state.stories.map(story => (
          <div className="row" key={story.id}>
            <Story heading={story.title} person={{ name: story.speaker.name, img: story.speaker.imageURL }}>
              {story.description}
            </Story>
          </div>
        ))}

        {/*<div className="row">
          <Story heading="The importance of being ernest" person={{ name: 'Phil Arnold', img: person1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque hic ab dolorum debitis nulla rerum sint culpa consectetur! Vero optio saepe, nulla tempore eveniet
            quas earum dolores ratione nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Story>
        </div>

        <div className="row">
          <Story heading="Make time" person={{ name: 'Phil Hagger', img: person2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque hic ab dolorum debitis nulla rerum sint culpa consectetur! Vero optio saepe, nulla tempore eveniet
            quas earum dolores ratione nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Story>
        </div>*/}

        <div className="u-center-text">
          <div className="btn-text">Listen to more messages &rarr;</div>
        </div>
      </section>
    );
  }
}

export default StoriesBlock;
