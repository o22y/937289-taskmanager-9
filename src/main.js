import {getMenuElement} from './components/site-menu.js';
import {getSearchElement} from './components/search.js';
import {getFiltersElement} from './components/filters.js';
import {getBoardElement} from './components/board.js';
import {getCardContainerElement} from './components/card-container.js';
import {getCardElement} from './components/card-element.js';
import {getInnerElement} from './components/inner-element.js';
import {getLoadMoreButtonElement} from './components/button.js';

const renderElement = (name, position, child) => {
  document.querySelector(name).insertAdjacentHTML(position, child);
};

renderElement(`.control`, `beforeend`, getMenuElement());
renderElement(`.main`, `beforeend`, getSearchElement());
renderElement(`.main`, `beforeend`, getFiltersElement());
renderElement(`.main`, `beforeend`, getBoardElement());
renderElement(`.board`, `beforeend`, getCardContainerElement());
renderElement(`.board__tasks`, `beforeend`, getCardElement());
renderElement(`.board__tasks`, `beforeend`, getCardElement());
renderElement(`.board__tasks`, `beforeend`, getCardElement());
renderElement(`.board__tasks`, `afterbegin`, getInnerElement());
renderElement(`.main`, `beforeend`, getLoadMoreButtonElement());
