import { appConstants } from './constants';

export const ORDER_HISTORY = 'ORDER_HISTORY';
const ORDER_IN_CART = 'ORDER_IN_CART';
export const ORDER_BUDDY_STATE = 'ORDER_BUDDY_STATE';
export const INFO_RESTAURANT = 'INFO_RESTAURANT';
export const SID = 'SID';
const USER_STATE = 'USER_STATE';
const URL_HOME = 'URL_HOME';
const TIME_ZONE = 'TIME_ZONE';
const ORDER_BUDDY_KEY = 'ORDER_BUDDY_KEY';
const defaultTimeZone = 'Australia/Sydney';

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

// ROOT STATE
export const saveRootState = (state: any, key: string) => setStateStorage(state, key);
export const loadRootState = (key: string) => getStateStorage(key);
