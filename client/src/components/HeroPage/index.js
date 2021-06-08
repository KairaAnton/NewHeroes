import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as heroesActionCreators from '../../actions/heroesActionCreators'

const dispatch = useDispatch;
const { getHero } = bindActionCreators(heroesActionCreators, dispatch);


function HeroPage(props) {
    useEffect(() => {
        getHero(22)
    }, []);
    const { query: superheroId } = props;
    return (
        <>
            <h1>{superheroId}</h1>
        </>
    )
}

export default HeroPage;