const setStateStorage = (data: any, key: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    localStorage.clear();
    localStorage.setItem(key, JSON.stringify(data));
  }
};

const getStateStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      const dataParsed = JSON.parse(data);
      return dataParsed;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const removeStateStorage = (key: string) => localStorage.removeItem(key);
