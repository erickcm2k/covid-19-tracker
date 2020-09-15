import {
  todayConfirmed,
  todayDeaths,
  todayRecovered,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
} from "./domVariables.js";

import renderData from "./map.js";
renderData();

 import {renderTotalInfo, renderTodayInfo} from "./cardsInfo.js";

renderTotalInfo();
renderTodayInfo();

import {searchList} from './search-list.js';
searchList();

