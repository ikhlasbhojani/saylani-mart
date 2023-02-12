const useLocalStorage = () => {
    const setItem = (key, value) => {
      // for set item in localStorage
      if (!key || !value) return;
      localStorage.setItem(key, JSON.stringify(value));
    };
  
    const getItem = (key) => {
      // for get item in localStorage
      if (!key) return;
      const value = localStorage.getItem(key);
      if (value) return JSON.parse(value);
    };
  
    const removeItem = (key) => {
      // for remove item in localStorage
      if (!key) return;
      localStorage.removeItem(key);
    };
  
    const clearStorage = () => localStorage.clear(); // for clear localStorage
  
    return { setItem, getItem, removeItem, clearStorage };
  };
  
  export default useLocalStorage;
  