import $faq from '../components/faq';
import $header from '../components/header';
import $banner from '../components/banner';
import $portfolio from '../components/portfolio';

export default function () {
    return <>
        <$header />
        <$banner />
        <$portfolio />
        <$faq />
    </>;
};
