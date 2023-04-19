import { Article } from '../../../types/interfaces';
import './news.css';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone: HTMLTemplateElement = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);

            if (idx % 2) (<HTMLDivElement>newsClone.querySelector('.news__item')).classList.add('alt');

            (<HTMLDivElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (<HTMLUListElement>newsClone.querySelector('.news__meta-author')).textContent =
                item.author || item.source.name;
            (<HTMLUListElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (<HTMLHeadingElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
            (<HTMLHeadingElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            (<HTMLParagraphElement>newsClone.querySelector('.news__description-content')).textContent =
                item.description;
            (<HTMLParagraphElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (<HTMLDivElement>document.querySelector('.news')).innerHTML = '';
        (<HTMLDivElement>document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
