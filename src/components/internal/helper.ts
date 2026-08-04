export default {
  getObjectKeyValues(object: any, prefix = '') {
    let result: any[] = [];
    const objectEntries = Object.entries(object);

    objectEntries.forEach(([key, value]) => {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'object') {
        result = result.concat(this.getObjectKeyValues(value, newKey));
      } else {
        result.push({ key: newKey, value });
      }
    });
    return result;
  },
};
