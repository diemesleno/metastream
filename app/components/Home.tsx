import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const { productName, version } = require('package.json');

import styles from './Home.css';
import { TitleBar } from 'components/TitleBar';
import LayoutMain from 'components/layout/Main';
import { Icon } from 'components/Icon';

interface IProps {}

export default class Home extends Component<IProps> {
  render() {
    const gitv = `${process.env.GIT_BRANCH}@${process.env.GIT_COMMIT}`;
    return (
      <LayoutMain className={styles.container}>
        <section>
          <header className={styles.header}>
            <h1>{productName}</h1>
            <h3>
              Pre-alpha v{version} ({gitv})
            </h3>
            <h3>{process.env.NODE_ENV === 'production' ? 'Production' : 'Development'} build</h3>
          </header>
          <ul>
            <li>
              <Link to="/lobby/create" className={styles.btn}>
                <Icon name="play" />
                <span>Start Session</span>
              </Link>
            </li>
            <li>
              <Link to="/servers" className={styles.btn}>
                <Icon name="search" />
                <span>Find Session</span>
              </Link>
            </li>
          </ul>
        </section>
      </LayoutMain>
    );
  }
}
