export const dateFormatter = {
  /**
   * 스트링 타입의 날짜를 `(연월일 ~ 연월시분초)를 YYYY-MM-DD 로 포맷해서 변환`
   * Date 객체를  YYYYMMDD
   * @param {string} strDate
   * @returns {string} YYYY-MM-DD 포맷
   */
  withHyphenYMD: (strDate) => {
    return `${strDate.slice(0, 4)}-
    ${strDate.slice(4, 6)}-${strDate.slice(6, 8)}`;
  },
  formatDateToYMD: (date) => {
    const now = new Date();
    now.getMonth;
    return `${date.getFullYear()} ${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;
  },
};

const now = new Date();
console.log(dateFormatter.formatDateToYMD(now));
