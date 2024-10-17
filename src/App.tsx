import React, { useEffect, useMemo, useState } from 'react';
import { shorts } from './common/shorts';
import { tiktok } from './common/tiktok';
import './styles.scss';
import { Loader } from './components/Loader/Loader';
import { Navbar } from 'containers/Navbar/Navbar';
import { Projects } from 'containers/Projects/Projects';
import { Header } from 'containers/Header/Header';
import { AboutMe } from 'containers/AboutMe/AboutMe';

export interface ShortAndTiktokDataProp {
    img: string;
    link: string;
}

const App = () => {
    const [tiktokData, setTiktokData] = useState([]);
    const [shortAndTiktokData, setShortAndTiktokData] = useState<
        ShortAndTiktokDataProp[]
    >([]);

    const getJSON = async (url: string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(response.statusText);

            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    };

    useMemo(() => {
        const appendShortAndTiktok = () =>
            setShortAndTiktokData([...shorts, ...tiktokData]);
        if (tiktokData.length > 1) appendShortAndTiktok();
    }, [tiktokData]);

    useEffect(() => {
        const getData = () => {
            tiktok.map(el =>
                getJSON(el.apiLink).then(data =>
                    setTiktokData(prevData => [
                        ...prevData,
                        ...[
                            {
                                img: data.thumbnail_url,
                                link: el.link,
                            },
                        ],
                    ]),
                ),
            );
        };
        getData();
    }, []);

    return (
        <>
            {shortAndTiktokData.length <= shorts.length ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <Header />
                    <Projects shortAndTiktokData={shortAndTiktokData} />
                    <AboutMe />
                </>
            )}
        </>
    );
};
export default App;
