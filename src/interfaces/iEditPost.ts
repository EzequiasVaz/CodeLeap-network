import { IPostContent } from './iPostContent';

export interface IEditPost {
    id: number,
    title: string,
    content: string,
    posts?: IPostContent[]
}