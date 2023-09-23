import $faq from '../components/faq';
import $header from '../components/header';
import $banner from '../components/banner';
import $timeline from '../components/timeline';
import $portfolio from '../components/portfolio';

export default function () {
    return <>
        <$header />
        <$banner />
        <$portfolio />
        <$faq />
        <$timeline />
    </>;
};
