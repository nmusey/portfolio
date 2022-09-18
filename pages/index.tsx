import {MultiColumn} from "../components/MultiColumn";

const HomePage = () => {
    const columns = [
        <h1>Column 1</h1>,
        <h1>Column 2</h1>,
        <h1>Column 3</h1>,
    ];

    return (
        <MultiColumn columns={columns} />
    );
}

export default HomePage;