import { Source } from '../../../types/interfaces';
import './sources.css';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone: HTMLTemplateElement = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

            (<HTMLSpanElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLDivElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (<HTMLDivElement>document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
