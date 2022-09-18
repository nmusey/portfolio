import fs from 'fs';
import path from 'path';
import {GetStaticPropsContext} from "next";

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const filename = context.params['slug'] as string;
    const contents = await fs.promises.readFile(filename);

    return {
        props: {contents}    
    };
}
