import Component from '../factory/Component.js';
import { SECTION_SELECTOR } from '../share/selector.js';
import {
  optionTemplate,
  sectionDetailTableTemplate,
} from '../share/template.js';

export default class SectionDetailManager extends Component {
  constructor(props) {
    super(props);

    this.form = this.container.querySelector(`#${SECTION_SELECTOR.FORM_ID}`);
    this.formHeader = this.container.querySelector(
      `#${SECTION_SELECTOR.FORM_HEADER_ID}`,
    );
    this.stationSelector = this.container.querySelector(
      `#${SECTION_SELECTOR.STATION_SELECTOR_ID}`,
    );
    this.orderInput = this.container.querySelector(
      `#${SECTION_SELECTOR.ORDER_INPUT_ID}`,
    );
    this.addButton = this.container.querySelector(
      `#${SECTION_SELECTOR.ADD_BUTTON_ID}`,
    );
    this.table = this.container.querySelector(
      `#${SECTION_SELECTOR.TABLE_BODY}`,
    );
  }

  updateOptions() {
    this.stationSelector.innerHTML = this.state.stationList
      .map((station) => optionTemplate(station))
      .join('');
  }

  setState(nextData) {
    this.state = {
      ...this.state,
      ...nextData,
    };
    this.updateOptions();
    this.render();
  }

  updateFormHeader() {
    const { name } = this.state.currentLineData;
    this.formHeader.innerHTML = `${name} 관리`;
  }

  updateTableBody() {
    this.table.innerHTML = this.state.currentLineData.section
      .map((station, index) =>
        sectionDetailTableTemplate({
          name: station,
          index,
          buttonClass: SECTION_SELECTOR.DELETE_BUTTON,
        }),
      )
      .join('');
  }

  render() {
    this.updateFormHeader();
    this.updateTableBody();
  }
}
