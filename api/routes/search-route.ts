import { http } from 'api/utils/http-axios';
import { Request, Response, NextFunction } from 'express';
import { author } from 'api/utils/author';
import { ItemDetailFormat } from 'api/utils/item-detail';



export class SearchRoute {
    searchRoute(app: any): void {
        app.route('/api/items').get(async (req: Request, res: Response, next: NextFunction) => {
            const search = req.query['q'];
            const response = await http(`sites/MLA/search?q=${search}&limit=4`);
            const { filters, available_filters, results } = response;

            let pathFromRoot = [];
            if (filters.length > 0) {
                pathFromRoot = filters[0].values[0].path_from_root;
            } else {
                const categoryId = available_filters[0].values.sort((a, b) => b.results - a.results)[0].id;
                pathFromRoot = (await http(`/categories/${categoryId}`)).path_from_root;
            }
            const categories = pathFromRoot.map((category) => category.name);

            const items = results.map((item) => ItemDetailFormat.getItem(item));

            res.json({author, items, categories})
        });
    }
}