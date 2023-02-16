import Component from '../../../base/Component';

import CustomEvents from '../../../enums/CustomEvents';
import Routes from '../../../enums/Routes';
import Tags from '../../../enums/Tags';

type Props = {
  text: 'Next' | 'Prev';
};

interface PaginationBtn {
  currentView: Routes.garage | Routes.winners;
}

abstract class PaginationBtn extends Component<Tags.button> {
  constructor({ text }: Props) {
    super({
      tagName: Tags.button,
      classList: ['btn'],
      nodeProps: {
        disabled: 'true',
        textContent: text,
      },
    });
    this.on(CustomEvents.changeView, this.onViewChange);
  }
  private onViewChange = <T>(arg: T): void => {
    const { node } = this;
    if (node.classList.contains('hide')) {
      node.classList.remove('hide');
    }
    if (arg === Routes.garage) {
      this.setGarageState();
    }

    if (arg === Routes.winners) {
      this.setWinnersState();
    }

    if (arg !== Routes.garage && arg !== Routes.winners) {
      this.node.classList.add('hide');
    }
  };

  // eslint-disable-next-line class-methods-use-this
  protected setGarageState = (): void => {};

  // eslint-disable-next-line class-methods-use-this
  protected setWinnersState = (): void => {};
}

export default PaginationBtn;
