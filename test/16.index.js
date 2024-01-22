function checkElement(element) {
  const _class = _.get(element, '_class', '');
  const width = _.get(element, 'frame.width', 0);
  const name = _.get(element, 'name', '');
  const height = _.get(element, 'frame.height', 0);
  const base = width === height && width <= 16 && height <= 16;
  const isRadio = _class === 'oval' && base;
  const isCheckbox = _class === 'rectangle' && base;
  if (name.includes('Checkbox') || name.includes('checkbox') || name.includes('全选框') || name.includes('多选')) {
    return 'checkbox';
  }
  if (isRadio || name.includes('单选') || (base && _class === 'shapePath')) {
    return 'radio';
  }
  if (isCheckbox) {
    return 'checkbox';
  }
  return null;
}

function hasRowSelection(arr) {
  const extra = _.get(arr, '[0].name_0_extra', []);
  const _class = _.get(extra, '_class', '');
  for (const info of extra) {
    checkElement(info);
    if (_class === 'group') {
      const layers = _.get(extra, 'layers', []);
      for (const ele of layers) {
        checkElement(ele);
      }
    }
    if (_class === 'shapeGroup') {
      const layers = _.get(extra, 'layers', []);
      for (const ele of layers) {
        checkElement(ele);
      }
    }
  }
}