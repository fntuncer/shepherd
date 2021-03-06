import preact from 'preact';
import ShepherdButton from './shepherd-button';

const { Component } = preact;

export default class ShepherdFooter extends Component {
  render(props) {
    const { classPrefix, step, styles } = props;
    const { buttons } = step.options;

    return <footer className={styles.footer.trim()}>
      {this._addButtons(buttons, classPrefix, styles)}
    </footer>;
  }

  _addButtons(buttons, classPrefix, styles) {
    if (buttons) {
      return buttons.map((config) => {
        return <ShepherdButton classPrefix={classPrefix} config={config} styles={styles}/>;
      });
    }

    return null;
  }
}
