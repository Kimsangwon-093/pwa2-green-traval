export const dateFormatter = {
  withHyphenYMD: (strDate) => {
    return `${strDate.slice(0, 4)}-${strDate.slice(4, 6)}-${strDate.slice(6, 8)}`;
  },
  /**
   * Date객체를 `YYYYMMDD` 포맷으로 반환
   * @param {Date} date
   * @returns {string} `YYYYMMDD` 포맷
   */
  formatDateToYMD: (date) => {
    return `${date.getFullYear()}${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;
  },
};
