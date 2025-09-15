export const dateFormatter = {
  /**
   * 스트링 타입의 날짜를 `(연월일 ~ 연월시분초)를 YYYY-MM-DD 로 포맷해서 변환`
   * @param {string} strDate
   * @returns {string} YYYY-MM-DD 포맷
   */
  withHyphenYMD: (strDate) => {
    return `${strDate.slice(0, 4)}-
    ${strDate.slice(4, 6)}-${strDate.slice(6, 8)}`;
  },
};
