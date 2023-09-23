import $faq from '../components/faq';
import $terms from '../components/terms';
import $header from '../components/header';
import $banner from '../components/banner';
import $reward from '../components/reward';
import $partners from '../components/partners';
import $timeline from '../components/timeline';
import $portfolio from '../components/portfolio';

export default function () {
    return <>
        <$header />
        <$banner />
        <$portfolio />
        <$faq />
        <$timeline />
        <$reward />
        <$partners />
        <$terms />
    </>;
};
