import React from 'react';
// import { Link } from 'react-router-dom';

import './ConnectBlock.scss';

import {
  RotatingCard,
  CardFront,
  CardBack
} from '../../../components/Card/Card';
import { WhiteButton, GreenButton } from '../../../components/Button/Button';
import {
  ModalSplit,
  ModalLeftSplit,
  ModalRightSplit
} from '../../../components/Modal/Modal';

import photoAlphaTop from './img/alpha-promo-md.jpg';
import photoAlphaBottom from './img/alpha-promo-2.jpg';

import photoSchoolTop from './img/school-md.jpg';
import photoSchoolBottom from './img/school-of-ministry-md.png';

const ConnectBlock = () => (
  <React.Fragment>
    <section className='options' id='connect'>
      <div className='u-center-text u-margin-bottom-large'>
        <h2 className='heading-secondary'>Connect with us</h2>
      </div>
      <div className='row'>
        <div className='col-1-of-3'>
          <RotatingCard>
            <CardFront className='card-front'>
              <div className='card-front__picture card-front__picture--1'>
                &nbsp;
              </div>
              <h4 className='card-front__heading'>
                <span className='card-front__heading-span card-front__heading-span--1'>
                  The Alpha Course
                </span>
              </h4>
              <div className='card-front__details'>
                <ul>
                  <li>Got questions?</li>
                  <li>Explore Faith</li>
                  <li>Tuesdays at 7:30pm</li>
                  <li>for 8 weeks</li>
                  <li>Free Food included!</li>
                </ul>
              </div>
            </CardFront>
            <CardBack className='card-back card-back--1'>
              <div className='card-back__cta'>
                <div className='card-back__price-box'>
                  <p className='card-back__price-only'>Started</p>
                  <p className='card-back__price-value'>January 22nd</p>
                </div>
                <a href='#alpha'>
                  <WhiteButton>Find out more</WhiteButton>
                </a>
              </div>
            </CardBack>
          </RotatingCard>
        </div>
        <div className='col-1-of-3'>
          <RotatingCard>
            <CardFront className='card-front'>
              <div className='card-front__picture card-front__picture--2'>
                &nbsp;
              </div>
              <h4 className='card-front__heading'>
                <span className='card-front__heading-span card-front__heading-span--2'>
                  School of Ministry
                </span>
              </h4>
              <div className='card-front__details'>
                <ul>
                  <li>Thursdays at 6:30pm</li>
                  <li>Go deeper & learn more</li>
                  <li>Stretch your faith</li>
                  <li>Be challenged!</li>
                  <li>£25 per term</li>
                </ul>
              </div>
            </CardFront>
            <CardBack className='card-back card-back--2'>
              <div className='card-back__cta'>
                <div className='card-back__price-box'>
                  <p className='card-back__price-only'>Next Term starts</p>
                  <p className='card-back__price-value'>September 2019</p>
                </div>
                <a href='#school-of-ministry'>
                  <WhiteButton>Find out More</WhiteButton>
                </a>
              </div>
            </CardBack>
          </RotatingCard>
        </div>
        <div className='col-1-of-3'>
          <RotatingCard>
            <CardFront className='card-front'>
              <div className='card-front__picture card-front__picture--3'>
                &nbsp;
              </div>
              <h4 className='card-front__heading'>
                <span className='card-front__heading-span card-front__heading-span--3'>
                  Little Stars
                </span>
              </h4>
              <div className='card-front__details'>
                <ul>
                  <li>Mondays at 10am</li>
                  <li>Newborn -> School</li>
                  <li>Soft play, craft & music</li>
                  <li>Free Tea and coffee</li>
                  <li>£1 per adult</li>
                </ul>
              </div>
            </CardFront>
            <CardBack className='card-back card-back--3'>
              <div className='card-back__cta'>
                <div className='card-back__price-box'>
                  <p className='card-back__price-only'>Join us</p>
                  <p className='card-back__price-value'>Every Monday</p>
                </div>
                <a href='#little-stars'>
                  <WhiteButton>Find out more</WhiteButton>
                </a>
              </div>
            </CardBack>
          </RotatingCard>
        </div>
      </div>
      {/*
      <div className="u-center-text u-margin-top-large">
        <Link to="/connect">
          <GreenButton>More ways to connect</GreenButton>
        </Link>
      </div> */}
    </section>

    <ModalSplit id={'alpha'} title='Alpha Course'>
      <ModalLeftSplit photoTop={photoAlphaTop} photoBottom={photoAlphaBottom} />
      <ModalRightSplit title='The Alpha Course' titleClass='alpha__heading'>
        <h3 className='heading-tertiary'>The course</h3>
        <p className='alpha'>
          Alpha is a series of sessions exploring the Christian faith. Each talk
          looks at a different question around faith and is designed to create
          conversation. Alpha is run all around the globe, and everyone's
          welcome. It runs in cafés, churches, universities, homes—you name it.
          No two Alphas look the same, but generally they have three key things
          in common: food, a talk and good conversation.
        </p>

        <h3 className='heading-tertiary u-margin-top-medium'>The Format</h3>
        <p>
          First up there's: <span className='alpha__emphasis'>Food</span>
          <br />
          Then a: <span className='alpha__emphasis'>Talk</span>
          <br />
          Followed by: <span className='alpha__emphasis'>Discussion</span>
        </p>
      </ModalRightSplit>
    </ModalSplit>

    <ModalSplit id={'school-of-ministry'} title='School of Ministry'>
      <ModalLeftSplit
        photoTop={photoSchoolTop}
        photoBottom={photoSchoolBottom}
      />
      <ModalRightSplit title='School of Ministry'>
        <h3 className='heading-tertiary'>The course</h3>
        <p>
          Our main theme for the coming year will be APPRENTICES OF JESUS. As we
          observe the life and ministry of Jesus, its clear that preparing his
          apprentices to engage in his mission, sharing his heart, proclaiming
          the message of the kingdom with power; making a difference as salt and
          light in their world; was an absolute priority. During our time
          together we will explore a range of Bible truths with practical
          application to life and ministry.
        </p>

        <h3 className='heading-tertiary u-margin-top-medium'>The Format</h3>
        <p>
          Thursday nights begin with worship followed by opportunities to listen
          and respond to the Holy Spirit. Teaching sessions include discussion
          and feedback with the aim of acquiring greater clarity and depth in
          our understanding of the Message of the Bible and the Mission of God
          in our world. Monthly Focus Days involve visiting speakers,
          ministering in three sessions from 9am to 3pm on a Saturday.
        </p>
        <div className='u-margin-top-medium'>
          <a href='mailto:school@theoasis.church'>
            <GreenButton>Apply now</GreenButton>
          </a>
        </div>
      </ModalRightSplit>
    </ModalSplit>

    <ModalSplit id={'little-stars'} title='Little Stars'>
      <ModalLeftSplit
        photoTop={photoSchoolTop}
        photoBottom={photoSchoolBottom}
      />
      <ModalRightSplit title='Little Stars'>
        <h2 className='heading-secondary u-margin-bottom-small'>
          Little Stars
        </h2>
      </ModalRightSplit>
    </ModalSplit>
  </React.Fragment>
);

export default ConnectBlock;
