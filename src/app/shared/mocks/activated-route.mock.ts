import { of } from "rxjs";

export const ActivatedRouteMock = {
    snapshot: {
        paramMap: {
            get(): string {
                return '123';
            },
        },
    },
    queryParams: of({'q': 'celulares'}),
};
