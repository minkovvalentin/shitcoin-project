import moment from "moment";

const convertUnixTime = (time: string): string => {
  let unix_timestamp = parseInt(time);
  var date = new Date(unix_timestamp * 1000);
  return moment(date).format('MM/DD/YYYY')
}

const setToLocalStorage = (key:string, item:string) => {
  localStorage.setItem(key, item);
}

const removeFromLocalStorage = (key:string) => {
  localStorage.removeItem(key);
}

const getFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
}

export {
  convertUnixTime,
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage
}