export default class Component {
  constructor(props = {}) {
    this.data = {};
    this.props = props;
    this.managerId = props.managerId;
    this.container = document.querySelector(`#${props.containerId}`);
  }

  setData(nextData) {
    this.data = {
      ...this.data,
      ...nextData,
    };
    this.render?.();
  }

  clearInput() {
    this.userInput.value = '';
  }

  addToTable(value, keyName) {
    const newData = { ...this.data };
    newData[keyName].push(value);
    this.props.syncData(newData);
  }

  deleteFromTable(index, keyName) {
    const newData = { ...this.data };
    newData[keyName].splice(index, 1);
    this.props.syncData(newData);
  }

  updateTable(template) {
    this.table.innerHTML = template;
  }

  show() {
    this.container.style.display = 'block';
  }

  hide() {
    this.container.style.display = 'none';
  }
}
