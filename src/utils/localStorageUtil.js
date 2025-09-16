import {
  KEY_LOCALSTORAGE_FASTIVAL_FLG,
  KEY_LOCALSTORAGE_FASTIVAL_LIST,
  KEY_LOCALSTORAGE_FASTIVAL_PAGE,
} from "../configs/keys.js";

export const localStorageUtil = {
  // 책임 중심적 설계시 코드 작성 방법

  /**
   * 로컬 스토리지에 페스티벌 리스트 저장
   * @param {[]} festivalList
   */
  setFestivalList: (data) => {
    localStorage.setItem(KEY_LOCALSTORAGE_FASTIVAL_LIST, JSON.stringify(data));
  },
  /**
   * 로컬 스토리지에 페스티벌 리스트 반환
   * @returns {[]} festivalList
   */

  getFestivalList: () => {
    return localStorage.getItem(KEY_LOCALSTORAGE_FASTIVAL_LIST);
  },
  /**
   * 로컬스토리지에 페스티벌 페이지 번호 저장
   * @param {number} PageNo
   */

  setFestivalPage: (PageNo) => {
    // localStorage.setItem(KEY_LOCALSTORAGE_FASTIVAL_PAGE, PageNo.toString());
    localStorage.setItem(KEY_LOCALSTORAGE_FASTIVAL_PAGE, JSON.Stirngfy(PageNo));
  },
  /**
   * 로컬스토리지의 페스티벌 페이지 번호 반환
   * @returns {number} 페이지 번호
   */

  getFestivalPage: () => {
    return parseInt(localStorage.getItem(KEY_LOCALSTORAGE_FASTIVAL_PAGE));
  },

  /**
   * 로컬 스토리지의 페스티벌 스크롤 플래그 저장
   * @returns {boolean} flg
   *
   */

  getFestivalScrollFlg: (flg) => {
    // localStorage.setItem(KEY_LOCALSTORAGE_FASTIVAL_FLG, flg.toStirng());
    localStorage.setItem(KEY_LOCALSTORAGE_FASTIVAL_FLG, JSON.Stirngfy(flg));
  },

  // ▼ 역할 중심적 설계시 코드 작성 방법
  // setLocalStorage: (key, data) => {
  //   localStorage.setItem(key, JSON.stringify(data));
  // },

  // getLocalStorage: (key) => {
  //   return localStorage.getItem(key);
  // },
};
