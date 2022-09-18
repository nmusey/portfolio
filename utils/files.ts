import {join} from "path";

export const postFilePath = (filename: string) => {
    return join(process.cwd(), "posts", filename);
}
